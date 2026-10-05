import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import VisualBox2 from "./VisualBox2";

import { getAccent } from "@/src/constants/accents";

const leistungen = [
  {
    title: "Manuelle Therapie",
    text: "Gezielte Techniken und Mobilisation, abgestimmt auf deinen Befund.",
  },
  {
    title: "Krankengymnastik",
    text: "Aktive Übungen und Bewegungsaufbau für deine konkreten Ziele.",
  },
  {
    title: "Sportphysiotherapie",
    text: "Belastung steuern, Leistungsfähigkeit zurückgewinnen und sicher einsteigen.",
  },
];

const Leistungen = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor: "background.paper",
      }}
    >
      <Container>
        <Typography variant="body2" sx={{ color: "primary.main" }}>
          Leistungen
        </Typography>
        <Typography variant="h2" sx={{ margin: "1rem 0" }}>
          Was können wir für dich tun?
        </Typography>
        <Typography variant="body2">
          Klare Angebote. Individuelle Kombinationen.
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{ p: 3, flex: 1 }}
        >
          {leistungen.map((leistung, index) => (
            <VisualBox2
              key={leistung.title}
              {...leistung}
              color={getAccent(index)}
            ></VisualBox2>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Leistungen;
