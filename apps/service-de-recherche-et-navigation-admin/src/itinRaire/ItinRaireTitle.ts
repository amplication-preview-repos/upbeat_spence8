import { ItinRaire as TItinRaire } from "../api/itinRaire/ItinRaire";

export const ITINRAIRE_TITLE_FIELD = "id";

export const ItinRaireTitle = (record: TItinRaire): string => {
  return record.id?.toString() || String(record.id);
};
