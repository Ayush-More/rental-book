import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/Browse";
import Rent from "./pages/rentBook";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import BookDetail from "./pages/bookdetails";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/browse/:id" element={<BookDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
