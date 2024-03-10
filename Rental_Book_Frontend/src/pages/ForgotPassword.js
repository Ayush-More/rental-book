// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function ForgotPassword() {
//   const [email, setemail] = useState();
//   useEffect(() => {
//     document.title = "Forgot password";
//   }, []);
//   const navigate = useNavigate();
//   const handleSubmit = async () => {
//     try {
//       console.log(email);
//       const response = await fetch(
//         "http://localhost:5000/api/user/forgotPassword",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "aplication/json", // Set the Authorization header properly
//           },
//           body: JSON.stringify({
//             email: email,
//           }),
//         }
//       );

//       if (response.status === 200) {
//         const data = await response.json();
//         console.log(data);
//         navigate("/Reset");
//       } else {
//         const errorData = await response.json();
//         console.error(errorData);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="Email">Title:</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           required
//           onChange={(e) => setemail(e.target.value)}
//         />

//         <button type="submit" id="upload">
//           Upload <i className="fa-solid fa-upload "></i>
//         </button>
//       </form>
//     </div>
//   );
// }

// export default ForgotPassword;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./../css/login.css";
function ForgotPassword() {
  const [email, setemail] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/user/forgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        useNavigate.navigate("/Reset");
      } else {
        const errorData = await response.json();
        console.error(errorData);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    document.title = "password";
  }, []);

  return (
    <div className="body1">
      <div className="wrapper" id="login">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="input-box" id="loginput">
            <input
              type="text"
              placeholder="Email Id"
              required
              name="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn" id="loginbtn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
