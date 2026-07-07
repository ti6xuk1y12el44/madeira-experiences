"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, Globe, MessageCircle, Play, ArrowUp, X, Send } from "lucide-react";
import styles from "./Footer.module.css";

function ContactPopup({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); onClose(); }, 2000);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}><X size={20} /></button>

        {sent ? (
          <div className={styles.sentState}>
            <div className={styles.sentIcon}>✓</div>
            <h3>Message sent!</h3>
            <p>We'll get back to you shortly</p>
          </div>
        ) : (
          <>
            <h3>Get in touch</h3>
            <p className={styles.popupSub}>Have a question? We'd love to hear from you.</p>
            <form onSubmit={handleSubmit} className={styles.popupForm}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <textarea
                placeholder="Your message..."
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
              <button type="submit" className={styles.sendBtn}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  const [showContact, setShowContact] = useState(false);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {showContact && <ContactPopup onClose={() => setShowContact(false)} />}

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
            <button className={styles.contactBtn} onClick={() => setShowContact(true)}>
              <MessageCircle size={14} /> Send us a message
            </button>
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
    </>
  );
}