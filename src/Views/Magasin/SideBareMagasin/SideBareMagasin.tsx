import { Link, useLocation } from "react-router-dom"
import"./sideBareMagasin.css"
// import logo from "../../Admin/IMG/Blue_and_Black_Modern_Digital_Agency_Logo-removebg-preview.png"
import logomagasine from "../../Admin/IMG/cropped-favicon-mylittlegarage-32x32 1.png"
import { useEffect, useState } from "react";
import LOGO from "../../Admin/IMG/Logo.png"
import { act } from "react-dom/test-utils";
export default function SideBareMagasin(){
  const location = useLocation();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const path = location.pathname;

    // Set the active item based on the current path
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
<section id="sidebar">
  <br />
  <a href="#" className="brand">
    <img className="mt-3" width="47px" style={{marginLeft:"28px" , marginBottom:"20px"}} src={LOGO} />			
  </a>
  <img id="logoMagasin" src={logomagasine}  />			
  <ul id = "side" className="sidee-menu top">
    <li className={activeItem === "/magasine" || activeItem==="/panier" ? "active" : "" }>
        <Link to="/magasine" className="active">
      <a href="#">
        <i className="bi bi-menu-button-wide-fill" />
      </a>
      </Link>
    </li>
    <li className={activeItem === "/produits" || activeItem==="/changeInfo" || activeItem==="/magasin/ajouter-produit" ? "active" : "" }>
    <Link to="/produits">

      <a href="#">
        <i className="bi bi-box-seam" />
      </a>

      </Link>
    </li>
    <li className={activeItem === "/magasin/commercial" || activeItem==="/ajouter-commercial" ? "active" : "" }>
    <Link to="/magasin/commercial">

      <a href="#">
      <i className="bi bi-headset"></i>
      </a>

      </Link>
    </li>
    <li className={activeItem === "/magasin/client" || activeItem==="/magasin/client/ajouter" ? "active" : "" }>
      <Link to="/magasin/client">

      <a href="#">
      <i className="bi bi-people"></i>
      </a>

      </Link>
    </li>
    <li className={activeItem === "/magasin/historique" || activeItem==="/magasin/historique/id" ? "active" : "" }>
      <Link to="/magasin/historique">

      <a href="#">
      <i className="bi bi-clock"></i>
            </a>

      </Link>
    </li>
  </ul>
  <br />
<br />

  <div className="menu-down">
  <div className="hr">

<hr />
</div>
    <ul className="side-menu top ">
    <li className={activeItem === "/magasin/notification" || activeItem==="/magasin/notification/confirme" ? "active" : "" }>
    <Link to="/magasin/notification">

      <a href="#">
      <i className="bi bi-bell"><span className="countNotifcom">1</span></i>
            </a>

      </Link>
    </li>
      <li className={activeItem === "/" || activeItem==="/produit" ? "active" : "" }>
      <Link to="">

        <a href="#">
          <i className="bi bi-gear" />
        </a>

      </Link>
      </li>
    </ul>
    <ul className="logout">
      <li className={activeItem === "/" || activeItem==="/produit" ? "active" : "" }>
      <Link to="">

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