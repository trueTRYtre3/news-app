import React, { useState } from 'react'

const SearchBar = () => {
    const [topic, changeTopic] = useState("")

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
    }

    return (
        <div>
            <form onSubmit={(event) => submitForm(event)}>
                <input 
                    type="text" 
                    value={topic} 
                    onChange={(event) => changeTopic(event?.target.value)} 
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar