import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import AjouterProduitM from "../../Views/Magasin/HomeMagasin/AjouterProduitM";

export default function AddArticle(){
    const navigate = useNavigate();
    const [Designation, setDesignation] = useState<string>("");
    const [PrixVenteArticleTTC, setPrixVenteArticleTTC] = useState<string>("");
    const [prix_ht_2_magasin, setprix_ht_2_magasin] = useState<string>("");
    const [prix_ht_3_magasin, setprix_ht_3_magasin] = useState<string>("");
    const [prix_ht_1_magasin, setprix_ht_1_magasin] = useState<string>("");
    const [quantité, setquantité] = useState<string>("");
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
    const MagasinId = localStorage.getItem('MagasinId');  
    e.preventDefault();
    const formData = new FormData();
    formData.append("Designation", Designation);
    formData.append("PrixVenteArticleTTC", PrixVenteArticleTTC);
    formData.append("prix_ht_2_magasin", prix_ht_2_magasin);
    formData.append("prix_ht_3_magasin", prix_ht_3_magasin);
    formData.append("prix_ht_1_magasin", prix_ht_1_magasin);
    formData.append("Description", Description);
    formData.append("stock", stock);
    formData.append("Unite", Unite);
    formData.append("quantité", quantité);
    formData.append("RefArticle", RefArticle);  
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.post(`${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/articles/add`, formData)
      .then(({data})=>{
        navigate("/message/Addarticle")
          const timeoutId = setTimeout(() => {
            navigate(`/magasins/${MagasinId}`);
          }, 2000);
      });
    } catch (error: AxiosError | any) {
      
        setMessageError('Veuillez saisir toutes les informations')
        const timeoutId = setTimeout(() => {
        setMessageError('')
        }, 3000);

      } 
      
    }
    return<>
    <AjouterProduitM
        setDesignation={setDesignation}
        Designation={Designation}
        setDescription={setDescription}
        Description={Description}
        setPrixVenteArticleTTC={setPrixVenteArticleTTC}
        PrixVenteArticleTTC={PrixVenteArticleTTC}
        setImage={setImage}
        image={image}
        setQuantité={setquantité}
        setstock={setstock}
        stock={stock}
        setRefARticle={setRefArticle}
        RefArticle={RefArticle}
        setUnite={setUnite}
        Unite={Unite}
        prix_ht_2_magasin={prix_ht_2_magasin}
        prix_ht_3_magasin={prix_ht_3_magasin}
        prix_ht_1_magasin={prix_ht_1_magasin}
        handleSubmit={handleSubmit}
        handleImage={handleImage}
        messageError={messageError}
        setprix_ht_2_magasin={setprix_ht_2_magasin}
        setprix_ht_3_magasin={setprix_ht_3_magasin}
        setprix_ht_1_magasin={setprix_ht_1_magasin}
        setquantité={setquantité} setNomClient={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setAdresse={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setTotalCommandeHT={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } } setTotalRemise={function (value: SetStateAction<string>): void {
          throw new Error("Function not implemented.");
        } }    />
    </>
}
