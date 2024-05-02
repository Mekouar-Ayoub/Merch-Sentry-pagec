import { Link } from "react-router-dom";
import { Utilisateure } from "../../Modeles/UtilisateureModel";
import "./connexion.css"
const Connexion:React.FC<Utilisateure> = ({
  handleSubmit,
  setCompteEmail,
  CompteEmail,
  setPassword,
  Password,
  message,
}) => {
// export default function Connexion(){
    return (<>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />	{/* My CSS */}

<div>
<title>Merchsenrty</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <div className="limiter">
    <div className="container-login100">
      <div className="wrap-login100">
        <form onSubmit={handleSubmit} className="login100-form validate-form">
          <span className="login100-form-title p-b-43">
            Connexion 
            <i className="line bi bi-dash-lg"></i>
                      </span>
                      <div className='container'>
{message==true?
        <div className="alert alert-danger" role="alert">        
    <b className='text-center'><i className="bi bi-question-circle-fill"></i> Veuillez entrer les informations correctes . </b>
        
        </div>
        :""
        
    }      <p></p>
    </div>
          <label htmlFor="" className="mb-3">Pseudo</label>
          <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input onChange={(e) => setCompteEmail(e.target.value)}  className="input100" type="text" name="CompteEmail" />
            <span className="focus-input100" />
          </div>
          <label htmlFor="" className="mb-3">Mot de passe</label>
          <div className="wrap-input100 validate-input" data-validate="Password is required">
            <input onChange={(e) => setPassword(e.target.value)}   className="input100" type="password" name="Password" />
            <span className="focus-input100" />
          </div>
          <div className="container-login100-form-btn">
            <button type="submit" className="login100-form-btn">
              Entrer
            </button>
          </div>
          <div className="text-center mt-3 p-t-46 p-b-20">
            <Link to="/visiteurs">
            <span className="txt2">
              <a href="">
                Rejoindre comme visiteur <i className="bi bi-arrow-right-circle-fill" />
              </a>
            </span>
            </Link>
          </div>
          <div className="login100-form-social flex-c-m">
            <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
              <i className="fa fa-facebook-f" aria-hidden="true" />
            </a>
            <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </div>
        </form>
        <div className="login100-more">
          <div className="merch">
            <h1 className="apptitle">MERCHSENTRY</h1> <br /><br />
          </div>
          <p className="desc">libérer l'efficacité : la ou la précision <br /> mécanique rencontre le contrôle numérique</p>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
    )
}
export default Connexion;