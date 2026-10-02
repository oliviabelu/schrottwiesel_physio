import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";

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
    <Box>
      <Typography>Warum Schrottwiesel?</Typography>
      <Typography variant="h1">
        Behandlung, die dich wirklich weiterbringt.
      </Typography>
      <Typography>
        Keine Behandlung von der Stange. Wir verbinden gezielte Befundung,
        aktive Therapie und verständliche Übungen – damit du nicht nur heute
        weniger Beschwerden hast, sondern langfristig mehr Sicherheit bekommst.
      </Typography>
    </Box>
  );
};

export default Why;
