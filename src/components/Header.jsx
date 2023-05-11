import {NavLink} from 'react-router-dom'
import './header.css'

function Header () {
    return(
        <div className='container'>
            <nav>
                <ul className='container__ul'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Header