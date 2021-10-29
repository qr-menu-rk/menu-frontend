import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import styles from "../styles/EventItem.module.css";
import { parseCookies } from "@/helpers/index";

export default function Home({ res }) {
  return (
    <Layout>
      <div className={styles.gridContainer}>
        <h1>You should login to your bussines</h1>
      </div>
    </Layout>
  );
}
