import axios, { AxiosError } from "axios";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AjouterProduit from "../../Views/Admin/categories/AjouterProduit";

export default function AddArticleService(){
    const navigate = useNavigate();
    const [Designation, setDesignation] = useState<string>("");
    const [PrixVenteArticleTTC, setPrixVenteArticleTTC] = useState<string>("");
    const [Description, setDescription] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [stock, setstock] = useState<string>("");
    const [RefArticle, setRefArticle] = useState<string>("");
    const [Unite, setUnite] = useState<string>("");
    const [messageError, setMessageError] = useState<string>("");




  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Designation", Designation);
    formData.append("PrixVenteArticleTTC", PrixVenteArticleTTC);
    formData.append("Description", Description);
    formData.append("Unite", Unite);
    formData.append("stock", stock);

    formData.append("RefArticle", RefArticle);

    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post(`${process.env.REACT_APP_PHP_APP_URL}/articles`, formData)
      .then(({data})=>{
        navigate("/message")
          const timeoutId = setTimeout(() => {
            navigate("/");
          }, 2000);
      });
    } catch (error: AxiosError | any) {
        setMessageError('Veuillez saisir toutes les informations')
        const timeoutId = setTimeout(() => {
        setMessageError('')
        }, 3000);

      } 
      
    }
  return <>
  <AjouterProduit
      setDesignation={setDesignation}
      Designation={Designation}
      setDescription={setDescription}
      Description={Description}
      setPrixVenteArticleTTC={setPrixVenteArticleTTC}
      PrixVenteArticleTTC={PrixVenteArticleTTC}
      setImage={setImage}
      image={image}
      setstock={setstock}
      stock={stock}
      setRefARticle={setRefArticle}
      RefArticle={RefArticle}
      setUnite={setUnite}
      Unite={Unite}
      handleSubmit={handleSubmit}
      handleImage={handleImage}
      messageError={messageError} setprix_ht_2_magasin={function (value: SetStateAction<string>): void {
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
      } }
  />
  </>
}