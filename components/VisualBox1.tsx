import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AccentColor } from "@/src/constants/accents";

type Props = {
  number: number;
  title: string;
  text: string;
  color: AccentColor;
};

const VisualBox1 = ({ number, title, text, color }: Props) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderLeftColor: `${color}.main`,
        borderLeftWidth: 4,
        borderRadius: 1,
        padding: 1,
        maxWidth: "350px",
      }}
    >
      <Stack direction="column" spacing={1.5}>
        <Typography sx={{ color: `${color}.main` }}>{number}</Typography>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body2">{text}</Typography>
      </Stack>
    </Box>
  );
};

export default VisualBox1;
