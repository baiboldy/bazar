import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <Box component="section">
      <Typography variant="h5" component="h1">
        {title}
      </Typography>
      {children}
    </Box>
  );
}
