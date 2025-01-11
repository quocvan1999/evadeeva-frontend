import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainClient from "./layouts/client/MainClient";
import HomePageClient from "./pages/client/HomePageClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainClient />}>
          <Route index element={<HomePageClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
