import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RECHERCHE_TITLE_FIELD } from "../recherche/RechercheTitle";

export const ItinRaireList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Itinéraires"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="points_de_repere" source="pointsDeRepere" />
        <ReferenceField
          label="recherche_"
          source="recherche.id"
          reference="Recherche"
        >
          <TextField source={RECHERCHE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
