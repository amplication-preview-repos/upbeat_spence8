import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AdresseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="date_de_creation" source="dateDeCreation" />
        <DateTimeInput
          label="dernière_modification"
          source="derniReModification"
        />
        <TextInput label="description" multiline source="description" />
        <TextInput label="identifiant" source="identifiant" />
        <TextInput label="instructions" multiline source="instructions" />
        <TextInput label="point_de_repere" source="pointDeRepere" />
        <TextInput label="utilisateur_id" source="utilisateurId" />
      </SimpleForm>
    </Create>
  );
};
