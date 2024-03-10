import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Browse from "./pages/Browse";
import Rent from "./pages/rentBook";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import BookDetail from "./pages/bookdetails";
import Profile from "./pages/profile";
import BookProvider from "./context/bookContext";
import Forgot from "./pages/ForgotPassword";
import Reset from "./pages/ResetPassword";
function App() {
  return (
    <Router>
      <BookProvider>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/browse/:id" element={<BookDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/forgotPassword" element={<Forgot />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </div>
      </BookProvider>
    </Router>
  );
}

export default App;
