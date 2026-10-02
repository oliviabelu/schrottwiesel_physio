import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Navigation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Image
          src="/Schrottwiesel_Physiotherapie.PNG"
          alt="Logo"
          width={60}
          height={90}
        ></Image>
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <Typography>Leistungen</Typography>
          <Typography>Praxis</Typography>
          <Typography>Team</Typography>
          <Typography>Ablauf</Typography>
          <Typography>Kontakt</Typography>
        </Box>
      </Box>
      <Button variant="contained" color="primary">
        Termin vereinbaren
      </Button>
    </Box>
  );
};

export default Navigation;
