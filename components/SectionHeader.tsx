import React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

type Props = {
  section: string;
  title: React.ReactNode;
  text?: string;
};

const SectionHeader = ({ section, title, text }: Props) => {
  return (
    <Stack spacing={2}>
      <Typography
        variant="body2"
        sx={{ color: "primary.main", textTransform: "uppercase" }}
      >
        {section}
      </Typography>
      <Typography variant="h2">{title}</Typography>
      {text && <Typography variant="body2">{text}</Typography>}
    </Stack>
  );
};

export default SectionHeader;
