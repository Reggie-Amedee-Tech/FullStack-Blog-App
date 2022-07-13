import axios from 'axios'
import React from 'react'
import classes from '../cssModules/Allposts.module.css'
import {Link} from 'react-router-dom'
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
                return <div className={classes.MainDiv}>
                    <div className={classes.Container}>
                        <h1>{item.title}</h1>
                        <h4>{item.date.slice(0, 10)}</h4>
                        <Link to={'/post/' + item._id}>View Post</Link>
                        <Link to={item._id + '/edit'}>Edit Post</Link>               
                        </div>
                    
                </div>

            })}
        </div>
    )
}

export default Allposts