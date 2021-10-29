import styles from "../styles/Header.module.css";
import Link from "next/link";
import Search from "./Search";
import { FaSignOutAlt, FaGoogle } from "react-icons/fa";
import AuthContext from "@/context/AuthContext";
import {useContext, useEffect, useState} from "react";
import {API_URL} from "@/config/index";
import {useRouter} from "next/router";
import {useQuery} from "react-query";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [bussines, setBussines] = useState([])
    const router = useRouter();
    //
    // useEffect(async ()  =>  {
    //     const res = await fetch(`${API_URL}/businesses/${router.query.slug}`)
    //     const data = await res.json();
    //     setBussines(data)
    // }, [])

    const fetchData = async () => {
        const res = await fetch(`${API_URL}/businesses/${router.query.slug}`)
        return res.json();
    }

    const { isLoading, error, data } = useQuery('repoData', fetchData)

    if (isLoading) return ''
    if (error) return false

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>{data.bussines_name}</a>
        </Link>
      </div>
      <Search placeholder={"Search anything"} />
    </header>
  );
}
