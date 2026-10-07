import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

type Props = { id?: string; children: React.ReactNode };

const Section = ({ id, children }: Props) => {
  return (
    <Box component="section" id={id} sx={{ py: { xs: 4, md: 8 } }}>
      <Container>{children}</Container>
    </Box>
  );
};

export default Section;
