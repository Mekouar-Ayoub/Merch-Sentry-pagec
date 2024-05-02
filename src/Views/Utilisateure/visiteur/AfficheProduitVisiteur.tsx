import "./Homevisiteur.css"
import imgProduit from "./cassette-8-vitesses-12x32 1(1).png"
import logoBrand from "../../Admin/IMG/Logo_Decathlon_RVB 1.png"
import panier from "./cart.fill.badge.plus(1).png"

import { Link } from "react-router-dom"
import { ArticleInfo } from "../../../Modeles/ArticleModel"


const AfficheProduitVisiteur:React.FC<ArticleInfo> = ({
    IdArticle,
    Designation,
    PrixVenteArticleTTC,
    Description,
    image,
    stock,
    RefArticle,
    LibelleSubstitut,
    QantityMagasin,

}) => {
console.log(Designation);
    return( <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="title-app">MERCHSENTRY<br />
        <svg className="underline-title" width="149" height="5" viewBox="0 0 149 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.91077 0.821324C0.919613 0.821324 0.116124 1.62481 0.116124 2.61597C0.116124 3.60712 0.919613 4.41061 1.91077 4.41061V0.821324ZM146.679 4.41061H148.473V0.821324H146.679V4.41061ZM1.91077 4.41061H146.679V0.821324H1.91077V4.41061Z" fill="#D4B996"/>
</svg> 
</div>
<div className="product-content">
    <div className="bar-roteur">
        <Link className="icon-roteur" to="/visiteurs"><i className="bi bi-arrow-left"></i>
</Link>
        <h3>{Designation}</h3>
    </div>
    <div className="info-products">
        <div className="image-product">

        <img src={imgProduit} alt="" />
        </div>
        <div className="info-product">
            <h3 className="price">{PrixVenteArticleTTC} MAD</h3>
            <p>Quantité</p>
            <input type="number" min={1}/>
            <p className="location-content"><svg className="icon-location" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 20.0176C14.3867 20.0176 14.9229 18.5498 14.9229 16.1768V10.6396C16.4082 10.2354 17.4893 8.87305 17.4893 7.26465C17.4893 5.33105 15.9424 3.75781 14 3.75781C12.0664 3.75781 10.5195 5.33105 10.5195 7.26465C10.5195 8.86426 11.5918 10.2266 13.0771 10.6309V16.1768C13.0771 18.541 13.6221 20.0176 14 20.0176ZM13.0156 7.45801C12.3828 7.45801 11.8203 6.9043 11.8203 6.25391C11.8203 5.6123 12.3828 5.06738 13.0156 5.06738C13.6748 5.06738 14.2109 5.6123 14.2109 6.25391C14.2109 6.9043 13.6748 7.45801 13.0156 7.45801ZM14 23.4805C19.5898 23.4805 22.9385 21.5996 22.9385 19.4375C22.9385 17.0732 19.3174 15.5439 16.4258 15.4209V16.9941C18.3945 17.082 20.9346 17.9873 20.9346 19.2617C20.9346 20.7734 18.0166 21.8193 14 21.8193C9.9834 21.8193 7.07422 20.7822 7.07422 19.2617C7.07422 17.9873 9.61426 17.082 11.5742 16.9941V15.4209C8.68262 15.5439 5.06152 17.0732 5.06152 19.4375C5.06152 21.5996 8.41016 23.4805 14 23.4805Z" fill="#B5BABC"/>
</svg>  160 rue Guillaume du Vair, 13290 Aix en Provence, cedex 4</p>
<p className="reviews">5K
<svg className="icon-etoile" width="80" height="30" viewBox="0 0 145 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2289 0.373291L18.4662 10.3366H28.9422L20.4669 16.4942L23.7042 26.4575L15.2289 20.2999L6.75361 26.4575L9.99088 16.4942L1.51559 10.3366H11.9916L15.2289 0.373291Z" fill="#FAE315"/>
<path d="M44.0667 0.373291L47.304 10.3366H57.78L49.3047 16.4942L52.542 26.4575L44.0667 20.2999L35.5914 26.4575L38.8287 16.4942L30.3534 10.3366H40.8294L44.0667 0.373291Z" fill="#FAE315"/>
<path d="M72.9047 0.373291L76.142 10.3366H86.618L78.1427 16.4942L81.38 26.4575L72.9047 20.2999L64.4294 26.4575L67.6667 16.4942L59.1914 10.3366H69.6675L72.9047 0.373291Z" fill="#FAE315"/>
<path d="M101.743 0.373291L104.98 10.3366H115.456L106.981 16.4942L110.218 26.4575L101.743 20.2999L93.2675 26.4575L96.5047 16.4942L88.0294 10.3366H98.5055L101.743 0.373291Z" fill="#FAE315"/>
<path d="M130.581 0.373291L133.818 10.3366H144.294L135.819 16.4942L139.056 26.4575L130.581 20.2999L122.106 26.4575L125.343 16.4942L116.868 10.3366H127.344L130.581 0.373291Z" fill="#FAE315"/>
</svg> </p>
            <img src={logoBrand} alt="" />
        </div>
        <div className="commande">
            <div className="panier-icon">

            <img src={panier} alt="" />
            </div>
            <a>Commandez via WhatsApp</a>
        </div>
    </div>
</div>
<div className="description-part">
    <div className="links">
    <Link to="" className="link-description">Description</Link>
    <Link to="/avis/clients" className="link-avis-client">Avis clients</Link>
    </div>
    <hr className="line" />
    <div className="description-content">
        <p>Cassette 8 vitesses 12x32 polyvalente pour tous les dénivelés et compatible avec les dérailleurs et chaînes <br />
        8 vitesses: Shimano, SRAM, MicroSHIFT, Btwin et KMC <br />
        Conçu pour les vélos équipés avec corps de cassette et chaîne de 8 vitesses.</p>
    </div>
    <div className="ref">
        <h4>REF : <span>{RefArticle}</span></h4>
    </div>
</div>
    </>
    )
}
export default AfficheProduitVisiteur;