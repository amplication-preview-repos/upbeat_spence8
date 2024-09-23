import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UtilisateurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Utilisateurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_de_creation" source="dateDeCreation" />
        <TextField label="dernière_connexion" source="derniReConnexion" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="mot_de_passe" source="motDePasse" />
        <TextField label="nom" source="nom" />
        <TextField label="prénom" source="prNom" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
