import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainClient from "./layouts/client/MainClient";
import HomePageClient from "./pages/client/HomePageClient";
import MainAdmin from "./layouts/admin/MainAdmin";
import HomePageAdmin from "./pages/admin/HomePageAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainClient />}>
          <Route index element={<HomePageClient />} />
        </Route>
        <Route path="admin" element={<MainAdmin />}>
          <Route index element={<HomePageAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
