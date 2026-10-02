import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

//borderBottom: "1px solid #FFF"
//borderColor: "transparent transparent #000 transparent"
//borderRadius: "60%/75px 75px 0 0"
//transform: "rotateX(180deg)"

const Hero = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        bgcolor: "info.light",
        borderBottom: "1px solid #FFF",
        borderRadius: "0 0 40% 60%/75px ",
      }}
    >
      <Typography color="primary.main">Physiotherapie</Typography>
      <Typography
        variant="h1"
        sx={{ textTransform: "uppercase" }}
        width={"40vw"}
      >
        Dein Körper, <span color="primary.main">unsere</span> Baustelle!
      </Typography>
      <Typography width={"40vw"}>
        Individuelle Physiotherapie für Menschen, die wieder besser, sicherer
        und freier in Bewegung kommen wollen.
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Button variant="contained">Erstgespräch</Button>
        <Button variant="contained" color="secondary">
          Leistungen
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
