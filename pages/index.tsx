import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../components/Layout";
import styles from "../styles/EventItem.module.css";

export default function Home( ) {
  const router = useRouter()

  useEffect(() => {
      router.push('business/1')
  }, [])
  return (
    <h1></h1>
  );
}
