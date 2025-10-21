import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: Props) {
  return (
    <Box component="section">
      <Typography variant="h5" component="h1" gutterBottom sx={{ mb: 2 }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
