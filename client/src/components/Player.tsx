import React, { FC } from "react";
import { Grid, IconButton } from "@mui/material";
import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import styles from "../styles/Player.module.scss";
import { ITrack } from "@/types/track";
import TrackProgress from "@/components/TrackProgress";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useActions";

const Player: FC = () => {
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
  const { active, duration, currentTime, volume, pause } = useTypedSelector(
    (state) => state.player
  );
  const { playTrack, pauseTrack } = useActions();
  const play = () => {
    if (pause) {
      playTrack();
    } else {
      pauseTrack();
    }
  };

  return (
    <div className={styles.player}>
      <IconButton onClick={play}>
        {pause ? <PlayArrow /> : <Pause />}
      </IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => ({})} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => ({})} />
    </div>
  );
};

export default Player;
