import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RechercheList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Recherches"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="adresse_id" source="adresseId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_de_recherche" source="dateDeRecherche" />
        <TextField label="ID" source="id" />
        <TextField label="terme_de_recherche" source="termeDeRecherche" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="utilisateur_id" source="utilisateurId" />{" "}
      </Datagrid>
    </List>
  );
};
