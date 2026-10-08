import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import EastIcon from "@mui/icons-material/East";
import Stack from "@mui/material/Stack";

type Props = {
  icon: string;
  color: string;
  title: string;
  text: string;
  index: number;
};

const intensity = ["main", "dark"];

const CardLeistung = ({ icon, color, title, text, index }: Props) => {
  return (
    <Box
      sx={{
        borderColor: "divider",
        borderRadius: 1,
        height: "100%",
        padding: 2,
        bgcolor: "background.paper",
      }}
    >
      <Stack direction="column" spacing={1.5} sx={{ height: "100%" }}>
        <Box
          sx={{
            bgcolor: `${color}.main`,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        >
          <Image
            src={icon}
            alt={title}
            width={50}
            height={50}
            style={{ padding: 7, color: `${color}.contrastText` }}
          />
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          {text}
        </Typography>
        <IconButton
          sx={{
            bgcolor: `${color}.main`,
            width: 25,
            height: 25,
          }}
        >
          <EastIcon
            sx={{
              color: `${color}.contrastText`,
              padding: 0.75,
              "&:hover": { color: "#000" },
            }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default CardLeistung;
