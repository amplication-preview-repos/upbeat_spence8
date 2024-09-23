import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { RECHERCHE_TITLE_FIELD } from "../recherche/RechercheTitle";

export const ItinRaireShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
