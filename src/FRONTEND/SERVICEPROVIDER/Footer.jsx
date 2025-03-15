import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; 2025 Home Appliance Service. All rights reserved.</p>
      <p>
        <a href="/privacy" className="text-white">Privacy Policy</a> |{" "}
        <a href="/terms" className="text-white">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;