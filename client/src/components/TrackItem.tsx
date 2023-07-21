import React, { FC } from "react";
import { ITrack } from "@/types/track";
import { Card } from "@mui/material";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: FC<TrackItemProps> = ({ track, boolean = false }) => {
  return <Card>{track.name}</Card>;
};

export default TrackItem;
