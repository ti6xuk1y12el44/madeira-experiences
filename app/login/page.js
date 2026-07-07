"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import styles from "./auth.module.css";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <Link href="/" className={styles.logo}>Madeira Friends</Link>
        <div className={styles.formWrapper}>
          <h1>Welcome back</h1>
          <p className={styles.subtitle}>Sign in to continue exploring experiences across Madeira</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label>Email address</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.inputIcon} />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <div className={styles.labelRow}>
                <label>Password</label>
                <Link href="/forgot-password" className={styles.forgot}>Forgot?</Link>
              </div>
              <div className={styles.inputWrapper}>
                <Lock size={18} className={styles.inputIcon} />
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button type="button" className={styles.eyeBtn} onClick={() => setShowPass(!showPass)}>
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button type="submit" className={`${styles.submitBtn} ${loading ? styles.loading : ""}`} disabled={loading}>
              {loading ? <span className={styles.spinner} /> : <>Sign In <ArrowRight size={18} /></>}
            </button>
          </form>

          <div className={styles.dividerRow}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>or</span>
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.socials}>
            <button className={styles.socialBtn}>Google</button>
            <button className={styles.socialBtn}>Apple</button>
          </div>

          <p className={styles.switchText}>
            New here? <Link href="/register">Create an account</Link>
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=1800&fit=crop" alt="Madeira landscape" />
        <div className={styles.rightOverlay}>
          <h2>Discover Madeira like a local</h2>
          <p>Curated experiences from trusted operators across the island</p>
        </div>
      </div>
    </div>
  );
}