import { useState, useEffect } from 'react'
import youtube from '../api/YouTube'
const KEY = 'AIzaSyBh2M7irBGUugRP1L_jMnV0P9-fcAqaUZI'

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