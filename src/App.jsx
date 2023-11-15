import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Outlet /> */}
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
