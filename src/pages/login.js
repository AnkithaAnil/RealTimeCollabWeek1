import React from "react";

const Login = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Login</h2>
      <form>
        <input style={{ textAlign: "center", margin: "1rem"}} type="email" placeholder="Email" required /><br />
        <input style={{ textAlign: "center", margin: "1rem"}} ype="password" placeholder="Password" required /><br />
        <button style={{ textAlign: "center", margin: "1rem", color: "#0000ff"}} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
