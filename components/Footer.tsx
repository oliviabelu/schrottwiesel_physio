import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import NextLink from "next/link";
import { navItems } from "@/src/constants/structure";

const Footer = () => {
  return (
    <Box id="kontakt" sx={{ padding: 3 }}>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 5 }}
        >
          <Box>
            <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
              Schrottwiesel
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: 600,
                margin: "1rem 0",
              }}
            >
              Physiotherapie
            </Typography>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Typography variant="body2">Werkstattstr. 123</Typography>
              <Box component="span" sx={{ color: "text.secondary" }}>
                ·
              </Box>
              <Typography variant="body2">18234 Werkstadt</Typography>
            </Stack>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: "center" }}>
              <Typography variant="body2">0382 007 007</Typography>
              <Box component="span" sx={{ color: "text.secondary" }}>
                ·
              </Box>
              <Typography variant="body2">physio@schrottwiesel.de</Typography>
            </Stack>
          </Box>
          <Divider sx={{ margin: "2rem 0", display: { md: "none" } }} />
          <Stack
            direction="column"
            spacing={1}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                display: { xs: "none", md: "block" },
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Navigation
            </Typography>
            {navItems.map((item) => (
              <MuiLink
                key={item.label}
                component={NextLink}
                href={item.href}
                variant="body2"
                color="text.secondary"
              >
                {item.label}
              </MuiLink>
            ))}
          </Stack>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                display: { xs: "none", md: "block" },
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Öffnungszeiten
            </Typography>
            <Typography variant="body2">Mo - Fr: 08:00 - 18:00</Typography>
            <Typography variant="body2">Sa: nach Vereinbarung</Typography>
            <Typography variant="body2">So: geschlossen</Typography>
          </Stack>
          <Stack
            direction={{ xs: "row", md: "column" }}
            spacing={{ xs: 3, md: 1 }}
          >
            <Typography
              variant="body2"
              sx={{
                display: { xs: "none", md: "block" },
                color: "primary.main",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Rechtliches
            </Typography>
            <MuiLink
              component={NextLink}
              href="#"
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: 11, md: "0.95rem" },
              }}
            >
              Impressum
            </MuiLink>
            <MuiLink
              component={NextLink}
              href="#"
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: 11, md: "0.95rem" },
              }}
            >
              Datenschutz
            </MuiLink>
            <MuiLink
              component={NextLink}
              href="#"
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: 11, md: "0.95rem" },
              }}
            >
              Cookie-Einstellungen
            </MuiLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
