import React from "react";
import {useState} from "react";

function LeftMenu() {
  
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const sidebar = (
    `sidebar ${sidebarIsOpen && 'open'}`
  );

  const closeBtn = (
    (sidebarIsOpen) ? `bx bx-menu-alt-right` : `bx bx-menu`
  )

  // function searchBtn() {
  //   if (sidebarIsOpen) {
  //     return (
  //       <li>
  //         <i className='bx bx-search'></i>
  //         <input type="text" placeholder="Поиск..."></input>
  //         <span className="tooltip">Поиск</span>
  //       </li>
  //     )
  //   }       
  // }

  function handleMenuChange() {
    setSidebarIsOpen(!sidebarIsOpen)
  }

    return (
      <div>
        <div className={sidebar}>
          <div className="logo-details">
          <i className='bx bxl-c-plus-plus icon'></i>
            <div className="logo_name">Ops Space</div>
            <i className={closeBtn} id="btn" onClick={handleMenuChange}>
              <svg xmlns="../images/ops-logo.svg"></svg>
            </i>
        </div>
        <ul className="nav-list">
          {/* {searchBtn} */}
          <li>
            <a href="#">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Главная</span>
            </a>
            <span className="tooltip">Главная</span>
          </li>
          <li>
          <a href="#">
            <i className='bx bx-user' ></i>
            <span className="links_name">Кабинет сотрудника</span>
          </a>
          <span className="tooltip">Кабинет сотрудника</span>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-calendar'></i>
            <span className="links_name">Календарь событий</span>
          </a>
          <span className="tooltip">Календарь событий</span>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-file' ></i>
            <span className="links_name">Конструктор ДИ</span>
          </a>
          <span className="tooltip">Конструктор ДИ</span>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-pie-chart-alt-2' ></i>
            <span className="links_name">Дэшборды Ops</span>
          </a>
          <span className="tooltip">Дэшборды Ops</span>
        </li>
        <li>
          <a href="#">
            <i class='bx bxs-phone-call' ></i>
            <span className="links_name">Обратная связь</span>
          </a>
          <span className="tooltip">Обратная связь</span>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-cog' ></i>
            <span className="links_name">Настройки</span>
          </a>
          <span className="tooltip">Настройки</span>
        </li>
        <li className="profile">
            <div className="profile-details">
              {/* <!--<img src="profile.jpg" alt="profileImg">--> */}
              <div className="name_job">
                <div className="name">Кирилл Шилин</div>
                <div className="job">МегаПрограммер</div>
              </div>
            </div>
            <i className='bx bx-log-out' id="log_out" ></i>
        </li>
        </ul>
      </div>
      <section className="home-section">
          <div className="text">Календарь событий Ops</div>
      </section>
    </div>
      );
}

export default LeftMenu;
