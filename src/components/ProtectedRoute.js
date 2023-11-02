import { useNavigate } from "react-router-dom";
import { getToken } from "./../utility/getToken";

function ProtectedRoute({ children }) {
  const token = getToken();
  const navigate = useNavigate();

  if (!token) {
    navigate("/login");
    return null;
  }

  // Render the protected route if the token is present
  return children;
}

export default ProtectedRoute;
