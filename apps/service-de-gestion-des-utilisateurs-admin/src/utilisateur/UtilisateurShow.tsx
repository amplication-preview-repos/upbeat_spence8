import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const UtilisateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_de_creation" source="dateDeCreation" />
        <TextField label="dernière_connexion" source="derniReConnexion" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="mot_de_passe" source="motDePasse" />
        <TextField label="nom" source="nom" />
        <TextField label="prénom" source="prNom" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
