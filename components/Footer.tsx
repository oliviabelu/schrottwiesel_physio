import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <Box id="kontakt" sx={{ padding: 3 }}>
      <Container>
        <Typography variant="h2" sx={{ textTransform: "uppercase" }}>
          Schrottwiesel
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "primary.main", textTransform: "uppercase" }}
        >
          Physiotherapie
        </Typography>
        <Typography>Werkstattstr. 123</Typography>
        <Typography>12345 Werkstadt</Typography>
        <Typography>Telefon: 0381 007 007</Typography>
        <Typography>E-Mail: schrottwiesel@physio.de</Typography>
        <Divider />
        <Typography variant="body2" sx={{ fontSize: 10 }}>
          Impressum Datenschutz
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
