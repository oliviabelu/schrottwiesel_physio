import React from "react";
import Stack from "@mui/material/Stack";
import VisualBox2 from "./VisualBox2";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import Box from "@mui/material/Box";

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
    <Section id="leistungen" bgcolor="background.paper">
      <SectionHeader
        section="Leistungen"
        title="Was können wir für dich tun?"
        text="Klare Angebote. Individuelle Kombinationen."
      ></SectionHeader>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          padding: 3,
        }}
      >
        {leistungen.map((leistung, index) => (
          <VisualBox2
            key={leistung.title}
            {...leistung}
            color={getAccent(index)}
          ></VisualBox2>
        ))}
      </Box>
    </Section>
  );
};

export default Leistungen;
