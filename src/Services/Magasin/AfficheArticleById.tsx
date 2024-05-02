import { SetStateAction, useContext, useEffect, useState } from "react";
import { MagasinContext } from "../../Context/MagasinContext";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import AfficheProduitMagasin from "../../Views/Magasin/HomeMagasin/AfficheProduitsMagasin";

export default function AfficheArticleById(){
    const [Designation,setDesignation] = useState<string>("");
    const [IdArticle,setIdArticle] = useState<number>(0);
    const [PrixVenteArticleTTC,setPrixVenteArticleTTC] = useState<string>("");
    const [RefArticle,setRefArticle] = useState<string>("");
    const [image,setimage] = useState<any>("");
    const [Description,setDescription] = useState<string>("");
    const [quantité,setQuantité] = useState<number>(0);
    const [LibelleSubstitut,setLibelle] = useState<string>("")
    const [prix2,setPrix2] = useState<string>("")
    const [prix3,setPrix3] = useState<string>("")
    const [prix1,setPrix1] = useState<string>("")
    const [prixTtc,setPrixTtc] = useState<string>("")


    const MagasinId = localStorage.getItem('MagasinId');  
    const {id}= useParams();    
    useEffect(()=>{
        fetchProduct();
    },[])
    const fetchProduct=async()=>{
      const url =`${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/articles/${id}` ;
        try {
          await axios.get(url)
          .then(({data})=>{
            data.map((article:any)=>{
              setLibelle(article.Libellsubstitut);
              setPrix2(article.Prix2);
              setPrix3(article.Prix3);
              setPrix1(article.Prix1)
              setPrixTtc(article.PrixTtc);
              setDesignation(article.Designation);
              setIdArticle(article.IdArticle);
              setDescription(article.Description);
              setimage(article.image);
              setPrixVenteArticleTTC(article.PrixVenteArticleTTC);
              setRefArticle(article.RefArticle);
              setQuantité(article.quantité); 
                
            })

        })} catch (error: AxiosError | any) {
          if (error.response?.status === 442) {
          console.log("good data");

    
          } else {
            console.log("error");
          }
        }
          
      }
      return<>
<AfficheProduitMagasin
          IdArticle={IdArticle}
          Designation={Designation}
          PrixVenteArticleTTC={PrixVenteArticleTTC}
          LibelleSubstitut={LibelleSubstitut}
          RefArticle={RefArticle}
          image={image}
          Description={Description}
          quantité={quantité}
          prix_ht_2_magasin={prix2}
          prix_ht_3_magasin={prix3}
          prix_ht_1_magasin={prix1}
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
          } } setQuantité={function (value: SetStateAction<string>): void {
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