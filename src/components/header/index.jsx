import React from 'react'
import * as S from './header.module.css' 

const Header = () => {
   return (
      <div className={S.container}>
         <ul>
            <li>Reminder</li>
            <li>Notes</li>
         </ul>
      </div>
   )
}

export default Header;
