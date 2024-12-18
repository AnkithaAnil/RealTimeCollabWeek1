import React from "react";

const Registration = () => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Register</h2>
      <form>
        <input style={{ textAlign: "center", margin: "1rem"}} type="text" placeholder="Username" required /><br />
        <input style={{ textAlign: "center", margin: "1rem"}} type="email" placeholder="Email" required /><br />
        <input style={{ textAlign: "center", margin: "1rem"}}type="password" placeholder="Password" required /><br />
        <button style={{ textAlign: "center", margin: "1rem", color: "#0000ff"}} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
