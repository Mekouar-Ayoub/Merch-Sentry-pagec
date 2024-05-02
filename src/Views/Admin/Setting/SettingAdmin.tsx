import { Link } from "react-router-dom";
import Sidebare from "../Sidbare/Sidebare";
import "./setting.css"
export default function SettingAdmin(){
    const handleGoBack = () => {
        window.history.back();
    };
    return<>
    <Sidebare/>
    <div className="container mt-5">

    <h3 className="text-parametres"><i onClick={handleGoBack} className="bi bi-arrow-left-short arrow"></i> Paramétres</h3>
        <div className="settings">
        <div className="reglage">
        <h6 className="text-compte">Compte</h6>
        <p><i className="icon-mailpass bi bi-envelope"></i> Chager l'adresse mail <i className="bi bi-caret-right"></i> </p>
        <p><i className="icon-mailpass bi bi-key-fill"></i> Chager le mode passe <i className="bi bi-caret-right"></i> </p>
        </div>
        <div className="reglage">
        <h6 className="text-compte">Notification</h6>
        <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
                  <label className="form-check-label text-check" htmlFor="flexSwitchCheckChecked">Ne pas recevoir des notifications sonores</label>
                </div>
        <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"  />
                  <label className="form-check-label text-check" htmlFor="flexSwitchCheckChecked">Ne pas afficher des aperçus de notifications</label>
                </div>
        </div>
        <div className="reglage">
        <h6 className="text-compte">Information</h6>
        <p className="text-aide">Besoin d’aide ? </p>
        <p className="text-aide">Voir les politiques de confidentialité et les conditions d'utilisation </p>
        </div>
        </div>

    </div>
    </>
}