"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search, MapPin, Share2, Heart, ShieldCheck, Globe,
  Clock, Users, Mic, Bus, ChevronLeft, ChevronRight
} from "lucide-react";
import styles from "./ExperienceDetail.module.css";

const MOCK = {
  title: "Funchal: Swimming with Dolphins & Dolphin & Whale Watching",
  description: "Get the chance to swim with the friendly and curious spotted dolphins or common dolphins. Whale and Dolphin Watching Trip included. We guarantee you will see Cetaceans.",
  images: [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1530870110042-98b2cb110834?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=400&h=300&fit=crop",
  ],
  price: 45,
  unit: "Person",
  info: [
    { icon: ShieldCheck, label: "Free cancellation", detail: "Full refund up to 24h before" },
    { icon: Globe, label: "Languages", detail: "English, Portuguese" },
    { icon: Clock, label: "Duration", detail: "2 hours" },
    { icon: MapPin, label: "Meeting Point", detail: "Provided on experience details" },
    { icon: Users, label: "Large group", detail: "Limited to 71 participants" },
    { icon: Mic, label: "Tour Guide", detail: "Available for this experience" },
    { icon: Bus, label: "Transportation", detail: "All necessary transportation included" },
  ],
};

export default function ExperienceDetail({ id }) {
  const [mainImg, setMainImg] = useState(0);
  const exp = MOCK;

  const nextImg = () => setMainImg((mainImg + 1) % exp.images.length);
  const prevImg = () => setMainImg((mainImg - 1 + exp.images.length) % exp.images.length);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>Madeira Friends</Link>
        <div className={styles.searchBar}>
          <div className={styles.searchField}><label>Where</label><input placeholder="Search destination" /></div>
          <div className={styles.divider} />
          <div className={styles.searchField}><label>Dates</label><input placeholder="Add dates" /></div>
          <div className={styles.divider} />
          <div className={styles.searchField}><label>Who</label><input placeholder="Add guests" /></div>
          <button className={styles.searchBtn}><Search size={18} /></button>
        </div>
        <div className={styles.headerRight}>
          <span>Sign In</span>
          <button className={styles.registerBtn}>Register</button>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={exp.images[mainImg]} alt={exp.title} />
            <button className={styles.navBtn + " " + styles.navLeft} onClick={prevImg}><ChevronLeft size={20} /></button>
            <button className={styles.navBtn + " " + styles.navRight} onClick={nextImg}><ChevronRight size={20} /></button>
          </div>
          <div className={styles.thumbs}>
            {exp.images.map((img, i) => (
              <button
                key={i}
                className={`${styles.thumb} ${i === mainImg ? styles.thumbActive : ""}`}
                onClick={() => setMainImg(i)}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.titleRow}>
            <h1>{exp.title}</h1>
            <div className={styles.actions}>
              <button className={styles.iconBtn}><Share2 size={18} /></button>
              <button className={styles.iconBtn}><Heart size={18} /></button>
            </div>
          </div>

          <p className={styles.description}>{exp.description}</p>

          <button className={styles.meetingBtn}>
            <MapPin size={16} /> View Meeting Point Details
          </button>

          <div className={styles.infoGrid}>
            {exp.info.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className={styles.infoItem}>
                  <Icon size={20} className={styles.infoIcon} />
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.booking}>
            <div className={styles.bookingPrice}>
              <span>From</span>
              <strong>{exp.price} €</strong>
              <span>/ {exp.unit}</span>
            </div>
            <button className={styles.bookBtn}>Book Now</button>
          </div>
        </div>
      </main>
    </div>
  );
}