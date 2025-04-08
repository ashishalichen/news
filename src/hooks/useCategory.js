import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";

function useCategory(category) {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=` + API_KEY)
            const json = await data.json()
            console.log(json)
            setApiData(json.articles)

        }
        fetchData()

    }, [API_KEY])

    return apiData
}

export default useCategory