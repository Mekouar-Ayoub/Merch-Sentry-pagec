import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Connexion from "../../Views/Register/Connexion";
import { MagasinContext } from "../../Context/MagasinContext";

export default function LoginService(){
  const [CompteEmail, setCompteEmail] = useState('');
  const [message, setMessage] = useState(false);

  const navigate = useNavigate(); 
  const magasinContext = useContext(MagasinContext);

  const [Password, setPassword] = useState('');
  // const [messageEror, setMessageErors] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_PHP_APP_URL}/connexion`; 
    try {
      const response = await axios.post(url, { CompteEmail, Password }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
        
      if (response.data.message === "magasin") {
        const IdMagasin = response.data.account.id;
        const NameMagasin = response.data.account.NomMagasin;

        navigate(`/magasins/`+IdMagasin);
        const savedId = localStorage.getItem('MagasinId');
        localStorage.setItem('MagasinId', savedId || IdMagasin);

        const savedNameMagasin = localStorage.getItem('MagasinName');
        localStorage.setItem('MagasinName', savedNameMagasin || NameMagasin);
        magasinContext.setId({
          id:savedId || IdMagasin,
        });
        magasinContext.setNameMagasin({
          nameMagasin:savedNameMagasin || NameMagasin,
        });
        // Connexion as Commercial 
      } else if (response.data.message === "commercial") {
        const IdCommercial = response.data.account.id;
        const NameCommercial = response.data.account.nom;

        navigate(`/commercials/`+IdCommercial);
        const savedId = localStorage.getItem('CommercialId');
        localStorage.setItem('CommercialId', savedId || IdCommercial);

        const savedNameCommercial = localStorage.getItem('CommercialName');
        localStorage.setItem('CommercialName', savedNameCommercial || NameCommercial);
        magasinContext.setId({
          id:savedId || IdCommercial,
        });
        magasinContext.setNameMagasin({
          nameComercial:savedNameCommercial || NameCommercial,
        });

        // Connexion as Client 
      }else if (response.data.message === "Client") {
        // console.log(response.data);
        const IdClient = response.data.account.IdClient;
        const NameClient = response.data.account.NomClient;
        navigate(`/clients/`+IdClient);
        const savedId = localStorage.getItem('ClientId');
        localStorage.setItem('ClientId', savedId || IdClient);

        const savedNameClient = localStorage.getItem('ClientName');
        localStorage.setItem('ClientName', savedNameClient || NameClient);
        magasinContext.setId({
          id:savedId || IdClient,
        });
        magasinContext.setNameMagasin({
          nameClient:savedNameClient || NameClient,
        });
      } 

      else if (response.data === "superAdmin") {
        navigate(`/home`);

      } else {
        setMessage(true);
        const timeoutId = setTimeout(() => {
          setMessage(false)
          }, 3000);

      }
    } catch (error) {
      console.error("error:", error);
    }
}
return(
<>

<Connexion 
handleSubmit={handleSubmit}
Password={Password}
setCompteEmail={setCompteEmail}
CompteEmail={CompteEmail}
setPassword={setPassword}
message={message}
/>
</>
)
}
