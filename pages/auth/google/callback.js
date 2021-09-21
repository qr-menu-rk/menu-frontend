import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import {API_URL} from "@/config/index";

export default function LoginPage({res}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { googleLogin } = useContext(AuthContext);

    useEffect(() => googleLogin(res));

    return (
       <div>

       </div>
    );
}

export async function getServerSideProps({resolvedUrl}) {
    const data = await fetch(`${API_URL + resolvedUrl}`);
    const res = await data.json();

    return {
        props: { res },
    };
}
