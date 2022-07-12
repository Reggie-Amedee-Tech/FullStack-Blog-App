import React from 'react'
import classes from '../cssModules/Header.module.css'

const Header = () => {
    return (
        <div className={classes.OuterBox}>
            <div className={classes.Container}>
            <h1>Welcome, to my world...</h1>
            <h2>Reginald Jean Amedee</h2>
            </div>
        </div>
    )
}

export default Header