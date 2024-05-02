import Sidebare from "../Sidbare/Sidebare";
import "./message.css"

export default function MessageUpdateArticle(){
    return <>
    <Sidebare/>
    <div className="container message-success">
        <div className="message-content">
        <i className="icon-sucess bi bi-check-lg"></i>
            <h4 className="message-content">Félicitations ! Votre produit Modifier avec succès.</h4>
        </div>
    </div>
    </>
}