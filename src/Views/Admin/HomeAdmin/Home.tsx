import Sidebare from "../Sidbare/Sidebare"
import {Swiper , SwiperSlide } from"swiper/react"
import"swiper/css"
import"swiper/css/free-mode"
import "bootstrap/dist/css/bootstrap.min.css"
import ImageProduit1 from "../IMG/1.png"
import ImageProduit2 from "../IMG/2.png"
import ImageProduit3 from "../IMG/3.png"
import ImageProduit4 from "../IMG/4.png"
import Sponsor1 from "../IMG/s1.png"
import Sponsor2 from "../IMG/s2.png"
import Sponsor3 from "../IMG/s3.png"
import Sponsor4 from "../IMG/s4.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import AfficheMagasinsService from "../../../Services/Magasin/AfficheMagasinsService"
export interface ProductType{

  product : ArticleInfo[],
  messageErros:string,
}
export default function Home(){

  const [state , setState] = useState<ProductType>({
    product:[] as ArticleInfo[],
    messageErros : "accune produit",

})
const [stateMagasin , setStateMagasin] = useState<ProductType>({
  product:[] as ArticleInfo[],
  messageErros : "accune produit",

})
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
    	<div className="home mt-5" >
  <main className="container">
    <div className="head-title">
      <div className="left">
        <h5><b>Bienvenue ! </b> vous pouvez gérer votre stock en toute simplicité</h5>
        <p className="container mt-5 mb-5">Vous avez +5,000 produits</p>
      </div>
    </div>
  </main>
  <br /> <br />

  {/* ----------------------------------- PRODUIT SLIDE ------------------------------------ */}

  <div className="container-fluid ProductSlide">
    <Link to={"/articles"}><a className="right-align" href="/articles">Voir Plus <i className="bi bi-arrow-right-short" /></a></Link>
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
        {product.length>0? product.map(pro=>(
          <SwiperSlide>
      <Link className="product-link" to={`/articles/${pro.IdArticle}`}>
        <div className="box">
          <div className="slide-image">
          <img src={ImageProduit2} alt="" />
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

  {/*----------------------------------- SPONSOR SLIDE --------------------------------------- */}
  
  <div className="mt-3 container-fluid ProductSlide">
    <p className="container pMagazin mt-3">Vous avez +20 magasins</p>
    <Link to={"/articles"}><a className="right-align" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a></Link>
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
        <SwiperSlide>
    <div className="boxSponsore">
          <div className="slideImgSponsore">
            <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor2} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor3} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor4} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>

  </div>



</div>

    </>
}