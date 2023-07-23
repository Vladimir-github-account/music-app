import React, { FC } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Player from "@/components/Player";
import Head from "next/head";

interface MainLayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const MainLayout: FC<MainLayoutProps> = ({
  title,
  description,
  keywords,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Music app"}</title>
        <meta
          name="description"
          content={"Music app. Publish tracks and share!" + description}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content={keywords || "Music, track, artist, publish"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Container>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
