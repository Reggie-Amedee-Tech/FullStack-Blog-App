import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const GetPostDetail = () => {
    const [post, setPost] = useState({})

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.pathname.slice(6)

    useEffect(() => {
        axios.get('http://localhost:5002/api/Posts/' + id)
        .then(res => {
            setPost({...res.data})
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }, [])


  return (
    <div>
        <div>
            <h1>{post.title}</h1>
            <h3>{post.subTitle}</h3>
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default GetPostDetail