"use client";
import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard, Package, CalendarDays, Users, BarChart3,
  Settings, LogOut, Plus, Search, TrendingUp, TrendingDown,
  Eye, Star, MapPin, ChevronDown, Bell, Menu, X
} from "lucide-react";
import styles from "./dashboard.module.css";

const STATS = [
  { label: "Total Bookings", value: "1,284", change: "+12.5%", up: true, icon: CalendarDays },
  { label: "Revenue", value: "€48,350", change: "+8.2%", up: true, icon: BarChart3 },
  { label: "Active Experiences", value: "24", change: "+3", up: true, icon: Package },
  { label: "Avg. Rating", value: "4.8", change: "-0.1", up: false, icon: Star },
];

const BOOKINGS = [
  { id: 1, experience: "Dolphin & Whale Watching", customer: "Maria Santos", date: "2026-07-12", guests: 4, total: "€180", status: "confirmed" },
  { id: 2, experience: "Levada Caldeirao Verde Hike", customer: "John Smith", date: "2026-07-13", guests: 2, total: "€84", status: "confirmed" },
  { id: 3, experience: "Canyoning Adventure Level 1", customer: "Sophie Müller", date: "2026-07-14", guests: 6, total: "€450", status: "pending" },
  { id: 4, experience: "Wine Tasting at Blandy's", customer: "Pierre Dubois", date: "2026-07-15", guests: 2, total: "€70", status: "confirmed" },
  { id: 5, experience: "Jeep Tour Volcanic Pools", customer: "Anna Kowalski", date: "2026-07-15", guests: 3, total: "€207", status: "cancelled" },
  { id: 6, experience: "Buggy Driving Experience", customer: "Tom Wilson", date: "2026-07-16", guests: 2, total: "€150", status: "pending" },
];

const EXPERIENCES_LIST = [
  { id: 1, title: "Dolphin & Whale Watching", bookings: 342, revenue: "€15,390", rating: 4.9, status: "active" },
  { id: 2, title: "Levada Caldeirao Verde Hike", bookings: 287, revenue: "€12,054", rating: 5.0, status: "active" },
  { id: 3, title: "Canyoning Adventure Level 1", bookings: 156, revenue: "€11,700", rating: 4.8, status: "active" },
  { id: 4, title: "Jeep Tour Volcanic Pools", bookings: 198, revenue: "€13,662", rating: 4.9, status: "active" },
  { id: 5, title: "Wine Tasting at Blandy's", bookings: 124, revenue: "€4,340", rating: 4.7, status: "draft" },
];

const NAV = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "experiences", label: "Experiences", icon: Package },
  { id: "bookings", label: "Bookings", icon: CalendarDays },
  { id: "customers", label: "Customers", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function DashboardPage() {
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      {/* SIDEBAR */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarTop}>
          <Link href="/" className={styles.logo}>MF</Link>
          <button className={styles.closeSidebar} onClick={() => setSidebarOpen(false)}><X size={20} /></button>
        </div>

        <nav className={styles.nav}>
          {NAV.map(item => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={activeNav === item.id ? styles.navActive : styles.navItem}
                onClick={() => { setActiveNav(item.id); setSidebarOpen(false); }}
              >
                <Icon size={18} /> {item.label}
              </button>
            );
          })}
        </nav>

        <div className={styles.sidebarBottom}>
          <div className={styles.userCard}>
            <div className={styles.avatar}>MF</div>
            <div>
              <p className={styles.userName}>Madeira Friends</p>
              <p className={styles.userRole}>Operator</p>
            </div>
          </div>
          <Link href="/" className={styles.logoutBtn}><LogOut size={16} /> Log out</Link>
        </div>
      </aside>

      {/* MAIN */}
      <main className={styles.main}>
        <header className={styles.topBar}>
          <button className={styles.menuBtn} onClick={() => setSidebarOpen(true)}><Menu size={22} /></button>
          <div>
            <h1>Dashboard</h1>
            <p>Welcome back, here's what's happening</p>
          </div>
          <div className={styles.topRight}>
            <button className={styles.notifBtn}><Bell size={20} /><span className={styles.notifDot} /></button>
            <button className={styles.addBtn}><Plus size={18} /> New Experience</button>
          </div>
        </header>

        {/* STATS */}
        <div className={styles.stats}>
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className={styles.statCard}>
                <div className={styles.statTop}>
                  <span className={styles.statLabel}>{stat.label}</span>
                  <div className={styles.statIcon}><Icon size={18} /></div>
                </div>
                <p className={styles.statValue}>{stat.value}</p>
                <span className={stat.up ? styles.statUp : styles.statDown}>
                  {stat.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {stat.change}
                </span>
              </div>
            );
          })}
        </div>

        <div className={styles.grid}>
          {/* RECENT BOOKINGS */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Recent Bookings</h2>
              <button className={styles.viewAll}>View all</button>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Experience</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Guests</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {BOOKINGS.map(b => (
                    <tr key={b.id}>
                      <td className={styles.expName}>{b.experience}</td>
                      <td>{b.customer}</td>
                      <td>{b.date}</td>
                      <td>{b.guests}</td>
                      <td className={styles.bold}>{b.total}</td>
                      <td><span className={`${styles.status} ${styles[b.status]}`}>{b.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* EXPERIENCES LIST */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2>Your Experiences</h2>
              <button className={styles.addSmall}><Plus size={14} /> Add</button>
            </div>
            <div className={styles.expList}>
              {EXPERIENCES_LIST.map(exp => (
                <div key={exp.id} className={styles.expItem}>
                  <div className={styles.expInfo}>
                    <p className={styles.expTitle}>{exp.title}</p>
                    <div className={styles.expMeta}>
                      <span><Eye size={12} /> {exp.bookings} bookings</span>
                      <span><Star size={12} /> {exp.rating}</span>
                    </div>
                  </div>
                  <div className={styles.expRight}>
                    <p className={styles.expRevenue}>{exp.revenue}</p>
                    <span className={`${styles.status} ${styles[exp.status]}`}>{exp.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}