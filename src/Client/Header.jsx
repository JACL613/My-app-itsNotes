import React, {useEffect} from 'react'
import { FaHouseUser, FaUser, FaComment, FaRegSun } from "react-icons/fa";

function Header({setLayout , layout ,punteroLayout, setPunteroLayout}) {
  useEffect(()=>{
    activeLink(punteroLayout)
  },[punteroLayout])
  function activeLink(puntero) {
    const list = document.querySelectorAll(".list");
    list.forEach((item) => {
      item.classList.remove("active");
    });
    list[puntero?puntero - 1:1].classList.add("active");
  }

  return (
    <div className="Navigator">
      <ul>
        <li
          onClick={() => {
            setPunteroLayout(1)
            activeLink(punteroLayout);
            setLayout('home')
          }}
          className="list active"
        >
          <a href="#">
            <span className="icon">
              <FaHouseUser />
            </span>
            <span className="text">Home</span>
          </a>
        </li>
        <li
          onClick={() => {
            activeLink(2);
            setLayout('sesion')
          }}
          className="list"
        >
          <a href="#">
            <span className="icon">
              <FaUser />
            </span>
            <span className="text">Perfile</span>
          </a>
        </li>
        <li
          onClick={() => {
            activeLink(3);
            setLayout('coments')
          }}
          className="list"
        >
          <a href="#">
            <span className="icon">
              <FaComment />
            </span>
            <span className="text">coments</span>
          </a>
        </li>
        <li
          onClick={() => {
            activeLink(4);
          }}
          className="list"
        >
          <a href="#">
            <span className="icon">
              <FaRegSun />
            </span>
            <span className="text">Settings</span>
          </a>
        </li>
        <div className="indicador"></div>
      </ul>
    </div>
  );
}

export default Header