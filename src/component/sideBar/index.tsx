// src/components/SideBarComponent.tsx
import { NavLink } from "react-router-dom"
import React from 'react';
import { useAppSelector } from '../../store/hooks';
import "./style.scss"
import { HiOutlineUserCircle } from 'react-icons/hi';
import SearchIcon from "../../assets/icons/ICON - Search.png"

function SideBarComponent() {
  const { childrenRoute } = useAppSelector((state) => state.sideBarSlice );
  

  return (
    <div className="menu">
      <nav className="menu_nav">
        <NavLink to={'/user'} className={'route user'}>
          <HiOutlineUserCircle color="white" size={82}/>
          <p className="name">{'Daniel'}</p>
        </NavLink>

        <button className={'route search'}>
          <p className="imgMain"><img className="icon" src={SearchIcon} alt="logo"/></p>
          <p className="name">{'Search'}</p>
        </button>

        {childrenRoute.map(({id,icon,path,name}) =>
          <NavLink key={id} to={path}  className={'route'}>
            <p className="imgMain"><img className="icon" src={icon} alt="logo"/></p>
            <p className="name">{name}</p>
          </NavLink>
        )}
      </nav>

      <div className="exit_and_lang_side">
        <button className="field">LANGUAGE</button>
        <button className="field">GET HELP</button>
        <button className="field">EXIT</button>
      </div>
    </div>
  );
};

export default SideBarComponent;
