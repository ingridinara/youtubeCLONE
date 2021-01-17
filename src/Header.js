import React, { useState} from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from "react-router-dom";
/* relacionar el link con el useState (value) */

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    /* relacionado con value y onChange */

    return (
        <div className="header">

           <div className="header__left">
                <MenuIcon />

                <Link to="/">
                <img className="header__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" 
                alt=""/>
                </Link>

            </div>

            <div className="header__input">
                <input 
                onChange={e => setInputSearch(e.target.value)} 
                value={inputSearch} 
                placeholder=" Search" 
                type="text"/>

                <Link to={`/search/${inputSearch}`}>
                <SearchIcon className="header__inputButton"/>
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon"  />
                <Avatar alt="" src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg"/>
            </div>

        </div>
    )
}

export default Header