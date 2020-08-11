import React, { useState } from 'react'

const SearchBar = ({ onSearchTermSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = event => {
        event.preventDefault()

        onSearchTermSubmit(term)
    }

    return (    
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a video</label>
                    <input 
                    type="text" 
                    value={term}
                    placeholder='Search by song, artist, album, etc...'
                    onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

export default SearchBar