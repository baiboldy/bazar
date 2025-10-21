import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "@/widgets/header";
import { ProfilePage } from "@pages/profile";
import { AboutPage } from "@pages/about";
import { HomePage } from "@pages/home";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
