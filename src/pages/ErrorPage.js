// src/pages/ErrorPage.jsx
import { Link } from "react-router-dom";
import image404 from "../assets/errors/404.avif";

const ErrorPage = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-customBlue to-customBlack px-6"
      aria-labelledby="error-title"
    >
      <section className="max-w-xl text-center text-white">
        {/* Illustration */}
        <img
          src={image404}
          alt="404 – Page not found"
          className="mx-auto mb-8 w-64 md:w-72 opacity-90"
          loading="lazy"
        />

        {/* Heading */}
        <h1
          id="error-title"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Page not found
        </h1>

        {/* Supporting message */}
        <p className="text-white/70 text-base md:text-lg mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Let’s get you back on track.
        </p>

        {/* CTA */}
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full
                     px-6 py-3 text-sm font-semibold
                     bg-customYellow text-customBlack
                     hover:opacity-90
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                     transition"
          aria-label="Return to homepage"
        >
          Go back home
        </Link>
      </section>
    </main>
  );
};

export default ErrorPage;


