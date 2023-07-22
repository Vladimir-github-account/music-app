import React, { FC } from "react";

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e) => void;
}

const TrackProgress: FC<TrackProgressProps> = ({ left, right, onChange }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={left}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div></div>
    </div>
  );
};

export default TrackProgress;
