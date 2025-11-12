import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
            alt="Nike Logo"
            className="h-8"
          />
        </div>

        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <button
          style={{
            padding: "6px 12px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

      </nav>
    </div>
  );
};

export default Navbar;
