import React from 'react'
import Styles from './navBar.css'

const Menu = () => {
  return (
    <div className='Styles.menuBlock'>
        <ul>
            <li><Link to="">Dashboard</Link></li>
            <li><Link to="">Classroom</Link></li>
            <li><Link to="">Store</Link></li>
            <li><Link to="">Blog</Link></li>
            <li><Link to="">Assessments</Link></li>
            <li><Link to="">Tags</Link></li>
        </ul>

    </div>
  )
}

export default Menu