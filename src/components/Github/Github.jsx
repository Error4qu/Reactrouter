import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    return (
        <h2>Github followers: {data.followers}</h2>
    )
}

export default Github
export const loadGithub = async () => {
    const response = await fetch('https://api.github.com/users/Error4qu')
    return response.json()
}