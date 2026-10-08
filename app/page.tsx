import Box from "@mui/material/Box";
import React from "react";
import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Leistungen from "@/components/Leistungen";
import Praxis from "@/components/Praxis";
import Ablauf from "@/components/Ablauf";
import CTA from "@/components/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Why />
      <Leistungen />
      <Praxis />
      <Ablauf />
      <CTA />
    </>
  );
};

export default Home;
