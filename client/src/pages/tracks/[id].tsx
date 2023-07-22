import React, { FC } from "react";
import { ITrack } from "@/types/track";
import MainLayout from "@/layouts/MainLayout";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

const TrackPage: FC = () => {
  const track: ITrack = {
    _id: "1",
    name: "Track #1",
    artist: "Artist #1",
    text: "song text",
    listens: 5,
    audio: "http://localhost:5000/audio/1.mp3",
    picture: "http://localhost:5000/image/1.jpg",
    comments: [],
  };
  const router = useRouter();
  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: 32 }}
        onClick={() => router.push("/tracks")}
      />
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} width={200} height={200} alt="track picture" />
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
        <TextField label="Enter your nickname" fullWidth />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Send</Button>
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
