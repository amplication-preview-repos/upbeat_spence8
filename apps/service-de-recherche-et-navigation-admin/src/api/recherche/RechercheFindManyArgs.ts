import { RechercheWhereInput } from "./RechercheWhereInput";
import { RechercheOrderByInput } from "./RechercheOrderByInput";

export type RechercheFindManyArgs = {
  where?: RechercheWhereInput;
  orderBy?: Array<RechercheOrderByInput>;
  skip?: number;
  take?: number;
};
