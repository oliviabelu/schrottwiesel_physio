import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const CTA = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor: "primary.main",
      }}
    >
      <Container>
        <Box
          sx={{ bgcolor: "secondary.main", padding: 2.5, borderRadius: 1.5 }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: "warning.main", textTransform: "uppercase" }}
              >
                Bereit für den nächsten{" "}
                <Box
                  component="span"
                  sx={{
                    display: { xs: "flex", md: "inline" },
                    color: { xs: "secondary.contrastText", md: "inherit" },
                    fontSize: { xs: "2.5rem", md: "0.95rem" },
                  }}
                >
                  Schritt?
                </Box>
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  color: "secondary.contrastText",
                  fontSize: { xs: "1.5rem", md: "2.5rem" },
                  marginTop: 2,
                }}
              >
                Dein Körper, unsere Baustelle.
              </Typography>
              <Typography
                variant="body2"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                Erzähl uns kurz, wo es gerade hakt. Wir melden uns mit dem
                passenden nächsten Schritt
              </Typography>
            </Box>
            <Box sx={{ flex: 1, alignSelf: { md: "center" } }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "warning.main",
                  color: "warning.contrastText",
                  textTransform: "uppercase",
                }}
              >
                Termin vereinbaren
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CTA;
