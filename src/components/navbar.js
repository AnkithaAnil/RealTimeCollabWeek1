import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Welcome</h1>
      <ul style={styles.navLinks}>
      <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/register" style={styles.link}>Register</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: { display: "flex", justifyContent: "space-between", padding: "1rem", background: "#333", color: "#fff" },
  logo: { fontSize: "2.5rem" },
  navLinks: { display: "flex", listStyle: "none", gap: "1rem", color: "#fff" },
  link: { color: "#fff", textDecoration: "none", fontWeight: "bold", display: "flex", justifyContent: "space-between", padding: "1rem" },
};

export default Navbar;
