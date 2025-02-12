import React from 'react'
import Styles from './navBar.css'

const Menu = () => {
  return (
    <div className='Styles.menuBlock'>
        <ul>
            <li><Link ="/">DashBoard</Link></li>
            <li><a href="./Classroom">Classrooms</a></li>
            <li><a href="./Store">Store</a></li>
            <li><a href="./Blog">Blog</a></li>
            
        </ul>

    </div>
  )
}

export default Menu