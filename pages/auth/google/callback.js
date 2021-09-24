import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { API_URL } from "@/config/index";
import { toast } from "react-toastify";

export default function LoginPage({ res }) {
  const { googleLogin, error } = useContext(AuthContext);

  useEffect(() => {
    error && toast.error(error);
    googleLogin(res);
  }, []);

  return <div></div>;
}

export async function getServerSideProps({ resolvedUrl }) {
  const data = await fetch(`${API_URL + resolvedUrl}`);
  const res = await data.json();

  return {
    props: { res },
  };
}
