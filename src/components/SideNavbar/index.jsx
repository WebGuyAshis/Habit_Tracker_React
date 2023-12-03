import { Link } from 'react-router-dom'
import './sidenavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faChartSimple, faGear } from '@fortawesome/free-solid-svg-icons'
const SideNavbar = ()=>{
    return(
        <div className="sidebar-container">
            <h2 className='logo-name'>HabitBuddy</h2>

            <ul className="navigation-list">
                <li className="navigation-items">
                    <Link className='links' to='/'>
                    <FontAwesomeIcon icon={faHouse} />
                        Today</Link>
                </li>
                <li className="navigation-items">
                    <Link className='links' to='/'>
                    <FontAwesomeIcon icon={faChartSimple} />
                        Statistics</Link>
                </li>
                <li className="navigation-items">
                    <Link className='links' to='/user/settings'>
                    <FontAwesomeIcon icon={faGear} />
                        Settings</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideNavbar