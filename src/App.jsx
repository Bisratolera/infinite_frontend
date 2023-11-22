import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      {/* <Login /> */}
      {/* <Carousels /> */}
      <Footer />
    </div>
  );
}

export default App;
