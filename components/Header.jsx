import styles from "../styles/Header.module.css";
import Link from "next/link";
import Search from "./Search";
import { FaSignOutAlt, FaGoogle } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Tirana Event</a>
        </Link>
      </div>
      <Search placeholder={"Search for event"} />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <div className="btn-secondary btn-icon" onClick={logout}>
                  {" "}
                  <FaSignOutAlt /> Logout
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                  <a className="btn-secondary btn-icon" onClick={() => window.location.href = "https://alb-events-backend.herokuapp.com/connect/google"}>
                    {" "}
                    <FaGoogle /> Login With Google
                  </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
