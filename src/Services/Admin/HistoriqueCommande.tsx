import axios from "axios";

export default function HistoriqueCommande(){

    const urlShowProduct = `${process.env.REACT_APP_PHP_APP_URL}/admin/historique`;
    
    const getCommande=()=>{
        return (axios.get(urlShowProduct));
    }
    return {
        getCommande
    }
}