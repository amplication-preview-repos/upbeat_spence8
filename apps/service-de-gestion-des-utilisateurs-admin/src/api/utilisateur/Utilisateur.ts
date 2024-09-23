export type Utilisateur = {
  createdAt: Date;
  dateDeCreation: Date | null;
  derniReConnexion: Date | null;
  email: string | null;
  id: string;
  motDePasse: string | null;
  nom: string | null;
  prNom: string | null;
  updatedAt: Date;
};
