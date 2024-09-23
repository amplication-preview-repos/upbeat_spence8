import { Recherche } from "../recherche/Recherche";

export type ItinRaire = {
  createdAt: Date;
  id: string;
  pointsDeRepere: string | null;
  recherche?: Recherche | null;
  updatedAt: Date;
};
