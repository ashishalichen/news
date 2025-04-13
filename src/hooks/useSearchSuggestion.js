import { useEffect, useState } from "react"
import { SUGGESTION_API } from "../utils/constants"

function useSearchSuggestion(keyword) {
    const [suggestions, setSuggetions] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchSuggestion()
        }, 500);

        return () => clearTimeout(timer)

    }, [keyword])


    async function fetchSuggestion() {
        const data = await fetch(SUGGESTION_API + keyword)
        const json = await data.json()
        console.log(json[1])
        setSuggetions(json[1])

        return json[1]
    }

    return suggestions
}

export default useSearchSuggestion