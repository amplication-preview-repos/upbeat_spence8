import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_de_creation" source="dateDeCreation" />
        <DateTimeInput label="dernière_connexion" source="derniReConnexion" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="mot_de_passe" source="motDePasse" />
        <TextInput label="nom" source="nom" />
        <TextInput label="prénom" source="prNom" />
      </SimpleForm>
    </Create>
  );
};
