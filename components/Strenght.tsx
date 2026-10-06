import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AccentColor } from "@/src/constants/accents";

type Props = {
  title: string;
  text: string;
  color: AccentColor;
};

const Strenght = ({ title, text, color }: Props) => {
  return (
    <Box>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box
          sx={{
            bgcolor: `${color}.main`,
            width: 20,
            height: 20,
            borderRadius: "50%",
          }}
        ></Box>
        <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
      </Stack>
      <Typography variant="body2" sx={{ pl: "32px" }}>
        {text}
      </Typography>
    </Box>
  );
};

export default Strenght;
