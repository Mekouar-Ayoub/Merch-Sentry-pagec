import { Navigate, useNavigate, useParams } from "react-router-dom";
import ModifierProduit from "../../Views/Admin/HomeAdmin/ModifierProduit";
import { FormEvent, SetStateAction, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export default function ModifierArticleService(){
  const navigate = useNavigate();
    const [Designation,setDesignation] = useState<string>("");
    const [IdArticle,setIdArticle] = useState<number>();
//   const [IdArticle,setIdArticle] = useState<number>(0);
  const [PrixVenteArticleTTC,setPrixVenteArticleTTC] = useState<string>("");
  const [RefArticle,setRefARticle] = useState<string>("");
  const [image,setImage] = useState<any>("");
  const [Description,setDescription] = useState<string>("");
  const [stock,setstock] = useState<string>("");
  const [messageError,setMessageError] = useState<string>("");

  const [LibelleSubstitut,setLibelle] = useState<string>("")



    const {id}= useParams();    
    useEffect(()=>{
        fetchProduct();
    },[])
    const handleSubmitUpdate=async(e: FormEvent)=>{
      e.preventDefault();
      const formData = new FormData();
    formData.append("_method", 'post');
    formData.append("Designation", Designation);
    formData.append("PrixVenteArticleTTC", PrixVenteArticleTTC);
    formData.append("Description", Description);
    formData.append("stock", stock);
    if (image) {
      formData.append("image", image);
    }
    await axios.post(`http://127.0.0.1:8000/api/articles/${id}/edit` , formData)
      .then(({data})=>{
          navigate("/message/article/edit")
          const timeoutId = setTimeout(() => {
            navigate("/home");
          }, 2000);
      })
  
        
    }
    const fetchProduct=async()=>{
        try {
          await axios.get(process.env.REACT_APP_PHP_APP_URL + '/articles/' + id)
          .then(({data})=>{
                setDesignation(data.article.Designation);
                setPrixVenteArticleTTC(data.article.PrixVenteArticleTTC);
                setstock(data.article.stock);
                setDescription(data.article.Description);
          });
        } catch (error: AxiosError | any) {
          if (error.response?.status === 442) {
          console.log("good data");

    
          } else {
            console.log("error");
          }
        }
          
      }

    return<>
    <ModifierProduit
        setPrixVenteArticleTTC={setPrixVenteArticleTTC}
        setRefARticle={setRefARticle}
        setImage={setImage}
        setDescription={setDescription}
        setstock={setstock}
        setDesignation={setDesignation}
        handleSubmitUpdate={handleSubmitUpdate}
        IdArticle={IdArticle}
        Designation={Designation}
        PrixVenteArticleTTC={PrixVenteArticleTTC}
        RefArticle={RefArticle}
        image={image}
        Description={Description}
        stock={stock} Unite={""} setNomClient={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setAdresse={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setTotalCommandeHT={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setTotalRemise={function (value: SetStateAction<string>): void {
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
        } }   />
    </>
}