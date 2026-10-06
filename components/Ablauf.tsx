import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const steps = [
  {
    number: 1,
    title: "Termin",
  },
  {
    number: 2,
    title: "Befund",
  },
  {
    number: 3,
    title: "Plan",
  },
  {
    number: 4,
    title: "Fortschritt",
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
        <Stack direction="column" spacing={3}>
          <Typography
            variant="body2"
            sx={{ color: "info.main", textTransform: "uppercase" }}
          >
            So läuft es ab
          </Typography>
          <Typography variant="h2" sx={{ color: "secondary.contrastText" }}>
            Vier Schritte.
          </Typography>
          <Stack direction="column" spacing={2}>
            {steps.map((step) => (
              <Stack
                key={step.number}
                direction="row"
                spacing={2}
                sx={{ color: "secondary.contrastText", alignItems: "center" }}
              >
                <Box
                  sx={{
                    bgcolor: "primary.main",
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
                <Typography
                  variant="body1"
                  sx={{ color: "secondary.contrastText", fontWeight: 600 }}
                >
                  {step.title}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Ablauf;
