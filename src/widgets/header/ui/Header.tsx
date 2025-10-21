import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
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
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SidebarToggle />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              BAZAR
            </Typography>
            <Search
              onSearch={(e) => {
                e.preventDefault();
              }}
            />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Mail />
              <Notification />
              <Profile />
            </Box>
            <Settings />
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}
