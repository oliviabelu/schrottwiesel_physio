import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { getDuoColor } from "@/src/constants/accents";

const steps = [
  {
    number: 1,
    title: "Termin",
    text: "Du erzählst uns, was los ist.",
  },
  {
    number: 2,
    title: "Befund",
    text: "Wir schauen gezielt hin.",
  },
  {
    number: 3,
    title: "Plan",
    text: "Wir definieren deine nächsten Schritte.",
  },
  {
    number: 4,
    title: "Fortschritt",
    text: "Du bekommst Werkzeuge für den Alltag.",
  },
];

const Ablauf = () => {
  return (
    <Box
      id="ablauf"
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor: "secondary.main",
      }}
    >
      <Container>
        <Typography
          variant="body2"
          sx={{ color: "info.main", textTransform: "uppercase" }}
        >
          So läuft es ab
        </Typography>
        <Typography
          variant="h2"
          sx={{ color: "secondary.contrastText", margin: "1rem 0" }}
        >
          Vier Schritte.{" "}
          <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
            Ein gemeinsames Ziel.
          </Box>
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          {steps.map((step, index) => (
            <Stack
              key={step.number}
              direction={{ xs: "row", md: "column" }}
              spacing={2}
              sx={{
                color: "secondary.contrastText",
                alignItems: { xs: "center", md: "flex-start" },
              }}
            >
              <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                <Box
                  sx={{
                    bgcolor: `${getDuoColor(index)}.main`,
                    color: `${getDuoColor(index)}.contrastText`,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {step.number}
                </Box>
                {index !== steps.length - 1 && (
                  <Box
                    sx={{
                      width: "20vw",
                      maxWidth: "220px",
                      height: "1px",
                      bgcolor: "secondary.contrastText",
                      display: { xs: "none", md: "block" },
                    }}
                  ></Box>
                )}
              </Stack>
              <Typography
                variant="body1"
                sx={{ color: "secondary.contrastText", fontWeight: 600 }}
              >
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  display: { xs: "none", md: "flex" },
                  color: "secondary.contrastText",
                }}
              >
                {step.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Ablauf;
