import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const Allposts = () => {
    const [posts, getPosts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:5002/api/Posts')
        .then(res => {
            console.log(res.data)
            getPosts(res.data)
            setLoaded(true)
        })
    }, [])

  return (
    <div>
        {!loaded ? <p>Loading...</p> : posts.map(item => {
            return <p key={item._id}>{item.title}</p>
        })}
    </div>
  )
}

export default Allposts