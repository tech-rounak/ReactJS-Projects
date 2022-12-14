import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';
const navigationItem = (props)=>(
    <ul>
        <li className={classes.NavigationItem}>
            <NavLink to ={props.link} activeClassName={classes.active}>{props.children}
            </NavLink>
        </li>
    </ul>
);

export default navigationItem;