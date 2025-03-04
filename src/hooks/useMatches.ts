import axios from "axios";
import { useEffect, useState } from "react";
import { Matches } from "../pages/TasksPage";

export function useMatches(){
    let [matches, setMatches] = useState<Matches[]>();
    let [error, setError] = useState<string | null>(null);
    let [loading, setLoading] = useState<boolean>(true);

    let fetchMatches = async () => {
        setLoading(true);
        setError(null);

        try {
            let response = await axios.get("https://app.ftoyd.com/fronttemp-service/fronttemp")
            setMatches(response.data.data.matches);
        } catch (err) {
            setError("Ошибка: не удалось загрузить информацию")
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchMatches();
    },[]);

    return {fetchMatches, matches, error, loading};
}