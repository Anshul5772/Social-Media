import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PostProvider } from "./store/Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Notifications } from "./pages/Notifications";
import { Messages } from "./pages/Messages";

function App() {
  return (
    <PostProvider>
      <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
          <Footer></Footer>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
