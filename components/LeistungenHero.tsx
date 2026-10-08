import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Button from "@mui/material/Button";

const LeistungenHero = () => {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "info.light",
        borderRadius: "0 0 50% 50% / 40px ",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{ color: "primary.main", textTransform: "uppercase" }}
            >
              Unsere Leistungen
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", md: "4rem" },

                margin: "2rem 0",
              }}
            >
              Physiotherapie mit System
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "2rem", maxWidth: { sm: "50vw" } }}
            >
              Ob akute Beschwerden, chronische Schmerzen oder einfach der Wunsch
              nach mehr Beweglichkeit - wir bieten dir ein breites Spektrum an
              physiotherapeutischen Leistungen, individuell auf deine
              Bedrüfnisse abgestimmt.
            </Typography>

            <Button variant="contained">Termin vereinbaren</Button>
          </Box>
          <Box sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
            <Image
              src="/Schrottwiesel_Physiotherapie.PNG"
              alt="Logo"
              width={400}
              height={600}
              style={{ borderRadius: 16 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default LeistungenHero;
