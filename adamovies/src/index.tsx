
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Popular,
  Search,
  Upcoming,
} from "./pages";

import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/*   http://localhost:3000/   */}
        <Route index element={<Home />} />

        {/*   http://localhost:3000/popular   */}
        <Route path="popular" element={<Popular />} />

        {/*   http://localhost:3000/search   */}
        <Route path="search" element={<Search />} />

        {/*   http://localhost:3000/upcoming   */}
        <Route path="upcoming" element={<Upcoming />} />
      </Route>
    </Routes>
  </BrowserRouter>
);