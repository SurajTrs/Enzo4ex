import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, Loader2, CheckSquare } from "lucide-react";
import videoSrc from "../assets/loginbg.mp4";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [showPwd, setShowPwd] = React.useState(false);
  const [showPwd2, setShowPwd2] = React.useState(false);
  const [accept, setAccept] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const validate = () => {
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return false;
    }
    if (!accept) {
      setError("You must accept the Terms and Privacy Policy.");
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
      // Simulate API register. Replace with real endpoint.
      await new Promise((res) => setTimeout(res, 1000));
      navigate("/login");
    } catch (err) {
      setError("Unable to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden">
      <video className="absolute inset-0 w-full h-full object-cover" src={videoSrc} autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex items-center justify-center min-h-[100dvh] px-4">
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 text-white">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Create your account</h1>
            <p className="mt-2 text-white/80 text-sm">Join Enzo4ex in minutes.</p>
          </div>

          {error && (
            <div className="mt-4 rounded-xl border border-red-300/40 bg-red-500/10 text-red-200 px-3 py-2 text-sm">{error}</div>
          )}

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white/90">Full name</label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                  <User className="w-4 h-4" />
                </span>
                <input id="name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent pl-10 pr-3 py-2" placeholder="Your name" required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90">Email</label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                  <Mail className="w-4 h-4" />
                </span>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent pl-10 pr-3 py-2" placeholder="you@example.com" autoComplete="email" required />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/90">Password</label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                  <Lock className="w-4 h-4" />
                </span>
                <input id="password" type={showPwd ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent pl-10 pr-10 py-2" placeholder="Create a password" autoComplete="new-password" required />
                <button type="button" onClick={() => setShowPwd((s) => !s)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/70 hover:text-white" aria-label={showPwd ? "Hide password" : "Show password"}>
                  {showPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirm" className="block text-sm font-medium text-white/90">Confirm password</label>
              <div className="mt-1 relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-white/60">
                  <Lock className="w-4 h-4" />
                </span>
                <input id="confirm" type={showPwd2 ? "text" : "password"} value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent pl-10 pr-10 py-2" placeholder="Repeat password" autoComplete="new-password" required />
                <button type="button" onClick={() => setShowPwd2((s) => !s)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/70 hover:text-white" aria-label={showPwd2 ? "Hide password" : "Show password"}>
                  {showPwd2 ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <label className="inline-flex items-center gap-2 text-sm text-white/85">
              <input type="checkbox" checked={accept} onChange={(e) => setAccept(e.target.checked)} className="rounded border-white/30 bg-white/10" />
              <span>I accept the <a href="/terms" className="text-purple-200 hover:text-white underline">Terms</a> and <a href="/privacy-policy" className="text-purple-200 hover:text-white underline">Privacy Policy</a>.</span>
            </label>

            <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 py-3 font-semibold shadow-lg shadow-purple-900/30 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />} Create account
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-white/80">
            Already have an account? <Link to="/login" className="text-purple-200 hover:text-white font-medium">Sign in</Link>
          </div>

          <p className="mt-4 text-center text-xs text-white/60">Protected by reCAPTCHA. Privacy — Terms.</p>
        </div>
      </div>
    </div>
  );
}
