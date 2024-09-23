import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AdresseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Adresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_de_creation" source="dateDeCreation" />
        <TextField label="dernière_modification" source="derniReModification" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="identifiant" source="identifiant" />
        <TextField label="instructions" source="instructions" />
        <TextField label="point_de_repere" source="pointDeRepere" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="utilisateur_id" source="utilisateurId" />{" "}
      </Datagrid>
    </List>
  );
};
