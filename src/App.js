import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/Browse";
import Rent from "./pages/rentBook";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
<<<<<<< Updated upstream
import BookDetail from "./pages/bookdetails";
=======
import Profile from "./pages/profile";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
          <Route path="/browse/:id" element={<BookDetail />} />
=======
          <Route path="/profile" element={<Profile />} />

>>>>>>> Stashed changes
        </Routes>
      </div>
    </Router>
  );
}

export default App;
