import { Adresse as TAdresse } from "../api/adresse/Adresse";

export const ADRESSE_TITLE_FIELD = "identifiant";

export const AdresseTitle = (record: TAdresse): string => {
  return record.identifiant?.toString() || String(record.id);
};
