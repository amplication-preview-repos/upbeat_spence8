import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const UtilisateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="date_de_creation" source="dateDeCreation" />
        <DateTimeInput label="dernière_connexion" source="derniReConnexion" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="mot_de_passe" source="motDePasse" />
        <TextInput label="nom" source="nom" />
        <TextInput label="prénom" source="prNom" />
      </SimpleForm>
    </Edit>
  );
};
