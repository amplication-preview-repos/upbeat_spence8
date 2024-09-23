import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RechercheTitle } from "../recherche/RechercheTitle";

export const ItinRaireEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
