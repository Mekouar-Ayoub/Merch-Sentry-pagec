import { Link } from "react-router-dom";
import "../../Commercial/Produit/AfficheProduit.css"
import IMGProduit from"../../Admin/IMG/1.png"
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import { useEffect, useState } from "react";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import Sidebare from "../Sidbare/Sidebare";
export interface ProductType{

    product : ArticleInfo[],
    messageErros:string,
  }
  export default function AllProduit(){
    
    const [search , setSearche] = useState("");
    const [state , setState] = useState<ProductType>({
      product:[] as ArticleInfo[],
      messageErros : "accune produit",
  
  })

  const [stateMagasin , setStateMagasin] = useState<ProductType>({
    product:[] as ArticleInfo[],
    messageErros : "accune produit",
  
  })
  const handelSearche=(e:any)=>{
    setSearche(e.target.value);
  }
  useEffect(()=>{
      setState({...state })
          AfficheProductsService().getProduct()
          .then((res)=>setState({...state  , product:res.data})
  
          )
          .catch(msg=>setState({...state  , product:msg.messageErros}))
  },[]);    
const {product , messageErros} = state

    return <>
        <Sidebare/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="allproductCommercial">
            <br />
            <div className="container mt-5">
    <div className="row height ">
      <div className="col-md-6">
        <div className="form form-categorie formallp ">
          <i className="fa fa-search" />
          <input type="text" onChange={handelSearche} className="form-control form-input" placeholder="Recherchez un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/articles/categories/add"><button className="btnAjoutee">Ajouter Produit</button></Link>
        </div>
      </div>
    </div>
  </div>
            <div className="row container mx-auto">
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
        <div className="col-lg-4 col-md-3 col-12">
                <Link className="gotoshow" to={`/articles/${pro.IdArticle}`}>
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit} alt="" />
          <p>{pro.Designation}</p>
          </div>
          <div className="bar2">
          <p>LibelleSubstitut : <span>{pro.LibelleSubstitut?pro.LibelleSubstitut:"N/A"}</span></p>
          <p>Reference : <span>{pro.RefArticle?pro.RefArticle:"N/A"}</span></p>

                        {/* <ul>
                            <li><b>. </b><span className="vent">+50</span> Ventes</li>
                            <li><b>. </b><span className="annule">10</span> Annulés</li>
                            <li><b>. </b><span className="remborse">0</span> Remboursés</li>

                        </ul> */}
                    </div>
          <div className="bar3-admin">
          <div className="price"><p>{pro.PrixVenteArticleTTC} MAD <span>/ P.U</span></p></div>
          </div>
        </div>
                </Link>
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
         <div className="no-produit"><i className="bi bi-info-lg"></i>Accune product</div>
         )}
            </div>
            </div>
    </>
}