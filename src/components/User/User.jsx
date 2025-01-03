import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function User() {
    const {userid} = useParams()
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch(`https://api.github.com/users/${userid}`)
        .then(response => response.json())
        .then(data => {
            setData(data)
        })
    }, [])
  return (
    <div>
      <h1 className='text-center text-5xl font-medium '>User: {userid}</h1> <br />
      <h2 className='text-center text-2xl font-medium '>Followers: {data.followers}</h2>
      <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-full flex mx-auto mt-5'/>
    </div>
  )
}

export default User

// export const userInfoLoader = async () => {
//     const response = await fetch(`https://api.github.com/users/${userid}`)
//     return response.json()
// }
