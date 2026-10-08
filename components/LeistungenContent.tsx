import React from "react";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { leistungen } from "@/src/constants/structure";
import CardLeistung from "./CardLeistung";
import Box from "@mui/material/Box";
import { getAccent } from "@/src/constants/accents";

const LeistungenContent = () => {
  return (
    <Section>
      <SectionHeader
        section="Unsere Leistungen"
        title="Vielfältige Therapie - ein Ziel. Dein Wohlbefinden"
        text="Wir bieten dir ein umfassendes Leistungsspektrum, das auf deine individuellen Bedürfnisse und Ziele abgestimmt ist. Hier findest du einen Überblick über unsere Angebote:"
      ></SectionHeader>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          mt: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        {leistungen.map((leistung, index) => (
          <CardLeistung
            key={leistung.titel}
            icon={leistung.icon}
            color={getAccent(index)}
            title={leistung.titel}
            text={leistung.text}
            index={index}
          ></CardLeistung>
        ))}
      </Box>
    </Section>
  );
};

export default LeistungenContent;
