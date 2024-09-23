import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RechercheTitle } from "../recherche/RechercheTitle";

export const ItinRaireCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="points_de_repere" multiline source="pointsDeRepere" />
        <ReferenceInput
          source="recherche.id"
          reference="Recherche"
          label="recherche_"
        >
          <SelectInput optionText={RechercheTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
