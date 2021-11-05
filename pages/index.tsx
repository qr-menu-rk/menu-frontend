import Layout from "../components/Layout";
import { API_URL } from "../config/index";
import styles from "../styles/EventItem.module.css";
import { parseCookies } from "@/helpers/index";

export default function Home({ res: object }) {
  return (
    <Layout>
      <div className={styles.gridContainer}>
       <h1>You should sslogin to your bussines</h1>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch(`${API_URL}/businesses?_sort=date:ASC&_limit=4`);
  const res: object = await data.json();

  return {
    props: { res },
    revalidate: 1,
  };
}
