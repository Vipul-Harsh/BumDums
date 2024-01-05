import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home1 from "./component/home/home1";
import Home2 from "./pages/home/home2";
import Home3 from "./pages/home/home3";
import Home4 from "./pages/home/home4";
import Aboutus from "./pages/aboutus/aboutus";
import Home from "./pages/home/home";

// 3️⃣ Router singleton created
const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}

// 1️⃣ Changed from App to Root
function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home1/*" element={<Home1 />} />
      <Route path="/home2/*" element={<Home2 />} />
      <Route path="/home3/*" element={<Home3 />} />
      <Route path="/home4/*" element={<Home4 />} />
      <Route path="/aboutus/*" element={<Aboutus />} />
    </Routes>
  );
}