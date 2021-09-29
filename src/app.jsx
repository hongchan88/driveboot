import Maincontent from "./components/maincontent";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderFooter from "./components/common/headerFooter";

import { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import Pagenotfound from "./components/common/pagenotfound";

function App({ authProvider }) {
  const [user, setUser] = useState();
  const [isBuyer, setisBuyer] = useState(true);

  const changeBuyerOrSeller = () => {
    setisBuyer((prev) => {
      return !prev;
    });
  };

  const setLoggedInUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    authProvider.onAuthChange((user) => {
      setUser(user);
      cogoToast.success("Successfully logged in");
    });
  }, [authProvider]);

  return (
    <HeaderFooter
      authProvider={authProvider}
      user={user}
      setLoggedInUser={setLoggedInUser}
    >
      {isBuyer ? (
        <BrowserRouter>
          <Switch>
            <Route exact path="/shop">
              <Maincontent
                path={"/shop"}
                user={user}
                authProvider={authProvider}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route exact path="/">
              <Maincontent
                path={"/"}
                user={user}
                authProvider={authProvider}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route path="/shop/:id">
              <Maincontent
                path={"/shop/:id"}
                user={user}
                authProvider={authProvider}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route exact path="/order">
              <Maincontent
                path={"/order"}
                user={user}
                authProvider={authProvider}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route exact path="/profile">
              <Maincontent
                path={"/profile"}
                user={user}
                authProvider={authProvider}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>

            <Route exact path={["/myshop", "/manageorder", "/myshop/:id"]}>
              <Maincontent
                path={"/"}
                user={user}
                authProvider={authProvider}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route>
              <Pagenotfound />
            </Route>
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Maincontent
                path={"/"}
                user={user}
                authProvider={authProvider}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route exact path="/myshop">
              <Maincontent
                path={"/myshop"}
                user={user}
                authProvider={authProvider}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route exact path="/myshop/:id">
              <Maincontent
                path={"/myshop/:id"}
                user={user}
                authProvider={authProvider}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route exact path="/manageorder">
              <Maincontent
                path={"/manageorder"}
                user={user}
                authProvider={authProvider}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
              />
            </Route>
            <Route>
              <Pagenotfound />
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </HeaderFooter>
  );
}

export default App;
