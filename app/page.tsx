import Box from "@mui/material/Box";
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Leistungen from "@/components/Leistungen";
import Praxis from "@/components/Praxis";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Navigation></Navigation>
      <Hero></Hero>
      <Why></Why>
      <Leistungen></Leistungen>
      <Praxis></Praxis>
    </Box>
  );
};

export default Home;
