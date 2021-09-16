import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import EventItem from "../components/EventItem";
import styles from "../styles/EventItem.module.css";
import { parseCookies } from "@/helpers/index";

export default function Home({ res }) {
  return (
    <Layout>
      <div className={styles.gridContainer}>
       <h1>QR MENU</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=4`);
  const res = await data.json();

  return {
    props: { res },
    revalidate: 1,
  };
}
