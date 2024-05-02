import { Link, useLocation } from "react-router-dom"
import"./sideBareMagasin.css"
// import logo from "../../Admin/IMG/Blue_and_Black_Modern_Digital_Agency_Logo-removebg-preview.png"
import logomagasine from "../../Admin/IMG/cropped-favicon-mylittlegarage-32x32 1.png"
import { useContext, useEffect, useState } from "react";
import LOGO from "../../Admin/IMG/Logo.png"
import { act } from "react-dom/test-utils";
import { MagasinContext } from "../../../Context/MagasinContext";
export default function SideBareMagasin(){
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const magasinContext = useContext(MagasinContext);
  const MagasinId = localStorage.getItem('MagasinId');
  const MagasinName = localStorage.getItem('MagasinName');
    const id = MagasinId || magasinContext.id?.id;
    const nameMagasin =  MagasinName || magasinContext.id?.NomMagasin;


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
  <title>Matjar</title>
</div>

<body>
<section className="sidebar">
  <br />
  <a href="#" className="brand">
    <img className="mt-3" src={LOGO} />			
  </a>
  <img id="logoMagasin" src={logomagasine}  />			
  <ul id = "side" className="sidee-menu top">
    <li className={activeItem === `/magasins/${id}` || activeItem===`/magasins/${id}/articles` || activeItem===`/magasins/${id}/panier` || activeItem==="/affiche-article" || activeItem==="/magasins/id/panier" || activeItem && /^\/magasins\/\d+\/articles\/\d+$/.test(activeItem)? "active" : "" }>
        <Link to={`/magasins/${id}`} className="active">
      <a href="#">
        <i className="bi bi-menu-button-wide-fill" />
      </a>
      </Link>
    </li>
    <li className={activeItem === `/magasins/${id}/articles/voire`|| activeItem ==="/message/article" || activeItem==="/magasins/:id/articles/:id" || activeItem===`/magasins/${id}/articles/add` ? "active" : "" }>
    <Link to={`/magasins/${id}/articles/voire`}>

      <a href="#">
        <i className="bi bi-box-seam" />
      </a>

      </Link>
    </li>
    <li className={activeItem === `/magasins/${id}/commercials` || activeItem==="/message/commercial" || activeItem===`/magasins/${id}/commercials/add` || activeItem==="/magasins/id/commercials/id/shart" ? "active" : "" }>
    <Link to= {`/magasins/${id}/commercials`}>

      <a href="#">
      <i className="bi bi-headset"></i>
      </a>

      </Link>
    </li>
    <li className={activeItem === `/magasins/${id}/clients` || activeItem===`/message/client` || activeItem===`/magasins/${id}/clients/add` ? "active" : "" }>
      <Link to={`/magasins/${id}/clients`}>

      <a href="#">
      <i className="bi bi-people"></i>
      </a>

      </Link>
    </li>
    <li className={activeItem === `/magasins/${id}/historiques` || activeItem===`/magasins/${id}/historiques/id` ? "active" : "" }>
      <Link to={`/magasins/${id}/historiques`}>

      <a href="#">
      <i className="bi bi-clock"></i>
            </a>

      </Link>
    </li>
  </ul>
  <br />
<br />

  <div className="menu-down-magasine">
  <div className="hr">

<hr />
</div>
    <ul className="side-menu top ">
    <li className={activeItem === `/magasins/${id}/notifications` || activeItem==="/magasins/notification/confirme" ? "active" : "" }>
    <Link to={`/magasins/${id}/notifications`}>

      <a href="#">
      <i className="bi bi-bell"><span className="countNotifcom">1</span></i>
            </a>

      </Link>
    </li>
      <li className={activeItem === "/" || activeItem==="/produit" ? "active" : "" }>
      <Link to={`/magasins/${id}/paramétres`}>

        <a href="#">
          <i className="bi bi-gear" />
        </a>

      </Link>
      </li>
    </ul>
    <ul className="logoutmagasine">
      <li className={activeItem === "/" || activeItem==="/produit" ? "active" : "" }>
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