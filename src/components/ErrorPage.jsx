import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 max-w-lg w-full border border-white/20"
      >
        <h1 className="text-7xl font-extrabold text-amber-400 drop-shadow-lg">
          404
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block bg-amber-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-amber-300 transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
