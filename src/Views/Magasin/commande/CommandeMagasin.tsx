import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./commande.css"
import { ArticleInfo } from "../../../Modeles/ArticleModel";

const CommandeMagasin:React.FC<ArticleInfo> = ({
  NomClient,
  setNomClient,
  Adresse,
  setAdresse,
  TotalCommandeHT,
  setTotalCommandeHT,
  TotalRemise,
  setTotalRemise,
  handleSubmit,

  }) => {
    const handleGoBack = () => {
      window.history.back();
  };    return <>
    <SideBareMagasin/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <div className="container mt-5">
    <form action="" onSubmit={handleSubmit}>
        <h3 className="title-commande">Bienvenue sur votre espace</h3>
        <div className="button-up mb-5">
            <Link className="commandes" to={""}>Commande</Link>
            <Link className="historique" to={""}>Historique</Link>
        </div>
        <h6 className="information-client-commande">Information client</h6>
        <div className="row mb-3">
  <div className="col">
    <span>Nom Client</span>
    <input onChange={(e)=>{setNomClient(e.target.value)}} type="text" className="form-control" aria-label="First name"/>
  </div>
  <div className="col">
  <span>Sous Client</span>
    <input type="text" className="form-control" aria-label="Last name"/>
  </div>
</div>
<div className="mb-3">
<span>Adresse</span>
<input onChange={(e)=>{setAdresse(e.target.value)}} type="text" className="form-control" aria-label="Last name"/>
</div>
<h6 className="r-article-commande">Recherche Article</h6>
<div className="row mb-3">
  <div className="col">
    <span>Ref Article : </span>
    <input type="text" className="form-control" aria-label="First name"/>
  </div>
  <div className="col">
  <span>Quantité</span>
    <input type="number" className="form-control" aria-label="Last name"/>
  </div>
</div>
  <Link className="recherche-article-commande" to={""}>Recherche</Link>
<h6 className="list-article-commande">Liste des Articles</h6>
<table className="table">
  <thead className="table-dark">
  <tr>
      <th scope="col">Ref.Article</th>
      <th scope="col">Désgnation</th>
      <th scope="col">Prix HT</th>
      <th scope="col">Prix Net HT</th>
      <th scope="col">QTé</th>
      <th scope="col">Montant Net HT</th>
      <th scope="col">Status</th>
      <th scope="col">Fiche.Article</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>214QS056</td>
      <td>Test</td>
      <td>1200</td>
      <td>800</td>
      <td>5</td>
      <td>201.4</td>
      <td>En Cours</td>
      <td>View details</td>
      <td><i className="bi bi-pencil-fill"></i></td>
      <td><i className="bi bi-trash-fill"></i></td>

    </tr>
  </tbody>
</table>
<div className="row mb-3">
<div className="col">
  <span>Total Brut HT</span>
    <input onChange={(e)=>{setTotalCommandeHT(e.target.value)}} type="number" className="form-control" aria-label="Last name"/>
  </div>
  <div className="col">
  <span>Total Remise</span>
    <input onChange={(e)=>{setTotalRemise(e.target.value)}} type="number" className="form-control" aria-label="Last name"/>
  </div>
  <div className="col">
  <span>Total Net HT</span>
    <input type="number" className="form-control" aria-label="Last name"/>
  </div>
  <div className="col">
  <span>Montant Total</span>
    <input type="number" className="form-control" aria-label="Last name"/>
  </div>
</div>
<h6 className="Information-article-commande">Information supplémentaires</h6>
<div className="mb-3">
<span>Remarque:</span>
<input type="text" className="form-control" aria-label="Last name"/>
</div>
<button type="submit">Valider la commande</button>
</form>

    </div>
    </>
}
export default CommandeMagasin;