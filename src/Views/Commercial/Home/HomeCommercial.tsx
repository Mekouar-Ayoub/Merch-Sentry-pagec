import SideBareCommercial from "../SideBareCommercial/SideBareCommercial";
import CAT1 from "../../Admin/IMG/1.png"
import {Swiper , SwiperSlide} from"swiper/react"
import "./HomeCommercial.css"
import PRODUIT1 from "../../Admin/IMG/3.png"
import PRODUIT2 from "../../Admin/IMG/e1.png"
import PRODUIT3 from "../../Admin/IMG/e2.png"
import PRODUIT4 from "../../Admin/IMG/e3.png"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
export interface ProductType{

  product : ArticleInfo[],
  messageErros:string,
}
export default function Home(){
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
      AfficheProductsService().getProduct()
    .then((res)=>setState({...state  , product:res.data})
        )
        .catch(msg=>setState({...state  , product:msg.messageErros}))
},[]);
const {product , messageErros} = state
    return <>
    <SideBareCommercial/>
    <div className="container">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div className="categ">
    <h5  className="mt-5"><b id="h5Hc">Bienvenue ,</b> choisis les produits que vous êtes le plus l'aise de vendre !</h5>
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" onChange={handelSearche}  className="form-control form-input" placeholder="Recherch un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid" id="ProductSlide">
    <h5 className="container">Equipements</h5>
    <a className="right-align" id="vp" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
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
        <div className="box">
          <div className="slidImage">
            <img src={PRODUIT1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailComercial">

            <div className="type">

              <p>{pro.Designation}</p>
            </div>
            <p className="price">{pro.PrixVenteArticleTTC} MAD <span>/P.U</span>  </p>
          </div>
        </div>
        </SwiperSlide>
                ))
                ) : (
            <div className="no-produit">
              <i className="bi bi-emoji-neutral"></i><br />
              <p>Malheureusement, on n‘a pas ce produit pour l’instant.</p><br />
            </div>)
  ) : (
          <div className="no-produit"><i className="bi bi-info-lg"></i>Accune product</div>
          )}
          </Swiper>

  </div>
  <div className="mt-3 container-fluid" id="ProductSlide">
    <p className="pMagazin container mt-3">Lubrifiants</p>
    <a className="right-align" id="vp" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
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
          <div className="slideImgSponsorec">
          <img src={CAT1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsorec">
          <img src={CAT1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsorec">
          <img src={CAT1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsorec">
          <img src={CAT1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsorec">
          <img src={CAT1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsorec">
          <img src={CAT1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsorec">
          <img src={CAT1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>


</div>
</div>
    </div>
    </>
}