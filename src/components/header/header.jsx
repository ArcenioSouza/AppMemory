import React from 'react'
import * as S from './header.module.css' 

const Header = () => {
   return (
      <div className={S.container}>
         <div className={S.title}>
            <h1>App <span className={S.span}>MemoryCard</span></h1>
         </div>
         <div className={S.list}>
            <ul>
               <li>Reminder</li>
               <li>Notes</li>
            </ul>
         </div>
      </div>
   )
}

export default Header;
