import Box from "@mui/material/Box";
import React from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Why from "@/components/Why";

const Home = () => {
  return (
    <Box>
      <Navigation></Navigation>
      <Hero></Hero>
      <Why></Why>
    </Box>
  );
};

export default Home;
