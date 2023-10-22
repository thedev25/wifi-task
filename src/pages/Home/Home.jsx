import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
// import Service from "./Service";
import Button from "../../components/CustomButton/CustomButton";

function Home() {
  const data = [
    {
      id: 1,
      name: " ИНТЕРНЕТ ДЛЯ ДОМА",
      category: "Новые возможности для абонентов",
      description:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
      title:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
    },
    {
      id: 2,
      name: " ИНТЕРНЕТ ДЛЯ ДОМА",
      category: "Новые возможности для абонентов",
      description:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
      title:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
    },
    {
      id: 3,
      name: " ИНТЕРНЕТ ДЛЯ ДОМА",
      category: "Новые возможности для абонентов",
      description:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
      title:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
    },
    {
      id: 4,
      name: " ИНТЕРНЕТ ДЛЯ ДОМА",
      category: "Новые возможности для абонентов",
      description:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
      title:
        "Подключите домашний интернет и входите в городскую сеть Wi-Fi «Sola» используя свой логин",
    },
  ];

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
                    <NavLink to="/shop">Главная</NavLink>
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
            <div className="home__section">
              <div className="section__desc">
                <h1>
                  Быстрый и доступный интернет <br /> в Ташкенте на <br /> базе
                  сетей Wi-Fi
                </h1>

                <p>
                  Сеть Sola — это точки доступа к беспроводному интернету в
                  городе Ташкенте, расположенные на улицах города, в <br />
                  торгово-развлекательных центрах, столичных парках, в
                  медицинских и учебных учреждениях, в местах массового <br />
                  скопления граждан. Оставайтесь онлайн, обменивайтесь
                  информацией, смотрите видео без ограничений трафика.
                </p>
                <div>
                  <div className="section__btns">
                    <Button>УЗНАТ БОЛЬШЕ</Button>
                    <Button>НОВОЕ УСТРОЙСТВО</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="main__services">
        <div className="main-container">
          <div className="service__row">
            {data.map((data) => (
              <div className="service__box">
                <img src="" alt="" />
                <span>{data.name}</span>
                <p>{data.category}</p>
                <h6>{data.description}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
