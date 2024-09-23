import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ItinRaireTitle } from "../itinRaire/ItinRaireTitle";

export const RechercheEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="adresse_id" source="adresseId" />
        <DateTimeInput label="date_de_recherche" source="dateDeRecherche" />
        <ReferenceArrayInput source="itinRaires" reference="ItinRaire">
          <SelectArrayInput
            optionText={ItinRaireTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="terme_de_recherche" source="termeDeRecherche" />
        <TextInput label="utilisateur_id" source="utilisateurId" />
      </SimpleForm>
    </Edit>
  );
};
