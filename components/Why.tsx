import Typography from "@mui/material/Typography";
import React from "react";
import Stack from "@mui/material/Stack";
import VisualBox1 from "./VisualBox1";
import { getAccent } from "@/src/constants/accents";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const reasons = [
  {
    number: 1,
    title: "Zuhören",
    text: "Wir verstehen zuerst, was dich wirklich einschränkt.",
  },
  {
    number: 2,
    title: "Bewegen",
    text: "Wir arbeiten aktiv an dem, was du wieder können möchtest.",
  },
  {
    number: 3,
    title: "Verstehen",
    text: "Du bekommst einen Plan, den du selbst anwenden kannst.",
  },
];

const Why = () => {
  return (
    <Section>
      <SectionHeader
        section="Warum Schrottwiesel?"
        title="Behandlung, die dich wirklich weiterbringt."
        text="Keine Behandlung von der Stange. Wir verbinden gezielte Befundung,
          aktive Therapie und verständliche Übungen – damit du nicht nur heute
          weniger Beschwerden hast, sondern langfristig mehr Sicherheit
          bekommst."
      ></SectionHeader>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ p: 3, flex: 1 }}
      >
        {reasons.map((reason, index) => (
          <VisualBox1
            key={reason.number}
            {...reason}
            color={getAccent(index)}
          />
        ))}
      </Stack>
    </Section>
  );
};

export default Why;
