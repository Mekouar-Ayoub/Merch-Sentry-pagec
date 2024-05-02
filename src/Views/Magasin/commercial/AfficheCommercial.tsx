import { useState } from 'react';
import SideBareMagasin from '../SideBareMagasin/SideBareMagasin';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import "./afficheCommercial.css"
export default function AfficheCommercial() {
  const handleGoBack = () => {
    window.history.back();
};
  const [state, setstate] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ['janvier', 'fevier', 'mars', 'avril', 'mai', 'juin', 'juillet', 1998, 1999]
      }
    },
    series: [
      {
        name: "Vendu",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
        color: '#886FA3' ,
        marginLetf:'500'
      },
      {
        name: "Annulé",
        data: [15, 13, 8, 2, 5, 18, 8, 20],
        color: '#28CDAA'
      }
    ]
  })

  return (
    <>
      <SideBareMagasin />
      <div className="container">
      <div className="barRetour mt-5">
      <span className="iconRetour">
        <Link to="" onClick={handleGoBack}><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
      <div className="marque">
    <h4> Abdellah Aitcheikh </h4>
</div>
    </div>
    
    <div className="inputForm mb-5">
  <div className="row mb-3">
  <div className="col">
    <span>Numéro de téléphone</span>
    <input type="text" className="form-control" value="+212 6 21 30 25 14" aria-label="First name" />
  </div>
  <div className="col">
  <span>Date de naissance</span>
    <input type="text" className="form-control" value="12/05/1997" aria-label="Last name" />
  </div>
</div>
<div className="row">
  <div className="col">
  <span>Ville</span>
    <input type="text" className="form-control" value="Casablanca" aria-label="First name" />
  </div>
  <div className="col">
  <span>Code postal</span>
    <input type="text" className="form-control" value="200213" aria-label="Last name" />
  </div>
</div>
  </div>

          <div className="texth4">
              <p>les commandes vendues ou annulées pendant les 6 derniers mois </p>
          </div>
        <Chart
        className="chart mb-5"
          options={state.options}
          series={state.series}
          type="line"
          width="470"
        /> 
      </div>
    </>
  );
}
