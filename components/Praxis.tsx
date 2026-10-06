import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { getAccent } from "@/src/constants/accents";
import Strenght from "./Strenght";

const strenghts = [
  {
    title: "Persönlich",
    text: "Eine feste Ansprechperson.",
  },
  {
    title: "Aktiv",
    text: "Bewegung als Teil der Lösung.",
  },
  { title: "Klar", text: "Verständliche nächste Schritte." },
];

const Praxis = () => {
  return (
    <Box
      id="praxis"
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "info.light",
              borderRadius: 1,
              aspectRatio: "4 / 3",
            }}
          >
            Praxisfotos
          </Box>
          <Stack direction="column" spacing={3} sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
              }}
            >
              Die Praxis
            </Typography>
            <Typography variant="h2">
              Modern behandeln.
              <br />
              <Box component="span" sx={{ color: "primary.main" }}>
                Menschlich begleiten.
              </Box>
            </Typography>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "info.light",
                borderRadius: 1,
                width: "100%",
                maxWidth: 480,
                mx: "auto",
                aspectRatio: "16 / 9",
              }}
            >
              Praxisfoto
            </Box>
            <Typography variant="body2">
              Bei{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Schrottwiesel Physiotherapie{" "}
              </Box>
              steht der Mensch im Mittelpunkt. Wir verbinden fundiertes
              physiotherapeutisches Wissen mit persönlicher Betreuung und einem
              modernen, aktiven Ansatz. Gemeinsam finden wir heraus, was dein
              Körper braucht – und arbeiten Schritt für Schritt daran, dass du
              dich wieder sicherer, freier und wohler bewegen kannst.
            </Typography>
            <Stack direction="column" spacing={2}>
              {strenghts.map((strenght, index) => (
                <Strenght
                  key={strenght.title}
                  {...strenght}
                  color={getAccent(index)}
                ></Strenght>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Praxis;
