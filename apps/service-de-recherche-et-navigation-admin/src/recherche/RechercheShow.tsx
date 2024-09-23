import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { RECHERCHE_TITLE_FIELD } from "./RechercheTitle";

export const RechercheShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="adresse_id" source="adresseId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date_de_recherche" source="dateDeRecherche" />
        <TextField label="ID" source="id" />
        <TextField label="terme_de_recherche" source="termeDeRecherche" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="utilisateur_id" source="utilisateurId" />
        <ReferenceManyField
          reference="ItinRaire"
          target="rechercheId"
          label="Itinéraires"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
