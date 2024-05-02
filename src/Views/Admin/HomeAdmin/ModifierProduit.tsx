import { Link } from "react-router-dom"
import Sidebare from "../Sidbare/Sidebare"
import "../categories/ajouterProduit.css"
import { ArticleInfo } from "../../../Modeles/ArticleModel"

const ModifierProduit:React.FC<ArticleInfo> = ({
          setDesignation,
          setRefARticle,
          setImage,
          setDescription,
          setPrixVenteArticleTTC,
          setstock,
          handleSubmitUpdate,
          Designation,
          PrixVenteArticleTTC,
          Description,
          image,
          IdArticle,
          stock,
          RefArticle,
    }) => {
      const handleGoBack = () => {
        window.history.back();
    };
      return (
      <>
      <Sidebare/>
      <div className="container mt-5">
  <form action="" onSubmit={handleSubmitUpdate}>
      <div className="barRetour">
        <span className="iconRetour">
          <Link to={``} onClick={handleGoBack}><i className="bi bi-arrow-left-short"></i></Link>
        </span>
    </div>
  <div className="marque">
  
  <h4 className="mb-3">Modifer votre produit maintenant</h4>
  </div>
  <div className="row" style={{marginTop:"-80px"}}>
    <div className="col inputs">
      <div className="col-6">
          <span>Nom de produit</span>
      <input type="text" onChange={(e)=>setDesignation(e.target.value)} className="form-control mb-3" defaultValue={Designation} id="nom" />
    </div>
    <div className="col-9 form-floating">
    <span className="spandesc">Description</span>
  
    <textarea onChange={(e)=>setDescription(e.target.value)}  className="form-control" value={Description} id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
    <span className="nwrite">0/1000</span>
  
  </div>
  
    <div className="col-6">
          <span>Categorie</span>
      <input type="text " className="form-control mb-3" placeholder="Exemple@gmail.com" id="nom" />
    </div>
    <div className="row mt-3" >
    <div className="col">
    <span className="">Qunatité </span>
  
      <input defaultValue={stock} onChange={(e)=>setstock(e.target.value)}  type="text" className="form-control"  />
    </div>
  
    <div className="col">
    <span className="">Réference </span>
      <input defaultValue={RefArticle} type="text" className="form-control" />
    </div>
  </div>
      </div>
      <div className="col">
          <div className="textUp text-center ">
          <span className="spanPP">Photo de produit </span>
          </div><br />
          
          
          <div className="photoC">
  
      <input  type="file"  id="ImportPhotos" />
      <label className="photoIploade1" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    
  
      <input type="file" name="" id="ImportPhotos" />
      <label className="photoIploade1" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    
          </div>
    <input type="file" name="" id="ImportPhoto" />
      <label className="photoIploadeF" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit <br />
      jpg , png , jpeg </label>
     <div id="wiconbtn" className="row mt-3">
    <div className="col">
    <span className="">Prix </span>
  
      <input onChange={(e)=>setPrixVenteArticleTTC(e.target.value)} defaultValue={PrixVenteArticleTTC} name="PrixVenteArticleTTC" />
    </div>
  
    <div className="col">
    <span className="">Unité </span>
      <input name="Unite"  type="Number" className="form-control"  />
    </div>
      <br />
      <div className="parent-button">
      <button className="btn-ajouter-produit" type="submit">Modifier</button>
        </div>
  </div>
  
      </div>
      </div>
      </form>
      </div>

      </>

       )
  }
  export default ModifierProduit;