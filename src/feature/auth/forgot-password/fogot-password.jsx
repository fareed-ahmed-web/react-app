// ForgotPassword.jsx
import { Link } from "react-router-dom";
import bgImage from "../../../assets/auth-bg.jpg";
export default function ForgotPassword() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Forgot Password Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Forgot Password
        </h2>

        <p className="text-sm text-center text-gray-600 mb-6">
          Enter your registered email and we’ll send you a reset link.
        </p>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700
                       text-white font-semibold py-2 rounded-lg transition"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center text-sm text-gray-600 mt-6 space-y-1">
          <p>
            Remember your password?
            <Link to="/" className="ml-1 text-blue-600 hover:underline">
              Login
            </Link>
          </p>
          <p>
            Don’t have an account?
            <Link to="/register" className="ml-1 text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
