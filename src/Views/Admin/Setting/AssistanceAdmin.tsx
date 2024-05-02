import Sidebare from "../Sidbare/Sidebare";
import "./assistance.css"
import Logo from "../IMG/Logo.png"
export default function AssistanceAdmin(){
    const handleGoBack = () => {
        window.history.back();
    };
return<>
    <Sidebare/>
    <div className="container mt-3">
    <i onClick={handleGoBack} className="bi bi-arrow-left-short arrow"></i>

            <div className="bar-up-assistance">
                <h3>Antsnetworking@gmail.com</h3>
                <span>en ligne</span>
            </div>
        <div className="card-assistance">
            <p>+212 669-412265</p>
            <h5>Bienvenue ! Comment pouvons-nous vous aider ?</h5>
            <div className="reponde-question">
                <button >J'ai une question</button><br />
                <button >Parlez à mon support</button>
            </div><br />
            <div className="publisher bt-1">
                <img className="avatar avatar-xs" src={Logo} alt="..." />
                <input className="publisher-input" type="text" placeholder="Entrer votre message..."/>
                <span className="publisher-btn file-group">
                  <i className="fa fa-paperclip file-browser"></i>
                </span>
                <a className="publisher-btn" data-abc="true"><i className="bi bi-send"></i></a>
                <a className="publisher-btn text-info" data-abc="true"><i className="bi bi-mic-fill"></i></a>
              </div>
        </div>
    </div>
</>
}