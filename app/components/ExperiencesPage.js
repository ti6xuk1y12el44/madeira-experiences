"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import {
  Search, Star, MapPin, Heart,
  Compass, Landmark, UtensilsCrossed, TreePine, Mountain,
  Waves, Sparkles, Music, Dumbbell, Crown, Lock, Ship
} from "lucide-react";
import styles from "./ExperiencesPage.module.css";
import Footer from "./Footer";
import AnimatedSection from "./AnimatedSection";

const CATEGORIES = [
  { id: "top", label: "Our Top Selections", icon: Star },
  { id: "tours", label: "Tours", icon: Compass },
  { id: "culture", label: "Culture & History", icon: Landmark },
  { id: "gastronomy", label: "Gastronomy", icon: UtensilsCrossed },
  { id: "nature", label: "Nature", icon: TreePine },
  { id: "adventure", label: "Adventure", icon: Mountain },
  { id: "sea", label: "Sea", icon: Ship },
  { id: "entertainment", label: "Entertainment", icon: Music },
  { id: "wellness", label: "Wellness", icon: Sparkles },
  { id: "sport", label: "Sport", icon: Dumbbell },
  { id: "luxury", label: "Luxury & Premium", icon: Crown },
  { id: "private", label: "Private Activities", icon: Lock },
];

const EXPERIENCES = [
  { id: 1, title: "Jeep Tour with Giant Swing Zipline & Volcanic Pools", category: "top", location: "Madeira, Portugal", price: 69, unit: "Person", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop" },
  { id: 2, title: "Swimming with Dolphins & Dolphin & Whale Watching", category: "top", location: "Funchal, Portugal", price: 45, unit: "Person", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop" },
  { id: 3, title: "Canyoning Adventure Beginner – Level 1", category: "top", location: "Madeira, Portugal", price: 75, unit: "Person", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop" },
  { id: 4, title: "Catamaran trip, dolphin and whale watching", category: "top", location: "Madeira, Portugal", price: 17.5, unit: "Person", image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=400&h=400&fit=crop" },
  { id: 5, title: "Porto Moniz & Unesco forest 4x4 jeep tour", category: "top", location: "Fanal, Portugal", price: 49, unit: "Person", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop" },
  { id: 6, title: "Surf Lessons", category: "top", location: "Madeira, Portugal", price: 75, unit: "Person", image: "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=400&h=400&fit=crop" },
  { id: 7, title: "Unforgettable Off-Road Buggy Driving Experience", category: "top", location: "Madeira, Portugal", price: 150, unit: "Group", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" },
  { id: 8, title: "Self-Drive Off-Road Tour Experience", category: "top", location: "Madeira, Portugal", price: 150, unit: "Group", image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&h=400&fit=crop" },
  { id: 9, title: "Full-Day East Island Tour", category: "tours", location: "Funchal, Portugal", price: 35, unit: "Person", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop" },
  { id: 10, title: "Madeira Open Top Bus City Tour", category: "tours", location: "Funchal, Portugal", price: 22, unit: "Person", image: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=400&h=400&fit=crop" },
  { id: 11, title: "West Island Highlights Tour", category: "tours", location: "Madeira, Portugal", price: 40, unit: "Person", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop" },
  { id: 12, title: "Nun's Valley & Cabo Girao Skywalk Tour", category: "tours", location: "Madeira, Portugal", price: 30, unit: "Person", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop" },
  { id: 13, title: "Traditional Poncha & Tapas Tasting", category: "gastronomy", location: "Camara de Lobos, Portugal", price: 38, unit: "Person", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop" },
  { id: 14, title: "Wine Tasting at Blandy's Wine Lodge", category: "gastronomy", location: "Funchal, Portugal", price: 35, unit: "Person", image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=400&fit=crop" },
  { id: 15, title: "Levada do Caldeirao Verde Hike", category: "nature", location: "Santana, Portugal", price: 42, unit: "Person", image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=400&fit=crop" },
  { id: 16, title: "Fanal Ancient Forest Walk", category: "nature", location: "Porto Moniz, Portugal", price: 48, unit: "Person", image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=400&h=400&fit=crop" },
  { id: 17, title: "Coasteering Adventure", category: "adventure", location: "Madeira, Portugal", price: 60, unit: "Person", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=400&fit=crop" },
  { id: 18, title: "Heritage Walking Tour of Old Funchal", category: "culture", location: "Funchal, Portugal", price: 25, unit: "Person", image: "https://images.unsplash.com/photo-1555990793-da11153b2473?w=400&h=400&fit=crop" },
  { id: 19, title: "Kayak & Snorkeling Expedition", category: "sea", location: "Madeira, Portugal", price: 55, unit: "Person", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop" },
];

function CardRow({ items }) {
  const ref = useRef(null);
  const scroll = (dir) => {
    if (ref.current) ref.current.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className={styles.rowWrapper}>
      <button className={`${styles.scrollBtn} ${styles.scrollLeft}`} onClick={() => scroll(-1)}>‹</button>
      <div className={styles.row} ref={ref}>
        {items.map(exp => (
          <Link href={`/experience/${exp.id}`} key={exp.id} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={exp.image} alt={exp.title} />
              <button className={styles.fav} onClick={e => e.preventDefault()}>
                <Heart size={16} />
              </button>
              <span className={styles.badge}>Top Picks</span>
            </div>
            <h3>{exp.title}</h3>
            <p className={styles.location}><MapPin size={12} /> {exp.location}</p>
            <p className={styles.price}>From <strong>{exp.price} €</strong> / {exp.unit}</p>
          </Link>
        ))}
      </div>
      <button className={`${styles.scrollBtn} ${styles.scrollRight}`} onClick={() => scroll(1)}>›</button>
    </div>
  );
}

export default function ExperiencesPage() {
  const [activeCat, setActiveCat] = useState("top");

  const sections = CATEGORIES.filter(c =>
    EXPERIENCES.some(e => e.category === c.id)
  );

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.logo}>Madeira Friends</span>
        <div className={styles.searchBar}>
          <div className={styles.searchField}>
            <label>Where</label>
            <input placeholder="Search destination" />
          </div>
          <div className={styles.divider} />
          <div className={styles.searchField}>
            <label>Date</label>
            <input placeholder="Add dates" />
          </div>
          <div className={styles.divider} />
          <div className={styles.searchField}>
            <label>Who</label>
            <input placeholder="Add guests" />
          </div>
          <button className={styles.searchBtn}><Search size={18} /></button>
        </div>
        <div className={styles.headerRight}>
          <span>Sign In</span>
          <button className={styles.registerBtn}>Register</button>
        </div>
      </header>

      <div className={styles.pills}>
        {CATEGORIES.map(c => {
          const Icon = c.icon;
          return (
            <button
              key={c.id}
              className={activeCat === c.id ? styles.pillActive : styles.pill}
              onClick={() => setActiveCat(c.id)}
            >
              <Icon size={14} /> {c.label}
            </button>
          );
        })}
      </div>

      <main className={styles.main}>
        {sections.map((section, i) => {
          const items = EXPERIENCES.filter(e => e.category === section.id);
          return (
            <AnimatedSection key={section.id} delay={i * 100}>
              <section className={styles.section}>
                <div className={styles.sectionHeader}>
                  <h2>{section.label}</h2>
                  <Link href={`/category/${section.id}`} className={styles.seeMore}>See more</Link>
                </div>
                <CardRow items={items} />
              </section>
            </AnimatedSection>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}