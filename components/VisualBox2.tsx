import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { AccentColor } from "@/src/constants/accents";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";

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
        height: "100%",
        bgcolor: "background.default",
      }}
    >
      <Stack direction="column" spacing={1.5} sx={{ height: "100%" }}>
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

        <Typography
          variant="body2"
          sx={{
            padding: 1,
            flexGrow: 1,
          }}
        >
          {text}
        </Typography>

        <MuiLink
          component={NextLink}
          href="/leistungen"
          sx={{
            "&:hover": {
              fontWeight: 600,
            },
          }}
        >
          {/* <Typography
            sx={{
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "small",
            }}
          > */}{" "}
          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ padding: 1 }}
          >
            Mehr erfahren
            {/* </Typography> */}
            <ArrowRightAltIcon color="primary" />
          </Stack>
        </MuiLink>
      </Stack>
    </Box>
  );
};

export default VisualBox2;
