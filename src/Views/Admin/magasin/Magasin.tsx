import Sidebare from "../Sidbare/Sidebare";
import "../categories/Categories"
import logoMagasin from "../IMG/s1.png"
import "./magasin.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MagasinInfo } from "../../../Modeles/MagasinModel";
import AfficheMagasinsService from "../../../Services/Magasin/AfficheMagasinsService";
export interface ProductType{

  product : MagasinInfo[],
  messageErros:string,
}
export default function Magasin(){

  const [state , setState] = useState<ProductType>({
    product:[] as MagasinInfo[],
    messageErros : "accune produit",

})
useEffect(()=>{
    setState({...state })
        AfficheMagasinsService().getMagasin()
        .then((res)=>setState({...state  , product:res.data})

        )
        .catch(msg=>setState({...state  , product:msg.messageErros}))
},[]);  
const {product , messageErros} = state

console.log(product);
return <> 
        <Sidebare/>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div className="categ">
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherch un magasin, ..." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/magasin/add">
          <button className="btnAjoutee creteMagasin">Créer un magasin</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
{product.length>0? product.map((pro:any)=>(
    
<div className="container magasin">
  <div className="magasinInfo">

  <h5>{pro.NomMagasin}</h5>
  <img src={logoMagasin} alt="" />
  </div>
<div className="card">
  <div className="location">

    <p><i className="bi bi-geo"></i> {pro.VilleName}</p>
    <div className="etoile">

    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <span>(30K)</span>
    </div>
  </div>
    <p className="descmag">Depot : ---- {pro.DepotName} -----</p>
     <Link to={`/magasin/${pro.IdMagasin }/edit`}><a className="voirPlus" href=""> plus de details  <i className="bi bi-arrow-right-short" /></a></Link>
</div>
</div>
)):""
}
{/* <div className="container magasin">
  <div className="magasinInfo">

  <h5>My little garage</h5>
  <img src={logoMagasin} alt="" />
  </div>
<div className="card">
  <div className="location">

    <p><i className="bi bi-geo"></i> bd Mohamed Zerktouni, 1°et., Grand Casablanca</p>
    <div className="etoile">

    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <span>(30K)</span>
    </div>
  </div>
  <p className="descmag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,<br />
     eius quasi quas ducimus sint est magni quibusdam exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,
     eius quasi quas ducimus sint est magni quibusdam exercitationem.</p>
    <Link to="/magasin/edit"><a className="voirPlus" href=""> plus de details  <i className="bi bi-arrow-right-short" /></a></Link>
</div>
</div>
<div className="container magasin">
  <div className="magasinInfo">

  <h5>My little garage</h5>
  <img src={logoMagasin} alt="" />
  </div>
<div className="card">
  <div className="location">

    <p><i className="bi bi-geo"></i> bd Mohamed Zerktouni, 1°et., Grand Casablanca</p>
    <div className="etoile">

    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <span>(30K)</span>
    </div>
  </div>
  <p className="descmag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,<br />
     eius quasi quas ducimus sint est magni quibusdam exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,
     eius quasi quas ducimus sint est magni quibusdam exercitationem.</p>
    <Link to="/magasin/edit"><a className="voirPlus" href=""> plus de details  <i className="bi bi-arrow-right-short" /></a></Link>
</div>
</div> */}
    </>
}