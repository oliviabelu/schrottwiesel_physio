import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { getAccent } from "@/src/constants/accents";
import Strenght from "./Strenght";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

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
    <Section id="praxis">
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gridTemplateAreas: {
            xs: `"header" "photo" "body"`,
            md: `"photo header" "photo body"`,
          },
          columnGap: { md: 6 },
        }}
      >
        <Box sx={{ gridArea: "header", alignSelf: { md: "end" } }}>
          <SectionHeader
            section="Die Praxis"
            title={
              <>
                Modern behandeln.{" "}
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "primary.main",
                  }}
                >
                  Menschlich begleiten.
                </Box>
              </>
            }
          ></SectionHeader>
        </Box>

        <Box
          sx={{
            gridArea: "photo",
            alignSelf: "start",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "info.light",
            borderRadius: 1,
            width: "100%",
            maxWidth: { xs: 480, md: "none" },
            mx: { xs: "auto", md: 0 },
            aspectRatio: { xs: "16 / 9", md: "4 / 3" },
          }}
        >
          Praxisfoto
        </Box>
        <Stack
          spacing={3}
          sx={{ gridArea: "body", alignSelf: { md: "start" } }}
        >
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
      </Box>
    </Section>
  );
};

export default Praxis;
