import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Loader2 } from "lucide-react";
import videoSrc from "../assets/loginbg.mp4";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPwd, setShowPwd] = React.useState(false);
  const [remember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    // Prefill from storage if present
    const saved = localStorage.getItem("enzo4ex_auth_email");
    if (saved) {
      setEmail(saved);
      setRemember(true);
    }
  }, []);

  const validate = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validate()) return;
    try {
      setLoading(true);
      // Simulate API login. Replace with real endpoint.
      await new Promise((res) => setTimeout(res, 900));
      if (remember) localStorage.setItem("enzo4ex_auth_email", email);
      else localStorage.removeItem("enzo4ex_auth_email");
      // Navigate to homepage (or dashboard if available)
      navigate("/");
    } catch (err) {
      setError("Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center justify-center min-h-[100dvh] px-4">
        {/* Glass card */}
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 text-white">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Welcome back</h1>
            <p className="mt-2 text-white/80 text-sm">Sign in to continue to Enzo4ex.</p>
          </div>

          {error && (
            <div className="mt-4 rounded-xl border border-red-300/40 bg-red-500/10 text-red-200 px-3 py-2 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90">Email</label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent pl-10 pr-3 py-2"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90">Password</label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent pl-10 pr-10 py-2"
                  placeholder="Your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/70 hover:text-white"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-white/85">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="rounded border-white/30 bg-white/10"
                />
                Remember me
              </label>
              <Link to="/reset-password" className="text-sm text-purple-200 hover:text-white">Forgot password?</Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 py-3 font-semibold shadow-lg shadow-purple-900/30 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />} Sign in
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-white/80">
            Don’t have an account? <Link to="/register" className="text-purple-200 hover:text-white font-medium">Create one</Link>
          </div>

          {/* Small legal */}
          <p className="mt-4 text-center text-xs text-white/60">By continuing, you agree to the Terms of Use and Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
