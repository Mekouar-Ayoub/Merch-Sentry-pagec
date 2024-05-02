import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import ProductImage from "../../Admin/IMG/2.png"
import ProductImage1 from "../../Admin/IMG/3.png"
import ProductImage2 from "../../Admin/IMG/e1.png"

import "./ProduitMagasin.css"
import { Link } from "react-router-dom";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import { useContext, useEffect, useState } from "react";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import { MagasinContext } from "../../../Context/MagasinContext";
import AfficheArticleInMagasin from "../../../Services/Magasin/AfficheArticleInMagasin";

export interface ProductType{

    product : ArticleInfo[],
    messageErros:string,
  }
      
  export default function ProduitMagasin(){
    const magasinContext = useContext(MagasinContext);
    const MagasinId = localStorage.getItem('MagasinId');

      const id = MagasinId || magasinContext.id?.id;
    const [search , setSearche] = useState("");
    const [state , setState] = useState<ProductType>({
      product:[] as ArticleInfo[],
      messageErros : "accune produit",
  
  })
  const handelSearche=(e:any)=>{
    setSearche(e.target.value);
  }
  useEffect(()=>{
      setState({...state })
      AfficheArticleInMagasin().getArticle( )
          .then((res)=>setState({...state  , product:res.data})
          )
          .catch(msg=>setState({...state  , product:msg.messageErros}))
  },[]);
  const {product , messageErros} = state
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <SideBareMagasin/>
    <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" onChange={handelSearche} className="form-control form-input" placeholder="Recherch un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to={`/magasins/${id}/articles/add`}><button className="btnAjouteM">Ajouter un produit</button></Link>
        </div>
      </div>
    </div>
  </div>
    <div className="container">
    {
      product.length > 0 ? (
        product.filter((pro) => {
          const searchTerm = search.toLowerCase();
          const designation = pro.Designation.toLowerCase();
          const refArticle = pro.RefArticle.toString().toLowerCase();
          const sub = pro.LibelleSubstitut?.toString().toLowerCase(); 
          return searchTerm === "" || 
            designation.includes(searchTerm) || 
            refArticle.startsWith(searchTerm) ||
            sub?.startsWith(searchTerm);
        }).length > 0 ? (
          product.filter((pro) => {
            const searchTerm = search.toLowerCase();
            const designation = pro.Designation.toLowerCase();
            const refArticle = pro.RefArticle.toString().toLowerCase();
            const sub = pro.LibelleSubstitut?.toString().toLowerCase(); 
            return searchTerm === "" || 
              designation.includes(searchTerm) || 
              refArticle.startsWith(searchTerm)||
              sub?.startsWith(searchTerm);
          }).map((pro) => (

        <div className="itemPro">

        <div className="card" id="allItems">
        <div className="iconPoint">
            <i className="bi bi-three-dots-vertical"></i>
            </div>
            <Link className="txN" to={`/magasins/${id}/articles/${pro.IdArticle}`}>
            <div className="contentMagasinP">
                <div className="Itemimg">
                <img src={ProductImage} alt="" /><br />
                <p>{pro.PrixVenteArticleTTC} MAD<span className="pu"> / p.u</span></p>
                </div>
                <div className="infoPM">

                <p>{pro.Designation}</p><br />
                <span>+1000 ventes </span>    
                </div>
            </div>
            <div className="btnVP">
            <Link to=""><a href="">Plus de détails <i className="bi bi-arrow-right-short"></i></a></Link>
            </div>
        </Link>
        </div>

        </div>
     ))
     ) : (
      <div className="no-produit">
        <i className="bi bi-emoji-neutral"></i><br />
        <p>Malheureusement, on n‘a pas ce produit pour l’instant.</p><br />
        <Link to={"https://api.whatsapp.com/send?phone=212661718081"} target="_blank" className="botton-remplir"><button><i className="bi bi-whatsapp"></i>Contactez-nous</button></Link>
      </div>  
    )
    ) : (
     <div className="no-produit"><i className="bi bi-info-lg"></i> Accune product</div>)
   }
        
        
    </div>
    </>
}