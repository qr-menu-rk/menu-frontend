import {useRouter} from 'next/router'
import {useState, useEffect} from "react";


export default function Search({placeholder}) {
    const router = useRouter()
    let [term, setTerm] = useState()
    function doSearch(e) {
        e.preventDefault();
        router.push(`/search?term=${term}`)
        setTerm('')
    }

    useEffect(() => {
        setTerm(router.query.term)
    }, [router.query.term])

    return (
        <div className="m-5 border-2 p-2 rounded-lg text-center">
            <form onSubmit={event =>  doSearch(event)}>
                <input className="text-center w-full" type="search" placeholder={placeholder} value={term} onChange={e => setTerm(e.target.value)} />
            </form>
        </div>
    );
}
