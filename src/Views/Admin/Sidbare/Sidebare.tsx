import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebare.css";
import Logo from "../IMG/Logo.png"
export default function Sidebare() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname;

    // Set the active item based on the current path
    setActiveItem(path);
  }, [location.pathname]);

  return (
    <>
    {/* sidebare admin  */}
    
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        {/* My CSS */}
        <title>Matjar</title>
      </div>

      <body>
        <section className="sidebar">
          <a href="#" className="brand">
            <img className="mt-3" src={Logo} />
          </a>
          <br />
          <ul className="side-menu top">
            <li className={activeItem === "/home"|| activeItem && /^\/articles\/\d+$/.test(activeItem) ||activeItem && /^\/articles\/\d+\/edit$/.test(activeItem)? "active" : "" }>
              <Link className="active" to="/home">
                <a href="#">
                  <i className="bi bi-menu-button-wide-fill" />
                </a>
              </Link>
            </li>
            <li className={activeItem === "/articles" ?  "active"  : "" || activeItem==="/message" || activeItem === "/articles/categories/add" ?  "active"  : ""}>
              <Link to="/articles">
                <a href="#">
                  <i className="bi bi-box-seam" />
                </a>
              </Link>
            </li>
            <li className={activeItem === "/magasin" ? "active" : "" || activeItem === "/magasin/add" ? "active"  : "" || activeItem && activeItem.startsWith("/magasin/") && activeItem.endsWith("/edit") ? "active"  : ""}>
              <Link to="/magasin">
                <a href="#">
                  <i className="bi bi-shop" />
                </a>
              </Link>
            </li>
            <li className={activeItem === "/historiques" ? "active" : ""}>
              <Link to="/historiques">
                <a href="#">
                  <i className="bi bi-clock"></i>
                </a>
              </Link>
            </li>
          </ul><br />
          <div className="menu-down-admin mt-5">
          <div className="hr">
            <hr />
          </div>
            <ul className="side-menu top ">
            <li className={activeItem === "/notifacations" ? "active" : "" }>
              <Link to="">

                <a href="">
              <i className="bi bi-bell"/><span className="countNotif">1</span>
                      </a>
                </Link>
              </li>
              <li className={activeItem === "/Paramétres" ? "active" : ""}>

                <Link to="/Paramétres">
                  <a href="#">
                    <i className="bi bi-gear" />
                  </a>
                </Link>
              </li>
            </ul>
            <ul className="logout-admin">
              <li className={activeItem === "/logout" ? "active" : ""}>
                <Link to="/logout" className="logout">
                  <a href="#">
                    <i className="bi bi-box-arrow-left" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </body>
      <div className="container">
        <Link className=" icon-assi" to={"/assistance"}><i className="bi bi-headset"></i></Link>
      
      </div>
    </>
  );
}
