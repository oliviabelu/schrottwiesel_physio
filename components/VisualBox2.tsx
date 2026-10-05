import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AccentColor } from "@/src/constants/accents";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

type Props = {
  title: string;
  text: string;
  color: AccentColor;
};

const VisualBox2 = ({ title, text, color }: Props) => {
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        maxWidth: "350px",
      }}
    >
      <Stack direction="column" spacing={1.5}>
        <Box
          sx={{
            bgcolor: `${color}.main`,
            borderRadius: "5px",
            padding: 1,
            fontWeight: 600,
          }}
        >
          {title}
        </Box>

        <Typography variant="body2" padding={1}>
          {text}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ padding: 1 }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "small",
              alignSelf: "flex-end",
            }}
          >
            Mehr erfahren
          </Typography>
          <ArrowRightAltIcon color="primary" />
        </Stack>
      </Stack>
    </Box>
  );
};

export default VisualBox2;
