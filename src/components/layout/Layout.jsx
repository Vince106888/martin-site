import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Header from "../Header";
import Footer from "../Footer";

export default function Layout({ children }) {
  const { darkMode } = useTheme();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </div>
    </div>
  );
}