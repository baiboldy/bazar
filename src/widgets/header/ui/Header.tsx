import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Search } from "@/features/search";
import { Profile } from "@features/profile";
import { Settings } from "@/features/settings";
import { Notification } from "@features/notification";
import { Mail } from "@/features/mail";
import { SidebarToggle } from "@features/sidebar-toggle";

import { Outlet } from "react-router";

export function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <SidebarToggle />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <Search />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Mail />
            <Notification />
            <Profile />
          </Box>
          <Settings />
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
