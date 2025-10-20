import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "@pages/home/ui/HomePage.tsx";
import AboutPage from "@pages/about/ui/AboutPage.tsx";
import { Header } from "@/widgets/header";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
