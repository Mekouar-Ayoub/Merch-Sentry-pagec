import axios , {AxiosError} from "axios";
import { useParams } from "react-router-dom";
import { SetStateAction, useEffect, useState } from "react";
import AfficheProduitVisiteur from "../../Views/Utilisateure/visiteur/AfficheProduitVisiteur";

export default function AfficheArticleByIdVisiteure(){
  const [Designation,setDesignation] = useState<string>("");
  const [IdArticle,setIdArticle] = useState<number>(0);
  const [PrixVenteArticleTTC,setPrixVenteArticleTTC] = useState<string>("");
  const [RefArticle,setRefArticle] = useState<string>("");
  const [image,setimage] = useState<any>("");
  const [Description,setDescription] = useState<string>("");
  const [stock,setstock] = useState<string>("");
  const [LibelleSubstitut,setLibelle] = useState<string>("")
  const [QantityMagasin,setQantityMagasin] = useState<string>("")

  
    const {id}= useParams();    
    useEffect(()=>{
        fetchProduct();
    },[])
    const fetchProduct=async()=>{
        try {
          await axios.get(process.env.REACT_APP_PHP_APP_URL + '/articles/' + id)
          .then(({data})=>{
            setDescription(data.article.Description);
            setDesignation(data.article.Designation);
            setPrixVenteArticleTTC(data.article.PrixVenteArticleTTC);
            setLibelle(data.LibelleSubstitut);
            setRefArticle(data.article.RefArticle);
            setstock(data.article.stock)
            setQantityMagasin(data.article.quantity_Zenpart);


            

        })} catch (error: AxiosError | any) {
          if (error.response?.status === 442) {
          console.log("good data");

    
          } else {
            console.log("error");
          }
        }
          
      }
    return <>
        <AfficheProduitVisiteur
        IdArticle={IdArticle}
        Designation={Designation}
        PrixVenteArticleTTC={PrixVenteArticleTTC}
        LibelleSubstitut={LibelleSubstitut}
        RefArticle={RefArticle}
        image={image}
        Description={Description}
        stock={stock}
        QantityMagasin={QantityMagasin}
        Unite={""} setDesignation={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setPrixVenteArticleTTC={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setDescription={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setImage={function (value: SetStateAction<File | null>): void {
          throw new Error("Function not implemented.");
        } } setstock={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setRefARticle={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setUnite={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setprix_ht_2_magasin={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setprix_ht_3_magasin={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setprix_ht_1_magasin={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setquantité={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setNomClient={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setAdresse={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setTotalCommandeHT={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setTotalRemise={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } }        />
    </>
}