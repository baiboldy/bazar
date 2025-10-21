import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Search } from "@/features/search";
import { Profile } from "@features/profile";
import { Settings } from "@/features/settings";
import { Notification } from "@features/notification";
import { Mail } from "@/features/mail";
import { SidebarToggle } from "@features/sidebar-toggle";

import { Outlet, Link } from "react-router";

export function Header() {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SidebarToggle />
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: {
                    xs: "none",
                    sm: "block",
                  },
                }}
              >
                BAZAR
              </Typography>
            </Link>
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
      <Container maxWidth="xl" sx={{ mt: 1 }}>
        <Outlet />
      </Container>
    </>
  );
}
