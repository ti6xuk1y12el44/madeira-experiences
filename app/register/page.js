"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Check } from "lucide-react";
import styles from "../login/auth.module.css";
import Footer from "../components/Footer";

export default function RegisterPage() {
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  const checks = [
    { label: "8+ characters", valid: password.length >= 8 },
    { label: "Uppercase", valid: /[A-Z]/.test(password) },
    { label: "Number", valid: /\d/.test(password) },
  ];

  return (
    <>
      <div className={styles.page}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>Madeira Friends</Link>
          <div className={styles.formWrapper}>
            <h1>Create your account</h1>
            <p className={styles.subtitle}>Join and start discovering the best of Madeira</p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label>Full name</label>
                <div className={styles.inputWrapper}>
                  <User size={18} className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
              </div>

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
                <label>Password</label>
                <div className={styles.inputWrapper}>
                  <Lock size={18} className={styles.inputIcon} />
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className={styles.eyeBtn} onClick={() => setShowPass(!showPass)}>
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {password.length > 0 && (
                  <div className={styles.checks}>
                    {checks.map((c, i) => (
                      <span key={i} className={c.valid ? styles.checkValid : styles.checkInvalid}>
                        <Check size={12} /> {c.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" className={`${styles.submitBtn} ${loading ? styles.loading : ""}`} disabled={loading}>
                {loading ? <span className={styles.spinner} /> : <>Create Account <ArrowRight size={18} /></>}
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
              Already have an account? <Link href="/login">Sign in</Link>
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=1800&fit=crop" alt="Madeira mountains" />
          <div className={styles.rightOverlay}>
            <h2>Start your adventure</h2>
            <p>Tours, gastronomy, nature and more — curated by locals who know the island best</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}