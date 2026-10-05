"use client";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        padding: "1rem",
        height: "auto",
        bgcolor: "info.light",
        borderBottom: "1px solid #FFF",
        borderRadius: "0 0 40% 60%/75px ",
      }}
    >
      <Typography color="primary.main">Physiotherapie</Typography>
      <Typography
        variant="h1"
        sx={{ textTransform: "uppercase", margin: "2rem 0" }}
        width={"30vw"}
      >
        Dein Körper,
        <span style={{ color: theme.palette.primary.main }}>unsere</span>{" "}
        Baustelle!
      </Typography>
      <Typography width={"50vw"} sx={{ marginBottom: "2rem" }}>
        Individuelle Physiotherapie für Menschen, die wieder besser, sicherer
        und freier in Bewegung kommen wollen.
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
        <Button variant="contained">Erstgespräch</Button>
        <Button variant="contained" color="secondary">
          Leistungen
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "50vw",
          marginBottom: "3rem",
        }}
      >
        <Typography>persönlich</Typography>
        <Typography>aktiv</Typography>
        <Typography>alltagsnah</Typography>
      </Box>
    </Box>
  );
};

export default Hero;
