import React from "react";
import { Link } from "react-router-dom";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import videoSrc from "../assets/loginbg.mp4";

export default function ResetPasswordPage() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [sent, setSent] = React.useState(false);

  const validate = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
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
      // Simulate API request. Replace with your auth endpoint.
      await new Promise((res) => setTimeout(res, 900));
      setSent(true);
    } catch (err) {
      setError("Unable to process request. Please try again.");
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
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Reset your password</h1>
            <p className="mt-2 text-white/80 text-sm">Enter your account email and we\'ll send you a reset link.</p>
          </div>

          {error && (
            <div className="mt-4 rounded-xl border border-red-300/40 bg-red-500/10 text-red-200 px-3 py-2 text-sm">{error}</div>
          )}

          {sent ? (
            <div className="mt-6 rounded-2xl border border-emerald-300/40 bg-emerald-500/10 text-emerald-200 px-4 py-3 text-sm flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5" />
              <div>
                We\'ve sent a password reset link to <span className="font-medium">{email}</span>. Please check your inbox.
              </div>
            </div>
          ) : (
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

              <button type="submit" disabled={loading} className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 py-3 font-semibold shadow-lg shadow-purple-900/30 disabled:opacity-60 disabled:cursor-not-allowed">
                {loading && <Loader2 className="w-4 h-4 animate-spin" />} Send reset link
              </button>
            </form>
          )}

          <div className="mt-6 text-center text-sm text-white/80">
            <Link to="/login" className="text-purple-200 hover:text-white font-medium">Back to sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
