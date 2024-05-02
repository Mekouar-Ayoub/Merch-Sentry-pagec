export interface ArticleInfo {
    IdArticle?:number;
    idStock?:number;
    Designation: string;
    PrixVenteArticleTTC: string;
    Description: string;
    image: File | null;
    created_at?:number,
    stock?:string;
    RefArticle:string;
    QantityMagasin?:string;
    Unite:string,
    // panier:any
    quantité?:number;
    prix_ht_2_magasin?:string,
    prix_ht_3_magasin?:string,
    prix_ht_1_magasin?:string,
    prix_ttc?:string,
    updated_at?:number,
    LibelleSubstitut?:string,
    NomClient?:string,
    Adresse?:string,
    TotalCommandeHT?:string,
    TotalRemise?:string,	
    messageError?:string
    setDesignation:React.Dispatch<React.SetStateAction<string>>;
    setNomClient:React.Dispatch<React.SetStateAction<string>>;
    setAdresse:React.Dispatch<React.SetStateAction<string>>;
    setTotalCommandeHT:React.Dispatch<React.SetStateAction<string>>;
    setTotalRemise:React.Dispatch<React.SetStateAction<string>>;
    setPrixVenteArticleTTC:React.Dispatch<React.SetStateAction<string>>;
    setQuantité?:React.Dispatch<React.SetStateAction<string>>;
    setDescription:React.Dispatch<React.SetStateAction<string>>;
    setImage:React.Dispatch<React.SetStateAction<File | null>>;
    handleSubmit?:(e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleSubmitUpdate?:(e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleImage?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    setstock:React.Dispatch<React.SetStateAction<string>>
    setRefARticle:React.Dispatch<React.SetStateAction<string>>
    setUnite:React.Dispatch<React.SetStateAction<string>>
    setprix_ht_2_magasin:React.Dispatch<React.SetStateAction<string>>
    setprix_ht_3_magasin:React.Dispatch<React.SetStateAction<string>>
    setprix_ht_1_magasin:React.Dispatch<React.SetStateAction<string>>
    setquantité:React.Dispatch<React.SetStateAction<string>>



    
}
