import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="main__home">
        <header>
          <div className="main-container">
            <nav>
              <div className="home__logo">
                <img
                  src={require("../../assets/Images/MainLogo.png")}
                  alt="Mainlogo"
                />
              </div>
              <div className="home__pages">
                <ul>
                  <li>
                    <NavLink href="">Главная</NavLink>
                  </li>
                  <li>
                    <NavLink href="">Интернет</NavLink>
                  </li>
                  <li>
                    <NavLink href="">Оператарам</NavLink>
                  </li>
                  <li>
                    <NavLink href="">Рекламодателям</NavLink>
                  </li>
                  <li>
                    <NavLink href="">О нас</NavLink>
                  </li>
                  <li>
                    <NavLink href="">Новости</NavLink>
                  </li>
                  <li>
                    <NavLink href="">Контакты</NavLink>
                  </li>
                </ul>
              </div>
              <div className="home_admin">
                <div className="admin_btn">
                  <img
                    src={require("../../assets/Images/adminIcon.png")}
                    alt=""
                  />
                  <NavLink>Персональный кабинет</NavLink>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Home;
