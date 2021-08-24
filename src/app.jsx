import Maincontent from "./components/maincontent";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderFooter from "./components/common/headerFooter";
import Welcome from "./components/welcome";
import Shopdetail from "./components/shopdetail/shopdetail";
import { useEffect, useState } from "react";

function App({ authProvider }) {
  const [user, setUser] = useState();

  const setLoggedInUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    authProvider.onAuthChange((user) => {
      setUser(user);
    });
  });

  return (
    <HeaderFooter
      authProvider={authProvider}
      user={user}
      setLoggedInUser={setLoggedInUser}
    >
      <BrowserRouter>
        <Switch>
          <Route exact path="/shop">
            <Maincontent
              path={"/shop"}
              user={user}
              authProvider={authProvider}
              setLoggedInUser={setLoggedInUser}
            />
          </Route>
          <Route exact path="/">
            <Maincontent
              path={"/"}
              user={user}
              authProvider={authProvider}
              setLoggedInUser={setLoggedInUser}
            />
          </Route>
          <Route path="/shop/:id">
            <Maincontent
              path={"/shop/:id"}
              user={user}
              authProvider={authProvider}
              setLoggedInUser={setLoggedInUser}
            />
          </Route>
          <Route exact path="/order">
            <Maincontent
              path={"/order"}
              user={user}
              authProvider={authProvider}
              setLoggedInUser={setLoggedInUser}
            />
          </Route>
          <Route exact path="/profile">
            <Maincontent
              path={"/profile"}
              user={user}
              authProvider={authProvider}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </HeaderFooter>
  );
}

export default App;
