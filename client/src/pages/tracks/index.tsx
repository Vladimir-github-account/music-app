import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { ITrack } from "@/types/track";
import TrackList from "@/components/TrackList";

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
      _id: "1",
      name: "Track #1",
      artist: "Artist #1",
      text: "song text",
      listens: 5,
      audio: "http://localhost:5000/audio/1.mp3",
      picture: "http://localhost:5000/image/1.jpg",
      comments: [],
    },
    {
      _id: "2",
      name: "Track #2",
      artist: "Artist #2",
      text: "song text",
      listens: 5,
      audio: "http://localhost:5000/audio/2.mp3",
      picture: "http://localhost:5000/image/2.jpg",
      comments: [],
    },
  ];
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Track list</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Download
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
