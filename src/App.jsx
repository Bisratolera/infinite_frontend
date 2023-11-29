// import { Outlet } from "react-router-dom";
import { Nav } from "./components/Nav";
import "./index.css";
import { Footer } from "./components/Footer";
import VideoPage from './pages/VideoPage'

function App() {
  return (
    <div className="App">
      <Nav />
      <VideoPage />
      {/* <Outlet /> */}
      {/* <Login /> */}
      {/* <Carousels /> */}
      <Footer />
    </div>
  );
}

export default App;
