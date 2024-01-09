import {Swiper , SwiperSlide} from"swiper/react"
import"swiper/css"
import"swiper/css/free-mode"
import "bootstrap/dist/css/bootstrap.min.css"
import "./Homevisiteur.css"
import { Link } from "react-router-dom"
import imgProduit from "../../Admin/IMG/cassette-8-vitesses-12x32 1.png"
import logoBrand from "../../Admin/IMG/Logo_Decathlon_RVB 1.png"

export  default function HomeVisiteur(){
    return <>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="titleApp">MERCHSENTRY<br />
        <svg width="149" height="5" viewBox="0 0 149 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.91077 0.821324C0.919613 0.821324 0.116124 1.62481 0.116124 2.61597C0.116124 3.60712 0.919613 4.41061 1.91077 4.41061V0.821324ZM146.679 4.41061H148.473V0.821324H146.679V4.41061ZM1.91077 4.41061H146.679V0.821324H1.91077V4.41061Z" fill="#D4B996"/>
</svg> 
</div>

        <div className="container row height filterInVisiteur">
            <div className="col-md-6">
                <div className="form ">
                <i className="fa fa-search" />
                <input type="text" className="form-control form-input" placeholder="Recherch un produit , ref .." />
                <span className="left-pan"><i className="bi bi-sliders"></i></span>
                </div>
            </div>
        </div>
            <div className="categorie">
                <form action="">
                    <input type="checkbox" /> Pièces automobiles <br />
                    <input type="checkbox" /> Matériel de soudage <br />
                    <input type="checkbox" /> Maintenance et réparation <br />
                    <input type="checkbox" /> Outils industriels <br />
                    <input type="checkbox" /> Equipements <br />
                    <input type="checkbox" /> Lubrifiants <br />
                    <input type="checkbox" /> Huiles

                </form>
     
        </div>
            <div className="magasins"></div>
    </>
}