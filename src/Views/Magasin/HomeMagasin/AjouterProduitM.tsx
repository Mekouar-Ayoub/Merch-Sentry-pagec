import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./ajouterpm.css"
import { MagasinContext } from "../../../Context/MagasinContext";
import { useContext } from "react";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
const AjouterProduitM:React.FC<ArticleInfo> = ({
  setDesignation,
  setPrixVenteArticleTTC,
  setDescription,
  setstock,
  setRefARticle,
  handleImage,
  setprix_ht_2_magasin,
  setquantité,
  setprix_ht_3_magasin,
  setprix_ht_1_magasin,
  handleSubmit,
  setUnite,
  messageError,

  }) => {
    const handleGoBack = () => {
      window.history.back();
  };
  return <>
        <SideBareMagasin/>
        <div className="container mt-3">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to={""} onClick={handleGoBack}><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
  </div>
<div className="marque">

<h4 className="">Ajouter un nouveau produit magasin</h4>
</div>
  <form action="" onSubmit={handleSubmit}>
{messageError!="" ?
    <div className="alert alert-danger" role="alert">
  {messageError}
</div>
:""}
<div className="row " id="rowMagasin">
<div className="col inputs">
    <div className="col-6">
        <span>Nom de produit</span>
    <input type="text" onChange={(e)=>setDesignation(e.target.value)} className="form-control mb-3" id="nom" />
  </div>
  <div className="col-9 form-floating">
  <span className="spandesc">Description</span>

  <textarea onChange={(e)=>setDescription(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
  <span className="nwrite">0/1000</span>

</div>

  <div className="col-6">
        <span>Categorie</span>
    <input type="text" className="form-control mb-3" id="nom" />
  </div>
  <div className="row  mt-3" >
  <div className="col">
  <span className="" >Qunatité </span>

    <input onChange={(e)=>setquantité(e.target.value)} type="text" className="form-control" defaultValue='500' />
  </div>

  <div className="col">
  <span className="">Réference </span>
    <input onChange={(e)=>setRefARticle(e.target.value)}  type="text" className="form-control" defaultValue="52341" />
  </div>
</div>
    </div>
    <div className="col">
        <div className="textUp text-center ">
        <span className="spanPP">Photo de produit </span>
        </div><br />
        <div className="photoC">

    <input onChange={handleImage}  type="file" name="" id="ImportPhotos" />
    <label  className="photoIploade1" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    

    <input onChange={handleImage}  type="file" name="" id="ImportPhotos" />
    <label className="photoIploade1" htmlFor="ImportPhoto2" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    
        </div>
  <input onChange={handleImage}  type="file" name="" id="ImportPhoto" />
    <label className="photoIploadeF" htmlFor="ImportPhoto3" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit <br />
    jpg , png , jpeg </label>
   <div className="row rowcom mt-3">
  <div className="col">
  <span className="">Prix 1 </span>

    <input onChange={(e)=>setprix_ht_1_magasin(e.target.value)}  type="text" className="form-control" defaultValue="0" />
  </div>
  <div className="col">
  <span className="">Prix 2 </span>

    <input onChange={(e)=>setprix_ht_2_magasin(e.target.value)}  type="text" className="form-control" defaultValue="0" />
  </div>
  <div className="col">
  <span className="">Prix 3 </span>

    <input onChange={(e)=>setprix_ht_3_magasin(e.target.value)} type="text" className="form-control" defaultValue="0" />
  </div>
  <div className="col">
  <span className="">Prix Ttc </span>

    <input onChange={(e)=>setPrixVenteArticleTTC(e.target.value)}  type="text" className="form-control" defaultValue="0" />
  </div>

  <div className="col colmag">
  <Link className="ajouterOffre" to="">Ajouter un autre offres</Link>
  <span className="">Unité </span>
    <input onChange={(e)=>setUnite(e.target.value)}  type="Number" className="form-control" defaultValue={1} />
    <br /><button type="submit" className="bntcon">Confirmer</button>
  </div>
</div>

    </div>
    </div>
    </form>

    </div>
    </>
        
}
export default AjouterProduitM;