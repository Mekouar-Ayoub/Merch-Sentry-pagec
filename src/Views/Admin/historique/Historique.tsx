import { Link } from "react-router-dom";
import Sidebare from "../Sidbare/Sidebare";
import "./historique.css"
import { useEffect, useState } from "react";
import HistoriqueCommande from "../../../Services/Admin/HistoriqueCommande";
import { Commande } from "../../../Modeles/Commande";
export interface commandeType{

  product : Commande[],
  messageErros:string,
}
export default function Historique(){
  const [state , setState] = useState<commandeType>({
    product:[] as Commande[],
    messageErros : "accune commande",

})
const [stateMagasin , setStateMagasin] = useState<commandeType>({
  
  product:[] as Commande[],
  messageErros : "accune produit",

})
useEffect(()=>{
    setState({...state })
        HistoriqueCommande().getCommande()
        .then((res)=>setState({...state  , product:res.data})

        )
        .catch(msg=>setState({...state  , product:msg.messageErros}))
},[]);
const {product , messageErros} = state
    return<>
    <Sidebare/>
    <div className="container mt-5">

    <h4>Historique des commandes</h4>
    <div className="filtreElement">
    <Link to="" className="btnFilterS"><a>Cette semaine</a></Link>
    <Link to="" className="btnFilterM"><a >Ce mois </a></Link> 
    </div>
    <div className="tableInfo">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col" className="ncom">N de commande</th>
        <th scope="col">Date</th>
        <th scope="col">Montant</th>
        <th scope="col">details</th>
        <th scope="col">Statut</th>
        <th scope="col">Demandez de</th>


      </tr>
    </thead>
    <tbody>
    {product.length>0? product.map(pro=>(
      <tr>
        <td>{pro.IdCommande}</td>
        <td>{pro.DateCommande}</td>
        <td>{pro.TotalCommandeHT} MAD</td>
        <td><Link to={""}>Voir detail</Link></td>
        <td>{pro.Statut}</td>
        <td><a href="" className="remborser">Se remborser</a><br /><a href="" className="echanger">Echanger</a></td>
      </tr>
      )):<h5 className="mt-5 text-center">Pas de commande </h5>
    }
    </tbody>
  </table>
</div>


</div>

        
    </>
}