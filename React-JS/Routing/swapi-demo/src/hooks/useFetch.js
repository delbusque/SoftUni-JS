import { useState, useEffect } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState();

    useEffect(() => {
        fetch(url).then(res => res.json()).then(result => setData(result.results))
    }, [url])

    return data;
}