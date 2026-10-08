import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";

const highlights = ["persönlich", "aktiv", "alltagsnah"];

const Hero = () => {
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
              Physiotherapie
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.25rem", md: "4rem" },
                textTransform: "uppercase",
                margin: "2rem 0",
              }}
            >
              Dein Körper,
              <br />
              <Box component="span" sx={{ color: "primary.main" }}>
                unsere
                <br />
              </Box>
              Baustelle!
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginBottom: "2rem", maxWidth: { sm: "50vw" } }}
            >
              Individuelle Physiotherapie für Menschen, die wieder besser,
              sicherer und freier in Bewegung kommen wollen.
            </Typography>
            <Box sx={{ display: "flex", gap: "2rem", marginBottom: "2rem" }}>
              <Button variant="contained">Erstgespräch</Button>
              <Button variant="contained" color="secondary">
                Leistungen
              </Button>
            </Box>

            <Stack
              direction="row"
              spacing={{ xs: 2, md: 4 }}
              useFlexGap
              flexWrap="wrap"
            >
              {highlights.map((highlight) => (
                <Stack
                  key={highlight}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <CheckIcon color="primary" fontSize="small" />
                  <Typography>{highlight}</Typography>
                </Stack>
              ))}
            </Stack>
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

export default Hero;
