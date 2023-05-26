import React from 'react'
import { Link } from 'react-router-dom'
import "../Header/Header.scss"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Header = () => {
    return (
        <div>
            <div className="navbar">

                <div className="navbar__left">
                    <div className="navbar__left__logo">
                        <img src="https://preview.colorlib.com/theme/drimo/drimo/img/logo-6.png" alt="" />
                    </div>
                    <ul>
                        <li> <Link id='link' to="">Home</Link> </li>
                           
                            <li><Link id='link' to="add">Add</Link></li>
                       
                    </ul>
                </div>

                <div className="navbar__right">
                    <div className="icon1">
 <Link id='link' to="wishlist"><FavoriteBorderIcon/></Link>
                    </div>
                    <div className="icon1">
 <Link id='link' to="basket"><ShoppingCartIcon/></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
