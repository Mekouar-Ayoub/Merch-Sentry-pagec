import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { PDFDownloadLink, Document, Page, Text, View , StyleSheet } from '@react-pdf/renderer';
import SideBareMagasin from '../../Views/Magasin/SideBareMagasin/SideBareMagasin';
import { Link } from 'react-router-dom';
import "../../Views/Magasin/commande/commande.css"
const MyComponent = () => {
  const [loading, setLoading] = useState(false);
  const [nomClient, setNomClient] = useState('');
  const [adresse, setAdresse] = useState('');
  const [totalCommandeHT, setTotalCommandeHT] = useState<any>();
  const [totalRemise, setTotalRemise] = useState('');
  const [Message, setMessage] = useState('');
  const [Statut, setStatut] = useState('en cours..');
  const [Refs, setRef] = useState<any[]>([]);
  const [search , setSearche] = useState("");
  const [newqte , setNewqte] = useState("");
  const [data , setData] = useState({refArticle:"", quantity:"" ,PrixVenteArticleHT :0 , designation: '' , id:0})
  const [DataTable, setDataTable] = useState<any>([]);
  const [selectedDesignation, setSelectedDesignation] = useState('');
  const MagasinId = localStorage.getItem('MagasinId');  

  const handleItemClick = (refArticle:any, designation:any ,PrixVenteArticleHT:number) => {
    setData({ ...data, refArticle, designation, PrixVenteArticleHT});
    setSearche('');

  };
  const DeleteColumn = (idToDelete: number) => {
    setDataTable((prevData: any[]) => prevData.filter((item: any) => item.id !== idToDelete));
};
const changeqte = (id: number) => {
  const index = DataTable.findIndex((item: { id: number; }) => item.id === id);
  if (index !== -1) {
    const updatedItem = { ...DataTable[index], quantity: newqte };
    const updatedDataTable = [...DataTable.slice(0, index), updatedItem, ...DataTable.slice(index + 1)];
    setDataTable(updatedDataTable);
    console.log(updatedDataTable);
  }
};

const UpdateCommande = (id: number) => {
  console.log('click edite');
  const iconInput = document.querySelector<HTMLElement>(`.iconinputqtecommande[data-id="${id}"]`);
  if (iconInput) {
    iconInput.style.display = iconInput.style.display === 'none' ? 'block' : 'none';
  }
}; 
  const AddArticleInTable = () => {
    const newData = { refArticle: data.refArticle, quantity: data.quantity ,prix :data.PrixVenteArticleHT , designation:data.designation , id: DataTable.length + 1};
    setDataTable([...DataTable, newData]);
    setData(DataTable)
    // setSearche('');
  };
  function calculeTotal() {
    let total = 0;
    DataTable.forEach((ref: any) => {
      total += ref.prix ? parseFloat(ref.prix) * ref.quantity : 0;
    });
    return total;
    
  }
  const handelSearche=(e:any)=>{
    setSearche(e.target.value);
  }
  const getRef = async()=>{
    try {
      const response = await axios.get(`${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/refArticle`, );
      setRef(response.data);

      // console.log(response.data);
      
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(() => {
    
    getRef();
  }, []);
  const handleSubmit = async (e:FormEvent) => {
    const currentDate = new Date();
    e.preventDefault();
    const formData = new FormData();
    formData.append("NomClient", nomClient);
    formData.append("Adresse", adresse);
    formData.append("IdMagasin", MagasinId != null ? MagasinId.toString() : "null");
    formData.append("IdClient", MagasinId != null ? MagasinId.toString() : "null");
    formData.append("TotalCommandeHT",  calculeTotal().toString());
    formData.append("Statut",Statut);
    formData.append("DateCommande", currentDate.toISOString().slice(0, 19).replace('T', ' '));

    DataTable.forEach((item: any, index: any) => {
      for (const key in item) {
          if (item.hasOwnProperty(key)) {
              formData.append(`detail[${index}][${key}]`, item[key]);
          }
      }
  });
  // console.log(formData);
    try {
      const response = await axios.post(`${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/commande`, formData);
      setLoading(true);
      setMessage('votre commande a été effectué avec succes veuillez attendre 24h')
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };
  const styles = StyleSheet.create({
    containerTest: {
      marginLeft: 10,
      marginBottom: 10,
    },
    h1: {
      marginLeft: 75,
      color: 'rgb(50, 50, 106)',
      marginBottom:5,
      marginTop:5,
      fontSize:20,
    },
    descPagec: {
      marginTop: -0.7,
      backgroundColor: 'rgb(56, 56, 89)',
      borderRadius: 5,
      color: 'aliceblue',
      padding: 5,
      width: '40%',
      opacity: 0.8,
      fontSize:10,
      marginBottom:20,
    },
    infoMagas: {
      float: 'right',
      marginTop: -75,
      marginLeft:350,
      fontSize: 7,
    },
    infoClient: {
      float: 'right',
      border: '1px solid rgb(93, 93, 93)',
      borderRadius: 7,
      width: '35%',
      marginRight: 3,
      padding: 8,
      marginLeft: 350,
      marginTop:80,

    },
    text: {
      fontSize:11,
    },
    bdc:{
      fontSize:20,
      marginLeft:200,
    },
    total: {
      marginTop:150,
      marginLeft:10,
    },
    title: {
      marginTop:40,
      fontSize: 17,
      marginBottom: 20,
      textAlign: 'center',
    },
    table: {
      fontSize:7,
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      marginLeft:-60,
    },
    tableRow: { 
      flexDirection: 'row', 
    },
    tableRowcontent: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
      backgroundColor:'#ECEDED' ,
      margin: 'auto', 
      flexDirection: 'row' 
    },
    tableCell: { 
      marginTop:5,
      marginBottom:7,
      paddingLeft:58,
    },
    tableCellcontent: {
      marginLeft:-30,
      margin: 'auto', 
      paddingLeft:75,
    },
  });


  const PdfDocument = () => (
    <Document>
      <Page style={styles.containerTest} size="A4">
      <View>
          <Text style={styles.h1}>Pagec</Text>
        </View>
        <View>
          <Text style={styles.descPagec}>Pieces orgricales , génie civil et trvaux publics</Text>
        </View>
        <View>
          <Text style={styles.bdc}>Bon de commande</Text>
        </View>
        <View style={styles.infoMagas}>
          <Text>Siége:684 Bd de la grande hay mohammadi,casablanca,maroc</Text>
          <Text>Fax : 05 22 60 90 85</Text>
          <Text>Site  Web : www.pagec.ma</Text>
        </View>

        <View style={styles.infoClient}>
          <Text style={styles.text}>Nom client : {nomClient}</Text>
          <Text style={styles.text}>Adresse : {adresse}</Text>
        </View>
        <Text style={styles.title}>Liste des Articles</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCell}><Text>Ref.Article</Text></View>
            <View style={styles.tableCell}><Text>Désignation</Text></View>
            <View style={styles.tableCell}><Text>Prix HT</Text></View>
            <View style={styles.tableCell}><Text>Prix Net HT</Text></View>
            <View style={styles.tableCell}><Text>QTé</Text></View>
            <View style={styles.tableCell}><Text>Montant Net HT</Text></View>
            <View style={styles.tableCell}><Text>Status</Text></View>
          </View>
          {DataTable.map((ref:any, index:any) => (
            <View key={index} style={styles.tableRowcontent}>
              <View style={styles.tableCellcontent}><Text>{ref.refArticle?ref.refArticle:"null"}</Text></View>
              <View style={styles.tableCellcontent}><Text>{ref.designation?ref.designation:"null"}</Text></View>
              <View style={styles.tableCellcontent}><Text>{ref.prix?ref.prix:0}</Text></View>
              <View style={styles.tableCellcontent}><Text>{totalCommandeHT?totalCommandeHT:0}</Text></View>
              <View style={styles.tableCellcontent}><Text>{ref.quantity ? ref.quantity : 0}</Text></View>
              <View style={styles.tableCellcontent}><Text>0</Text></View>
              <View style={styles.tableCellcontent}><Text>En Cours</Text></View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
  const handleGoBack = () => {
    window.history.back();
};
  return (
    <>
    <SideBareMagasin/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
    <div className="container mt-5">
    <span className="iconRetour">
        <i onClick={handleGoBack} className="bi bi-arrow-left-short"></i>
        
      </span>
    <form action="" onSubmit={handleSubmit}>

        <h3 className="title-commande">Bienvenue sur votre espace</h3>
        <div className="button-up mb-5">
            <Link className="commandes" to={""}>Commande</Link>
            <Link className="historique" to={""}>Historique</Link>
        </div>
        {
          Message!=""?
        <div className="alert alert-success"role="alert">
          <h5>{Message}</h5>
        </div>
        :
        ""
        }
        
        <h6 className="information-client-commande">Information client</h6>
        <div className="row mb-3">
  <div className="col">
    <span>Nom Client</span>
    <input onChange={(e)=>{
      setNomClient(e.target.value)}} type="text" className="form-control" aria-label="First name"/>
  </div>
  <div className="col">
  <span>Sous Client</span>
    <input type="text" className="form-control" aria-label="Last name"/>
  </div>
</div>
<div className="mb-3">
<span>Adresse</span>
<input onChange={(e)=>{setAdresse(e.target.value)}} type="text" className="form-control" aria-label="Last name"/>
</div>
<h6 className="r-article-commande">Recherche Article</h6>
      <div className="row mb-3">
        <div className="col">
          <span>Ref Article : </span>
          <input
               onChange={(e) => {
                handelSearche(e);
                setData({ ...data, refArticle: e.target.value , designation: ""});
              }}
              value={selectedDesignation||data.refArticle }
              type="text"
            className="form-control"
            aria-label="First name"
          />
        </div>

        <div className="col">
          <span>Quantité</span>
          <input min={0} type="number" onChange={(e) => {
                setData({ ...data, quantity: e.target.value });
              }} className="form-control" aria-label="Last name" />
        </div>
      </div>
      {search !== '' && (
         <div className='resultsref'>
         {Refs.filter(ref => {
           const refArticle = ref.RefArticle.toString().toLowerCase();
           return refArticle.startsWith(search.toLowerCase());
         }).map(filteredRef => (
          <span className='resultref' key={filteredRef.id} onClick={() => handleItemClick(filteredRef.RefArticle, filteredRef.Designation , filteredRef.PrixVenteArticleHT)}>
          {filteredRef.Designation}  ---------------- {filteredRef.RefArticle} <br />
        </span>
         ))}
       </div>
      )}
  <Link className="recherche-article-commande" onClick={AddArticleInTable} to={""}>Recherche</Link>
<h6 className="list-article-commande">Liste des Articles</h6>
<table className="table">
  <thead className="table-dark">
  <tr>
      <th scope="col">Id</th>
      <th scope="col">Ref.Article</th>
      <th scope="col">Désgnation</th>
      <th scope="col">Prix HT</th>
      <th scope="col">Prix Net HT</th>
      <th scope="col">QTé</th>
      <th scope="col">Montant Net HT</th>
      <th scope="col">Status</th>
      <th scope="col">Fiche.Article</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {
    DataTable.length>0 ?
  DataTable.map((ref: any) => (
    <tr key={ref.id}>
      <td>{ref.id}</td>
      <td>{ref.refArticle?ref.refArticle:"null"}</td>
      <td>{ref.designation?ref.designation:"null"}</td>
      <td>{ref.prix?ref.prix:0}</td>
      <td>0</td>
      <td>
  <input min={0} type="number" onChange={(e)=>{setNewqte(e.target.value)}} className='inputqtecommande' defaultValue={ref.quantity ? ref.quantity : 0} />
  <i onClick={()=>{changeqte(ref.id) ; console.log(ref.quantity)}} data-id={ref.id} className="iconinputqtecommande bi bi-check-lg" style={{ display: 'none' }}></i></td>      
  <td>0</td>
      <td>En Cours</td>
      <td>View details</td>
      <td><i onClick={()=>{UpdateCommande(ref.id)}} className="icontableE bi bi-pencil-fill"></i></td>
      <td onClick={()=>{DeleteColumn(ref.id)}}><i className="icontableT bi bi-trash-fill"></i></td>
    </tr>
  ))
  :<h5 className='p-3'>Il n'y a pas de commandes </h5>
}
  </tbody>
</table>
<div className="row mb-3">
<div className="col">
  <span>Total Brut HT</span>
    <input onChange={(e)=>{setTotalCommandeHT(e.target.value)}} type="number" className="form-control" aria-label="Last name"/>
  </div>
  <div className="col">
  <span>Total Remise</span>
    <input onChange={(e)=>{setTotalRemise(e.target.value)}} type="number" className="form-control" aria-label="Last name"/>
  </div>
  <div className="col">
  <span>Total Net HT</span>
    <input type="number" className="form-control" aria-label="Last name"/>
  </div>
  <div className="col">
  <span>Montant Total</span>
    <input type="number" className="form-control" aria-label="Last name"/>
  </div>
</div>

<h6 className="Information-article-commande">Information supplémentaires</h6>
<div className="mb-3">
<span>Remarque:</span>
<input type="text" className="form-control" aria-label="Last name"/>
</div>
<button type='submit' className="valide-commande-article">Valider </button>
{loading ? (
  <p className="loading-message">Validation en cours...</p>
) : (
  <PDFDownloadLink document={<PdfDocument />} fileName="Bon_de_commande.pdf">
    {({ loading }) => (
      <a className="valide-commande-article">
        {loading ? 'Validation en cours...' : <a >Bon de commande <i className="bi bi-arrow-down"></i></a>}
      </a>
    )}
  </PDFDownloadLink>
)}

      </form>

    </div>
    <div>
      
      {/* <div className='container-test'>
        <h1>PAGEC</h1>
        <p className='desc-pagec'>Pieces orgricales , génie civil et trvaux publics</p>
        <div className="info-magas">

        <h6>Siége:684 Bd de la grande <br />hay mohammadi,casablanca,maroc</h6>
        <h6>Fax : 05 22 60 90 85</h6>
        <h6>Site  Web : www.pagec.ma</h6>
        </div>
        <h2>Bon de commande</h2>

        <div className="info-client">

        <h4>nom client : abdellah </h4>
        <h4>adrese client : casa </h4>
        </div>
        <div className="montant-client">

        <h4>montant1 client : 100 </h4>
        <h4>montant2 client : 200 </h4>
        </div>

      </div> */}
    </div>
    </>
  );
};

export default MyComponent;
function setTableData(updatedData: any) {
  throw new Error('Function not implemented.');
}

