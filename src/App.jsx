import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import { Carousels } from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Outlet /> */}
      {/* <Login /> */}
      <Carousels />
      <Footer />
    </div>
  );
}

export default App;
