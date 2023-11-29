import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";
import Details from "./pages/Details";
import { Payment } from "./components/payment";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Outlet /> */}
      {/* <Details /> */}
      {/* <Login /> */}
      {/* <Carousels /> */}
      <Payment />
      <Footer />
    </div>
  );
}

export default App;
