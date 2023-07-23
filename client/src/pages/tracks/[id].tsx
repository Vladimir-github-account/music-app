import React, { FC, useState } from "react";
import { ITrack } from "@/types/track";
import MainLayout from "@/layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useInput } from "@/hooks/useInput";

const TrackPage: FC = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput("");
  const text = useInput("");

  const addComment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/tracks/comment",
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, response.data] });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      >
        Back to list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img
          src={"http://localhost:5000/" + track.picture}
          width={200}
          height={200}
          alt="picture"
        />
        <div style={{ margin: 30 }}>
          <h2>Playing now: {track.name}</h2>
          <h2>Artist: {track.artist}</h2>
          <h2>Listens: {track.listens}</h2>
        </div>
      </Grid>
      <h2>Lyrics</h2>
      <p>{track.text}</p>
      <h2>Comments</h2>
      <Grid container>
        <TextField {...username} label="Enter your nickname" fullWidth />
        <TextField {...text} label="Comment" fullWidth multiline rows={4} />
        <Button onClick={addComment}>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <div>User {comment.username}</div>
            <div>{comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await axios.get(
    "http://localhost:5000/tracks/" + params?.id
  );
  return {
    props: {
      serverTrack: response.data,
    },
  };
};
