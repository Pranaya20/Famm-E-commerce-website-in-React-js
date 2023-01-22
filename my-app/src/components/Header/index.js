import React,{useState} from 'react';
import _map from "lodash/map";

import MainContainer from './style';
import {Logo} from "design/icon";

function Header() {
    const [activePath, setActivePath] = useState(1);
    console.log("activePath:-",activePath);
    const header_item = [
        {
          id: 1,
          path: "/",
          title: "Home",
        },
        {
          id: 2,
          path: "/mans",
          title: "Mans",
        },
        {
            id: 3,
            path: "/womens",
            title: "Womens",
          },
          {
            id: 4,
            path: "/Kids",
            title: "Kids",
          },
          {
            id: 3,
            path: "/user",
            title: <i class="fa fa-user" aria-hidden="true"></i>,
          },
          {
            id: 4,
            path: "/cart",
            title: <i class="fa fa-shopping-bag" aria-hidden="true"></i>,
          },
       
      ];

      const onClickHandle = (path) =>{
         console.log("path:-",path);
         setActivePath(path);
      }
  return (<MainContainer>
    <nav>
        <img src={Logo}  class="nav-image"/>
        <div class="nav-container">
            <ul id="navbar">
            {_map(header_item, (list, index) => (
                 <li onClick={()=>onClickHandle(list.path)} className={ activePath == list.path ? "active-nave": "nav" } >{list.title}</li>
            ))}
        </ul>
    
      </div>
    </nav>
    </MainContainer>

  )
}

export default Header;