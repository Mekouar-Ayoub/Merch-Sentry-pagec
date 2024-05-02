import Sidebare from "../Sidbare/Sidebare";
import {Swiper , SwiperSlide} from"swiper/react"
import "./categories.css"
import catProduit from "../IMG/1.png"
import catProduit1 from "../IMG/11.png"
import catProduit2 from "../IMG/111.png"
import ImageProduit1 from "../IMG/e2.png"
import ImageProduit2 from "../IMG/e1.png"
import ImageProduit3 from "../IMG/3.png"
import ImageProduit4 from "../IMG/e3.png"
import { Link } from "react-router-dom";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import { useEffect, useState } from "react";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";

export interface ProductType{

  product : ArticleInfo[],
  messageErros:string,
}
export default function Categories(){
  const [search , setSearche] = useState("");
  const [state , setState] = useState<ProductType>({
    product:[] as ArticleInfo[],
    messageErros : "Il n'y a pas de produit",

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
    <div className="categ">
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form form-categorie ">
          <i className="fa fa-search" />
          <input type="text" onChange={handelSearche} className="form-control form-input" placeholder="Recherchez un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/articles/categories/add"><button className="btnAjoutee">Ajouter Produit</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid ProductSlide">
    <h5 className="container">Equipements</h5>
    <a className="BtnVoirPlus" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
    <Swiper
      
      freeMode={true}
      grabCursor={true}
      className="container myswiper"
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:10,
        },
        480:{
          slidesPerView:2,
          spaceBetween:80,
        },
        600:{
          slidesPerView:3,
          spaceBetween:80,
        },
        800:{
          slidesPerView:4,
          spaceBetween:5,
        }
      }}
      >
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
          <SwiperSlide>
      <Link className="product-link" to={`articles/${pro.IdArticle}`}>
        <div className="box">
          <div className="slide-image">
          <img src={ImageProduit1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product">
            <div className="parant-name">
            <p className="product-name">{pro.Designation}</p>
            </div>
            <div className="price"><p>{pro.PrixVenteArticleTTC} MAD <span>/P.U</span></p></div>
          </div>
        </div>
        </Link>

        </SwiperSlide>
             ))
             ) : (
             <div className="no-produit">
             <i className="bi bi-emoji-neutral"></i><br />
             <p>Malheureusement, on n‘a pas ce produit pour l’instant.</p><br />
           </div>        
           )
  ) : (
  <div className="no-produit"><i className="bi bi-info-lg"></i> Accune product</div>)
          }
       
        
      </Swiper>

  </div>
  <div className="mt-3 container-fluid ProductSlide">
    <p className="pMagazin container mt-3">Lubrifiants</p>
    <a className="BtnVoirPlus" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
    <Swiper
      
      freeMode={true}
      grabCursor={true}
      className="container mt-5 myswiper"
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:10,
        },
        480:{
          slidesPerView:2,
          spaceBetween:10,
        },
        700:{
          slidesPerView:4,
          spaceBetween:10,
        }
      }}
      >
        {product.length>0? product.map(pro=>(
        <SwiperSlide>
        <Link className="product-link" to={`articles/${pro.IdArticle}`}>
          <div className="box">
            <div className="slide-image">
            <img src={ImageProduit1} alt="" />
              <div className="overlay">
              </div>
            </div>
            <div className="Box-info-product">
              <div className="parant-name">
              <p className="product-name">{pro.Designation}</p>
              </div>
              <div className="price"><p>{pro.PrixVenteArticleTTC} MAD <span>/P.U</span></p></div>
            </div>
          </div>
          </Link>
  
          </SwiperSlide>
        )):""
      }
        </Swiper>


</div>
</div>

    </>
}