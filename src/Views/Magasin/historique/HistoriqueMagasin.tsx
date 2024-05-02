import { Link } from "react-router-dom";
import "./historique.css"
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import { useContext, useEffect, useState } from "react";
import { MagasinContext } from "../../../Context/MagasinContext";
import { Commande } from "../../../Modeles/Commande";
import HistoriqueMagasinService from "../../../Services/Magasin/HistoriqueMagasinService";
export interface commandeType{

  product : Commande[],
  messageErros:string,
}
export default function HistoriqueMagasin(){
  const magasinContext = useContext(MagasinContext);
  const MagasinId = localStorage.getItem('MagasinId');
    const id = MagasinId || magasinContext.id?.id;
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
        HistoriqueMagasinService().getCommande()
          .then((res)=>setState({...state  , product:res.data})
  
          )
          .catch(msg=>setState({...state  , product:msg.messageErros}))
  },[]);
  const {product , messageErros} = state
    return<>
    <SideBareMagasin/>
    <div className="container mt-5">

    <h4>Historique des commandes</h4>
    <div className="filtreElement mb-5">
    <Link to="" className="btnFilterS"><a>Cette semaine</a></Link>
    <Link to="" className="btnFilterM"><a >Ce mois </a></Link> 
    </div>
    <div className="tableInfo">
  <table className="table  table-bordered ">
    <thead>
      <tr>
        <th scope="col" className="ncom">N de commande</th>
        <th scope="col">Date</th>
        <th scope="col">Montant</th>
        <th scope="col">details</th>
        <th scope="col">Statut</th>


      </tr>
    </thead>
    <tbody>
      {product.length>0?product.map(pro=>(
      <tr>
        <td>
      <Link className="columnTable" to={`/magasins/${id}/historiques/id`}>
        {pro.IdCommande}
      </Link>
      </td>
        <td>{pro.DateCommande}</td>
        <td>{pro.TotalCommandeHT} MAD</td>
        <td>{pro.Statut}</td>
        <td>voir detail</td>
      </tr>
      )):<h5 className="mt-5 text-center">Pas de commande </h5>}

      
    </tbody>
  </table>
</div>


</div>

        
    </>
}