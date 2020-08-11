import { useState, useEffect } from 'react'
import youtube from '../api/YouTube'
const KEY = process.env.REACT_APP_GOOGLE_API_KEY

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
       search(defaultSearchTerm)
    }, [defaultSearchTerm])

    const search = async term => {
        //Call the YouTube API
        const response = await youtube.get('/search', {
            params: {
                q : term,
                part : 'snippet',
                maxResults : 5,
                type: 'video',
                key: KEY
            }
        })

        setVideos(response.data.items)
    }

    return [videos, search]
}

export default useVideos