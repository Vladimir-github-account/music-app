import React, { FC } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>{children}</Container>
    </>
  );
};

export default MainLayout;
