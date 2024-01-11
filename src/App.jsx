import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";
import Signup from "./pages/Signup";
import VideoPage from "./pages/VideoPage";
import Details from "./pages/Details";
import { Payment } from "./components/payment";
import { Confirm } from "./components/confirm";
import { Course } from "./components/Course";
import { Earnings } from "./components/Earnings";
import { CreatorData } from "./components/creatorData";
function App() {
  return (
    <div className="App">
      <Nav />

      {/* <VideoPage /> */}
      <Outlet />
      {/* <Outlet /> */}
      {/* <Details /> */}
      {/* <Login /> */}
      {/* <Carousels /> */}
      {/* <Payment /> */}
      {/* <Confirm /> */}
      {/* <Details /> */}
      {/* <Course /> */}
      {/* <Earnings /> */}
      {/* <CreatorData /> */}
      {/* <Signup /> */}
      <Footer />
    </div>
  );
}

export default App;
