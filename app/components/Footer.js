"use client";
import { MapPin, Mail, Phone, Globe, MessageCircle, Play, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,0 L0,0 Z" fill="#fff" />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.brand}>
          <h3>Madeira Friends</h3>
          <p>Curated experiences from local operators. Discover Madeira like a true local.</p>
          <div className={styles.socials}>
            <a href="#" aria-label="Social"><Globe size={20} /></a>
<a href="#" aria-label="Social"><MessageCircle size={20} /></a>
<a href="#" aria-label="Social"><Play size={20} /></a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Explore</h4>
          <a href="#">Tours</a>
          <a href="#">Nature</a>
          <a href="#">Adventure</a>
          <a href="#">Gastronomy</a>
          <a href="#">Sea Activities</a>
        </div>

        <div className={styles.col}>
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Partners</a>
          <a href="#">Press</a>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <a href="#"><MapPin size={14} /> Funchal, Madeira</a>
          <a href="#"><Mail size={14} /> hello@madeirafriends.com</a>
          <a href="#"><Phone size={14} /> +351 291 000 000</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Madeira Friends. All rights reserved.</p>
        <div className={styles.bottomLinks}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies</a>
        </div>
        <button className={styles.topBtn} onClick={scrollTop} aria-label="Back to top">
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}