import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AdresseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_de_creation" source="dateDeCreation" />
        <TextField label="dernière_modification" source="derniReModification" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="identifiant" source="identifiant" />
        <TextField label="instructions" source="instructions" />
        <TextField label="point_de_repere" source="pointDeRepere" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="utilisateur_id" source="utilisateurId" />
      </SimpleShowLayout>
    </Show>
  );
};
