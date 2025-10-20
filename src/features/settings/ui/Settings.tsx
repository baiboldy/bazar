import { Box, IconButton } from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

export function Settings() {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="show more"
        // aria-controls={mobileMenuId}
        aria-haspopup="true"
        // onClick={handleMobileMenuOpen}
        color="inherit"
      >
        <MoreIcon />
      </IconButton>
    </Box>
  );
}
