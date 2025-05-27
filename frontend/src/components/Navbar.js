import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-600">
          📰 News Detector
        </a>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="text-gray-800">☰</span>
        </button>

        <div className={`md:flex ${menuOpen ? "block" : "hidden"} space-x-6`}>
          <a href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-blue-600">
            About
          </a>

          {isAuthenticated ? (
            <>
              <a href="/profile" className="text-gray-700 hover:text-blue-600">
                My Profile
              </a>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="text-blue-600 hover:underline">
                Login
              </a>
              <a href="/signup" className="text-blue-600 hover:underline">
                Signup
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
