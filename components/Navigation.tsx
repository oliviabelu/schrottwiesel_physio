"use client";
import React from "react";
import Container from "@mui/material/Container";
import Image from "next/image";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import MuiLink from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { navItems } from "@/src/constants/structure";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{ bgcolor: "Background.default", color: "text.primary" }}
    >
      <Container>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MuiLink component={NextLink} href="/">
            <Image
              src="/Schrottwiesel_Physiotherapie_Logo.png"
              alt="Logo"
              width={86}
              height={64}
            />
          </MuiLink>
          <Stack
            component="nav"
            direction="row"
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navItems.map((item) => (
              <MuiLink key={item.href} component={NextLink} href={item.href}>
                {item.label}
              </MuiLink>
            ))}
          </Stack>

          <Button
            variant="contained"
            sx={{ display: { xs: "none", md: "inline-flex" } }}
          >
            Termin vereinbaren
          </Button>
          <IconButton
            aria-label="Menü öffnen"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
          <List>
            {navItems.map((item) => (
              <ListItemButton
                key={item.href}
                component={NextLink}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navigation;
