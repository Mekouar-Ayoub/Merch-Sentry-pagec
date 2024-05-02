import produit from "../../Admin/IMG/1.png"
import { Link } from "react-router-dom";
import "./afficheProduitmagasin.css"
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
const AfficheProduitMagasin:React.FC<ArticleInfo> = ({
    IdArticle,
    Designation,
    PrixVenteArticleTTC,
    Description,
    image,
    stock,
    quantité,
    RefArticle,
    LibelleSubstitut,
    prix_ht_2_magasin,
    prix_ht_3_magasin,
    prix_ht_1_magasin,

}) => {
    const handleGoBack = () => {
        window.history.back();
    };
    return (<>
    <SideBareMagasin/>
    <div className="container produitCard mt-5">
    <Link to="" onClick={handleGoBack}><i className="bi bi-arrow-left-short"></i></Link>

    <div className="barTitle paniercommercial">
        <h3>{Designation}</h3>
        <i className="bi bi-cart3 icon"><span>1</span></i>
        </div>
    <div className="cardItem mt-5">
        <img src={produit} alt="" />
    <div className="ItemsInfo">
        <h2 className="mb-5">Ttc : {PrixVenteArticleTTC} MAD</h2>
        <div className="3prix mb-5">
            <h6>prix_ht_1 : <span>{prix_ht_1_magasin}</span></h6>
            <h6>prix_ht_2 : <span>{prix_ht_2_magasin}</span></h6>
            <h6>prix_ht_3 :<span>{prix_ht_3_magasin}</span></h6>
            <h5>Substitut : <span>{LibelleSubstitut ? LibelleSubstitut :"N/A"}</span></h5>

        </div>
        <div className="quantity">
        <h6>Quantité <input className="inputQ" value={quantité} type="text" min={1}/> </h6>
            </div>
        <button className="ajouterP">Ajouter au panier</button>
    </div>

    </div>
    <div className="sectionDesc">
        <h4 className="desch4">Description</h4>
    <div className="descriptione mt-3 mb-5" >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit 
        <br />
         Rerum voluptatibus, delectus quas fugiat culpa, <br />
           nesciunt quisquam laboriosam, expedita quaerat voluptas alias quod! <br />
         Quisquam quis explicabo eveniet accusamus, magnam praesentium rem!</p>
         <h5>Réference : <span>{RefArticle}</span></h5>
    </div>
    </div>
    </div>
    </>)
}
export default AfficheProduitMagasin;