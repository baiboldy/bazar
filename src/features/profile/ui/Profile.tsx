import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

export function Profile() {
  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      // aria-controls={menuId}
      aria-haspopup="true"
      // onClick={handleProfileMenuOpen}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  );
}
