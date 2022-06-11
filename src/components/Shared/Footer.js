import React from "react";

const Footer = () => {
  return (
    <footer class="footer footer-center p-4 bg-gray-600 text-slate-300">
      <div>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by
          Solaiman Islam Naiem
        </p>
      </div>
    </footer>
  );
};

export default Footer;
