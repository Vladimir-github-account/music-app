import React, { FC } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Player from "@/components/Player";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
