
import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App dark:bg-gray-950 dark:text-white ">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
