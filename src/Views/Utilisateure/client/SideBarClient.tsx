import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Admin/IMG/s1.png"
import "./SidBarClient.css"
import { MagasinContext } from "../../../Context/MagasinContext";
export default function SidBarClient(){
    const location = useLocation();
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const magasinContext = useContext(MagasinContext);
  const MagasinId = localStorage.getItem('ClientId');
  const MagasinName = localStorage.getItem('ClientName');
    const idClient = MagasinId || magasinContext.id?.id;
    const NameClient =  MagasinName || magasinContext.id?.NomMagasin;
    useEffect(() => {
      const path = location.pathname;
  
      setActiveItem(path);
    }, [location.pathname]);
  
      return<>
  <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />	{/* My CSS */}
    <title>MerchSentry</title>
  </div>
  
  <body>
  <section className="sidebar">
    <a href="/#/client" className="brand">
      <img className="logocommercial mt-3" src={logo}  />			
    </a>
    <img className="profilCommercial" src={""}  />	
    <br />	
    <ul className="side-menu top mb-5">
      <li className={activeItem === `/clients/${idClient}` ? "active" : "" }>
          <Link className="active" to={`/clients/${idClient}`}>
        <a href="#">
          <i className="bi bi-menu-button-wide-fill" />
        </a>
        </Link>
      </li >
      <li className={activeItem === "" ? "active" : "" }>
        <Link to="">
  
        <a href="#">
        <i className="bi bi-clock"></i>
              </a>
  
        </Link>
      </li>
    </ul>
    <br />
    <div className="menu-down-commercial mt-5">
    <div className="hr">
  
    <hr />
    </div>
      <ul className="side-menu-commercial top ">
      <li className={activeItem === "/" ? "active" : "" }>
      <Link to="">
  
        <a href="#">
        <i className="bi bi-bell"></i>
              </a>
  
        </Link>
      </li>
        <li className={activeItem === "/" ? "active" : "" }>
        <Link to="">
  
          <a href="#">
            <i className="bi bi-gear" />
          </a>
  
        </Link>
        </li>
      </ul>
  
      <ul className="logout-commercial">
        <li className={activeItem === "/" ? "active" : "" }> 
        <Link to={`/logout`}>
  
          <a href="#" className="logout">
            <i className="bi bi-box-arrow-left" />
          </a>
  
        </Link>
        </li>
      </ul>
    </div>
  </section>
  
  </body>
  
      </>
}