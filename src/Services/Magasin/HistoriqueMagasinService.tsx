import axios from "axios";

export default function HistoriqueMagasinService(){
    const MagasinId = localStorage.getItem('MagasinId'); 
    const urlShowProduct = `${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/historique`;
    
    const getCommande=()=>{
        return (axios.get(urlShowProduct));
    }
    return {
        getCommande
    }

}