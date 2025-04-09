import { useEffect, useState } from "react";
import { API_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setCache } from "../utils/cacheSlice";

function useTopHeadline() {
    const [apiData, setApiData] = useState([])
    const dispatch = useDispatch()
    const cache = useSelector((store) => store.cache.cache)

    useEffect(() => {

        if (cache['Headlines']) {
            setApiData(cache['Headlines'])
        }
        else {
            fetchData()
        }
    }, [API_KEY])

    async function fetchData() {
        const data = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY)
        const json = await data.json()
        console.log(json)
        setApiData(json.articles)

        dispatch(setCache({ ['Headlines']: json.articles }))
    }

    return apiData
}

export default useTopHeadline