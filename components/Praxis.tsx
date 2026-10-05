import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { getAccent } from "@/src/constants/accents";

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
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
      }}
    >
      <Container>
        <Stack direction="row" spacing={3}>
          <Box
            bgcolor="info.light"
            width="300px"
            height="200px"
            textAlign="center"
            padding="3rem"
            borderRadius={1}
            sx={{ flex: 1, display: { xs: "none", sm: "block" } }}
          >
            Praxisfoto
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
              bgcolor="info.light"
              width="300px"
              height="200px"
              textAlign="center"
              padding="3rem"
              borderRadius={1}
              sx={{ display: { xs: "block", sm: "none" } }}
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
                <Box key={strenght.title}>
                  <Stack direction="row" spacing={2}>
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius={100}
                      sx={{ bgcolor: `${getAccent(index)}.main` }}
                    ></Box>
                    <Stack direction="column">
                      <Typography sx={{ fontWeight: 600 }}>
                        {strenght.title}
                      </Typography>
                      <Typography variant="body2">{strenght.text}</Typography>
                    </Stack>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Praxis;
