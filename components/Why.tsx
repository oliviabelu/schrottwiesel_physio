import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import VisualBox1 from "./VisualBox1";
import { getAccent } from "@/src/constants/accents";

const reasons = [
  {
    number: 1,
    reason: "Zuhören",
    explanation: "Wir verstehen zuerst, was dich wirklich einschränkt.",
  },
  {
    number: 2,
    reason: "Bewegen",
    explanation: "Wir arbeiten aktiv an dem, was du wieder können möchtest.",
  },
  {
    number: 3,
    reason: "Verstehen",
    explanation: "Du bekommst einen Plan, den du selbst anwenden kannst.",
  },
];

const Why = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        <Typography variant="body2" sx={{}}>
          Warum Schrottwiesel?
        </Typography>
        <Typography variant="h2" sx={{ margin: "1rem 0" }}>
          Behandlung, die dich wirklich weiterbringt.
        </Typography>
        <Typography variant="body1">
          Keine Behandlung von der Stange. Wir verbinden gezielte Befundung,
          aktive Therapie und verständliche Übungen – damit du nicht nur heute
          weniger Beschwerden hast, sondern langfristig mehr Sicherheit
          bekommst.
        </Typography>
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
      </Container>
    </Box>
  );
};

export default Why;
