import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RechercheList } from "./recherche/RechercheList";
import { RechercheCreate } from "./recherche/RechercheCreate";
import { RechercheEdit } from "./recherche/RechercheEdit";
import { RechercheShow } from "./recherche/RechercheShow";
import { ItinRaireList } from "./itinRaire/ItinRaireList";
import { ItinRaireCreate } from "./itinRaire/ItinRaireCreate";
import { ItinRaireEdit } from "./itinRaire/ItinRaireEdit";
import { ItinRaireShow } from "./itinRaire/ItinRaireShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Service de Recherche et Navigation"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Recherche"
          list={RechercheList}
          edit={RechercheEdit}
          create={RechercheCreate}
          show={RechercheShow}
        />
        <Resource
          name="ItinRaire"
          list={ItinRaireList}
          edit={ItinRaireEdit}
          create={ItinRaireCreate}
          show={ItinRaireShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
