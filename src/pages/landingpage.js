import React from "react";

const LandingPage = () => {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#f0f0f0", 
    },
    image: {
      width: "30rem",
      height: "auto",
      objectFit: "cover", 
      marginTop: "1rem",
    },
    text: {
      fontSize: "35px",
      color: "#333", // 
      marginBottom: "1rem", 
    },
    description: {
      fontSize: "20px",
      marginTop: "1rem",
      color: "#333", 
      marginBottom: "15rem"
    },
  };

  return (
    <div style={styles.container}>
      <div>
        <h2 style={styles.text}>Welcome to RealTime Collaboration Tool</h2>
        <img src="/image1.jpeg" alt="Landing" style={styles.image} />
        <p style={styles.description}>Connecting Ideas...</p>
      </div>
    </div>
  );
};

export default LandingPage;
