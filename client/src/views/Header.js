import React from 'react'
import classes from '../cssModules/Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={classes.OuterBox}>
            <div className={classes.Container}>
            <h2>What have you been thinking about lately...</h2>
            <h2 onClick={() => navigate('/')} className={classes.H2}>Add Post</h2>
            <h2 onClick={() => navigate('/allPosts')} className={classes.H2}>View all posts</h2>
            </div>
        </div>
    )
}

export default Header