import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";
import Details from "./pages/Details";
import { Payment } from "./components/payment";
import { Confirm } from "./components/confirm";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Outlet /> */}
      {/* <Details /> */}
      {/* <Login /> */}
      {/* <Carousels /> */}
      {/* <Payment /> */}
      {/* <Confirm /> */}
      <Details />
      <Footer />
    </div>
  );
}

export default App;
