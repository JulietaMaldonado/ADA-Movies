import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Popular,
  Search,
  Upcoming,
} from "./pages";

function App() {


  return (
   <BrowserRouter>
   <Routes>
      <Route path="/">
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
}

export default App;