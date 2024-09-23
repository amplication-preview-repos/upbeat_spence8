import { AdresseWhereInput } from "./AdresseWhereInput";
import { AdresseOrderByInput } from "./AdresseOrderByInput";

export type AdresseFindManyArgs = {
  where?: AdresseWhereInput;
  orderBy?: Array<AdresseOrderByInput>;
  skip?: number;
  take?: number;
};
