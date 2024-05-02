import Sidebare from "../Sidbare/Sidebare";
import { Link } from "react-router-dom";
import E1 from "../IMG/3.png"
import E2 from "../IMG/e1.png"
import E3 from "../IMG/e2.png"
import E4 from "../IMG/e3.png"
import Sponsor1 from "../IMG/s3.png"
import {Swiper , SwiperSlide} from"swiper/react"
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import { useEffect, useState } from "react";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
export interface ProductType{

  product : ArticleInfo[],
  messageErros:string,
}
export default function EditeMagasin(){
  
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

    return<>
    <Sidebare/>
    <div className="container mt-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to="/magasin"><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
      <div className="marque">
    <h4> My little garage</h4>
    <img src={Sponsor1} alt="" />
</div>
    </div>
    <div className="inputForm">
    <div className="row mb-3">
  <div className="col">
        <span>Nom complet de proprietaire</span>
    <input type="text" className="form-control" id="nom" aria-label="First name" />
  </div>
  
  <div className="col-7" id="inputTele">
    <div className="inputTele">

  <span>Numéro de télephone</span>
    <input type="text" className="form-control" id="tele"  />
    </div>

  </div>
</div>
<div className="col-12">
<span>Localisation</span>
<input type="text" className="form-control" id="inputAddress" defaultValue={"Casablanca"} />

</div>

    </div>
    </div>
    <div className="text-center mt-3">
  <button className="btnChangeInfo mx-auto">Change les infos </button>
</div>
<div className="container">
<div className="container barcategori">
<h5>Equipements</h5>
<a href="">Voir plus <i className="bi bi-arrow-right-short" /></a>

</div>
<div className="categorieSlide">

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

        <div className="box">
          <div className="slidImage">
            <img src={E1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
            <div className="type">
              <p>{pro.Designation}</p>
            </div>
            <p className="price">{pro.PrixVenteArticleTTC} MAD <span className="pu">/ P.U</span> </p>
          </div>
        </div>
        </SwiperSlide>
                )):""
              }
        </Swiper>
</div>
</div>


    </>
}