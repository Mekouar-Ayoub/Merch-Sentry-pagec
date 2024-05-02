import {Swiper , SwiperSlide} from"swiper/react"
import"swiper/css"
import"swiper/css/free-mode"
// import "bootstrap/dist/css/bootstrap.min.css"
import "./Homevisiteur.css"
import brand1 from "../../Admin/IMG/Logo_Decathlon_RVB 1.png"
import brand2 from "../../Admin/IMG/Group.png"
import brand3 from "../../Admin/IMG/logo 1.png"
import brand4 from "../../Admin/IMG/s1.png"
import panier from "../../Admin/IMG/cart.fill.png"


import { Link } from "react-router-dom"
import imgProduit from "../../Admin/IMG/cassette-8-vitesses-12x32 1.png"
import imgProduit3 from "../../Admin/IMG/4.png"

import imgProduit2 from "../../Admin/IMG/x1-bike_10w50_packshot_1L_front_1000px-768x768 1.png"

import logoBrand from "../../Admin/IMG/Logo_Decathlon_RVB 1.png"
import { useEffect, useState } from "react"
import { ArticleInfo } from "../../../Modeles/ArticleModel"
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService"

export interface ProductType{

    product : ArticleInfo[],
    messageErros:string,
  }
  export default function HomeVisiteur(){
  
    const [state , setState] = useState<ProductType>({
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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="title-app">MERCHSENTRY<br />
        <svg className="underline-title" width="149" height="5" viewBox="0 0 149 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.91077 0.821324C0.919613 0.821324 0.116124 1.62481 0.116124 2.61597C0.116124 3.60712 0.919613 4.41061 1.91077 4.41061V0.821324ZM146.679 4.41061H148.473V0.821324H146.679V4.41061ZM1.91077 4.41061H146.679V0.821324H1.91077V4.41061Z" fill="#D4B996"/>
</svg> 
</div>

        <div className="container row height filter-Visiteur">
            <div className="col-md-6">
                <div className="form ">
                <i className="fa fa-search" />
                <input type="text" className="form-control form-input" placeholder="Recherch un produit , ref .." />
                <span className="left-pan"><i className="bi bi-sliders"></i></span>
                </div>
            </div>
        </div>
        <div className="content-visiteure">
            <div className="categorie">
                <form action="">
                    <input  type="checkbox" /> <span className="piece-auto">Pièces automobiles</span>  <br />
                    <input  type="checkbox" /> <span className="materiel-sou">Matériel de soudage</span>  <br />
                    <input  type="checkbox" /> <span className="maintenance-rep">Maintenance et réparation</span>  <br />
                    <input  type="checkbox" /> <span className="outils-ind">Outils industriels</span>  <br />
                    <input  type="checkbox" />  <span className="equipement">Equipements</span> <br />
                    <input  type="checkbox" /> <span className="lubrifiants">Lubrifiants</span>  <br />
                    <input  type="checkbox" />  <span className="huiles">Huiles</span>

                </form>
                <div className="prix">
                    <h5>Prix</h5>
                    <input type="range" />
                </div>
            </div>
            <div className="produit-content">
            <h3 className="box-title">Meilleures ventes</h3>

            <Swiper
      
      freeMode={true}
      grabCursor={true}
      className="container myswiper"
      breakpoints={{
        0:{
          slidesPerView:2,
          spaceBetween:10,
        },
        550:{
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
      <Link to={`/visiteurs/articles/${pro.IdArticle}`}>
      <div className="produit-visiteur">
                <div className="item-visiteur">
                    <img src={imgProduit} alt="" />
                    <div className="box-visiteur">
                        <p>À 10 km de chez vous</p>
                    </div>
                    <div className="name-produit-visiteur">
                        <p>{pro.Designation}</p>
                        <svg className="etoile-visiteur" width="63" height="14" viewBox="0 0 63 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.30599 0.668701L7.70929 4.98761H12.2505L8.57657 7.65684L9.97987 11.9758L6.30599 9.30652L2.6321 11.9758L4.0354 7.65684L0.361519 4.98761H4.90269L6.30599 0.668701Z" fill="#FAE315"/>
<path d="M18.8068 0.668701L20.2101 4.98761H24.7513L21.0774 7.65684L22.4807 11.9758L18.8068 9.30652L15.1329 11.9758L16.5362 7.65684L12.8623 4.98761H17.4035L18.8068 0.668701Z" fill="#FAE315"/>
<path d="M31.3076 0.668701L32.7109 4.98761H37.2521L33.5782 7.65684L34.9815 11.9758L31.3076 9.30652L27.6338 11.9758L29.0371 7.65684L25.3632 4.98761H29.9043L31.3076 0.668701Z" fill="#FAE315"/>
<path d="M43.8085 0.668701L45.2118 4.98761H49.753L46.0791 7.65684L47.4824 11.9758L43.8085 9.30652L40.1346 11.9758L41.5379 7.65684L37.864 4.98761H42.4052L43.8085 0.668701Z" fill="#FAE315"/>
<path d="M56.3088 0.668701L57.7121 4.98761H62.2533L58.5794 7.65684L59.9827 11.9758L56.3088 9.30652L52.6349 11.9758L54.0382 7.65684L50.3643 4.98761H54.9055L56.3088 0.668701Z" fill="#FAE315"/>
                        </svg> 
                        <h5>{pro.PrixVenteArticleTTC} MAD</h5>
                        <div className="brand">
                            <img src={logoBrand} alt="" />
                            <svg className="panier-box-visiteur" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9654 21.3204H12.2734C10.7366 21.3204 9.93303 20.3963 9.71205 18.8796L8.15513 8.25234H5.01115C4.50892 8.25234 4.06696 7.81037 4.06696 7.28805C4.06696 6.77577 4.50892 6.33381 5.01115 6.33381H8.45646C9.57142 6.33381 9.91294 6.77577 10.0536 7.64966L10.2143 8.73448H19.6462C19.606 9.04586 19.5859 9.3472 19.5859 9.65859C19.5859 13.2947 22.5089 16.2278 26.2355 16.268L26.1451 16.4488C25.7634 17.2122 25.0803 17.634 24.0458 17.634H11.4899L11.6507 18.6787C11.731 19.191 12.0223 19.5224 12.5045 19.5224H23.9654C24.4375 19.5224 24.8694 19.8941 24.8694 20.4164C24.8694 20.9488 24.4375 21.3204 23.9654 21.3204ZM13.0971 26.3628C12.1228 26.3628 11.3393 25.5793 11.3393 24.605C11.3393 23.6307 12.1228 22.8472 13.0971 22.8472C14.0714 22.8472 14.8549 23.6307 14.8549 24.605C14.8549 25.5793 14.0714 26.3628 13.0971 26.3628ZM22.3783 26.3628C21.404 26.3628 20.6105 25.5793 20.6105 24.605C20.6105 23.6307 21.404 22.8472 22.3783 22.8472C23.3527 22.8472 24.1261 23.6307 24.1261 24.605C24.1261 25.5793 23.3527 26.3628 22.3783 26.3628Z" fill="#1C1C1E"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.1953 14.8416C29.0078 14.8416 31.3683 12.4912 31.3683 9.65859C31.3683 6.826 29.0379 4.4856 26.1953 4.4856C23.3627 4.4856 21.0223 6.826 21.0223 9.65859C21.0223 12.5012 23.3627 14.8416 26.1953 14.8416ZM23.6038 8.96551C23.192 8.96551 22.9107 9.24676 22.9107 9.65859C22.9107 10.0805 23.192 10.3517 23.6038 10.3517H25.5022V12.2601C25.5022 12.672 25.7734 12.9432 26.1953 12.9432C26.6172 12.9432 26.8884 12.672 26.8884 12.2601V10.3517H28.7868C29.1987 10.3517 29.4799 10.0805 29.4799 9.65859C29.4799 9.24676 29.1987 8.96551 28.7868 8.96551H26.8884V7.07711C26.8884 6.66528 26.6172 6.38403 26.1953 6.38403C25.7734 6.38403 25.5022 6.66528 25.5022 7.07711V8.96551H23.6038Z" fill="#007ACC"/>
                            </svg> 
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </SwiperSlide>
         )):""
        }
        
      </Swiper>
            
        </div>
        </div>

            <div className="magasins">
                <h3>Fait confiance par <span> +100 marques</span></h3>
                <div className="box-magasine">
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />

                </div>
            </div>
            <div className="panier-part">
                <img src={panier} alt="" /><span>1</span>
            </div>
    </>
}