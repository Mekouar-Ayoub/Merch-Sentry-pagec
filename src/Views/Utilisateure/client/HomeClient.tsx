import { Link } from "react-router-dom";
import SidBarClient from "./SideBarClient";
import "./homeclient.css"
import catProduit from "../../Admin/IMG/1.png"
import logovisa from "./logo visa.png"
import logosimvisa from "./logo plusVisa.png"


import catProduit1 from "../../Admin/IMG/11.png"
import catProduit2 from "../../Admin/IMG/111.png"
import ImageProduit1 from "../../Admin/IMG/e2.png"
import ImageProduit2 from "../../Admin/IMG/e1.png"
import ImageProduit3 from "../../Admin/IMG/3.png"
import ImageProduit4 from "../../Admin/IMG/e3.png"
import {Swiper , SwiperSlide} from"swiper/react"
import { useContext, useEffect, useState } from "react";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import { MagasinContext } from "../../../Context/MagasinContext";
export interface ProductType{

  product : ArticleInfo[],
  messageErros:string,
}

export default function HomeClient(){
  const magasinContext = useContext(MagasinContext);
  const MagasinId = localStorage.getItem('ClientId');
  const MagasinName = localStorage.getItem('ClientName');
    const idClient = MagasinId || magasinContext.id?.id;
    const NameClient =  MagasinName || magasinContext.id?.NomMagasin;
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
return<>
    <SidBarClient/>
    <div className="container">
        <h1 className="title-i-client">MERCHSENRTY</h1>
<h4>Bienvenue, profitez de votre solde pour achetez tous ce qui vous avez besoin!</h4>
    <div className="row">
    <div className="col-9 col-70">
        <div className=" mt-5">
        <div className="form forme ">
          <i className="fa fa-search" />
          <input type="text" onChange={handelSearche} className="form-control form-input" placeholder="Recherchez un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
        </div>
      </div>
      <div className="equipement">
        <div className="bar-title-client">
            <h4>Equipements</h4>
            <div className="pod">

            <Link className="vp-client" to="">Voir plus</Link>
            </div>

        </div>
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
          slidesPerView:3,
          spaceBetween:10,
        }
      }}
      >
                        {product.length > 0 ? 
  product.filter((pro) => {
    return search.toLowerCase() === "" || 
    pro.Designation.toLowerCase().includes(search.toLowerCase());
  }).length > 0 ? (
    product.filter((pro) => {
      return search.toLowerCase() === "" || 
      pro.Designation.toLowerCase().includes(search.toLowerCase());
    }).map((pro) => (
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit3} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">{pro.Designation}</p>
            </div>
            <p className="price">{pro.PrixVenteArticleTTC}MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        ))
        ) : (
         <div className="no-produit">
           <i className="bi bi-emoji-neutral"></i><br />
           <p>Malheureusement, on n‘a pas ce produit pour l’instant.</p><br />
         </div>
         )
        :
        <div className="no-produit"><i className="bi bi-info-lg"></i>Accune product</div>
       }
        </Swiper>

        <div className="equipement">
        <div className="bar-title-client">
            <h4>Equipements</h4>
            <div className="pod">

            <Link className="vp-client" to="">Voir plus</Link>
            </div>

        </div>
        </div>
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
          slidesPerView:3,
          spaceBetween:10,
        }
      }}
      >
                                {product.length>0? product.map(pro=>(

        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">{pro.Designation}</p>
            </div>
            <p className="price">{pro.PrixVenteArticleTTC} MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
)):""
}
        </Swiper>
      </div>
      
        </div>

        <div className="col-3 col-30">
        <div className="card-visa">
            <img className="visa" src={logovisa} alt="" />
            <div className="sim-visa">
                <img className="sim" src={logosimvisa} alt="" />
            </div>
            <div className="num-card">
                <h5><span>4000</span>   <span>1234</span> <span>5678</span>  <span>9012</span></h5>
            </div>
            <div className="d-card">
                <div className="df">
                    <h5>01/30</h5>
                </div>
                <div className="code-card">
                    <h5>123</h5>
                    </div>

            </div>
            <h5 className="card-name">{NameClient}</h5>
        </div>
        <div className="progresse">
          <div className="progress">
          </div>
          <div className="solde">
            <h6>solde:</h6>
            <span>MAD 8 000/ MAD 10 000</span>

          </div>
        </div>
        <div className="card-client">
          <p>Mon Panier (1)</p>
          <div className="card-content">

            <img src={ImageProduit1} alt="" />
            <h4>Chain Pro</h4>
            <Link to="" className="button">Supprimer ce produit</Link>
          </div>
        </div>
        </div>




    </div>
    </div>
    </>
}