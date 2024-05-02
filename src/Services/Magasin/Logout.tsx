import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

async function LogoutMagasin() {
    const MagasinId = localStorage.getItem('MagasinId');  

    const response = await axios.get(`http://127.0.0.1:8000/api/magasins/${MagasinId}/logout`);
    if (response.data === "logout successfuly") {
      localStorage.removeItem("MagasinId");
      localStorage.removeItem("MagasinName");
      localStorage.removeItem("ClientId");
      localStorage.removeItem("ClientName");

    } else {
      console.log("Logout failed");
    }

}

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    LogoutMagasin().then(() => {
      navigate('/');
    });
  }, [navigate]); 

  return <div className="text-center"><h3>Logging out Please wait ...</h3></div>;
}

export default Logout;
