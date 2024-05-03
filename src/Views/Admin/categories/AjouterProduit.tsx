import { Link } from "react-router-dom";
import "./ajouterProduit.css"
import Sidebare from "../../Admin/Sidbare/Sidebare";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
const AjouterProduit:React.FC<ArticleInfo> = ({
  setDesignation,
  setPrixVenteArticleTTC,
  setDescription,
  setstock,
  setRefARticle,
  handleImage,
  handleSubmit,
  setUnite,
  messageError,

  }) => {
    const handleGoBack = () => {
      window.history.back();
  };
    return (<>
    <Sidebare/>
    <div className="container mt-5">
<form action="" method="post" onSubmit={handleSubmit} >
    <div className="barRetour">
      <span className="iconRetour">
        <i onClick={handleGoBack} className="bi bi-arrow-left-short"></i>
        
      </span>
  </div>
<div className="marque">

<h4 className="mb-3">Ajouter un nouveau produit</h4>
</div>
<div className="row" style={{marginTop:"-80px"}}>
{messageError!="" ?
    <div className="alert alert-danger" role="alert">
  {messageError}
</div>
:""}
  <div className="col inputs">
    <div className="col-6">
        <span>Nom de produit</span>
    <input onChange={(e) => setDesignation(e.target.value)} type="text" className="form-control mb-3" placeholder="Nike" id="nom" />
  </div>
  <div className="col-9 form-floating">
  <span className="spandesc">Description</span>

  <textarea onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
  <span className="nwrite">0/1000</span>

</div>

  <div className="col-6">
        <span>Categorie</span>
    <input type="text " className="form-control mb-3" placeholder="Exemple@gmail.com" id="nom" />
  </div>
  <div className="row mt-3" >
  <div className="col">
  <span className="">Qunatité </span>

    <input onChange={(e) => setstock(e.target.value)} type="text" className="form-control"  />
  </div>

  <div className="col">
  <span className="">Réference </span>
    <input  onChange={(e) => setRefARticle(e.target.value)} type="text" className="form-control" />
  </div>
</div>
    </div>
    <div className="col">
        <div className="textUp text-center ">
        <span className="spanPP">Photo de produit </span>
        </div><br />
        <div className="photoC">

    <input onChange={handleImage}  type="file"  id="ImportPhotos" />
    <label className="photoIploade1" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    

    <input onChange={handleImage} type="file" name="" id="ImportPhotos" />
    <label className="photoIploade1" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    
        </div>
  <input onChange={handleImage} type="file" name="" id="ImportPhoto" />
    <label className="photoIploadeF" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit <br />
    jpg , png , jpeg </label>
   <div id="wiconbtn" className="row mt-3">
  <div className="col">
  <span className="">Prix </span>

    <input name="PrixVenteArticleTTC" onChange={(e) => setPrixVenteArticleTTC(e.target.value)} type="text" className="form-control"  />
  </div>

  <div className="col">
  <span className="">Unité </span>
    <input name="Unite" onChange={(e) => setUnite(e.target.value)} type="Number" className="form-control"  />
  </div>
    <br />
    <div className="parent-button">
    <button className="btn-ajouter-produit" type="submit">Confirmer</button>
      </div>
</div>

    </div>
    </div>
    </form> 
    </div> 
    </>
     )
}
export default AjouterProduit;