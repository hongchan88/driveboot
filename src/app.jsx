import Maincontent from "./components/maincontent";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderFooter from "./components/common/headerFooter";

import { useEffect, useState } from "react";
import cogoToast from "cogo-toast";
import Pagenotfound from "./components/common/pagenotfound";

function App({ authProvider, firebaseBuyerRepo, firebaseSellerRepo }) {
  const [user, setUser] = useState(null);
  const [isBuyer, setisBuyer] = useState(true);

  const changeBuyerOrSeller = () => {
    setisBuyer((prev) => {
      return !prev;
    });
  };

  const setLoggedInUser = (result) => {
    setUser(result.user);
    cogoToast.success("Successfully logged in");
  };
  const setUserNull = () => {
    setUser(null);
  };
  console.log("app");
  console.log(user);

  // useEffect(() => {
  //   if (user && user !== null) {
  //     authProvider.onAuthChange((user) => {
  //       setUser(user);
  //     });
  //   }
  //   // if (user === null) {
  //   //   cogoToast.error("Please Sign in");
  //   // }
  // }, [user, authProvider]);

  return (
    <HeaderFooter
      authProvider={authProvider}
      user={user}
      setLoggedInUser={setLoggedInUser}
    >
      {isBuyer ? (
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Maincontent
                path={"/"}
                user={user}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>
            <Route exact path="/shop">
              <Maincontent
                path={"/shop"}
                user={user}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>
            <Route path="/shop/:id">
              <Maincontent
                path={"/shop/:id"}
                user={user}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>
            <Route exact path="/order">
              <Maincontent
                path={"/order"}
                user={user}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>
            <Route exact path="/profile">
              <Maincontent
                path={"/profile"}
                user={user}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>

            <Route exact path={["/myshop", "/manageorder", "/myshop/:id"]}>
              <Maincontent
                path={"/"}
                user={user}
                setLoggedInUser={setLoggedInUser}
                isBuyer={isBuyer}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
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
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>
            <Route exact path="/myshop">
              <Maincontent
                path={"/myshop"}
                user={user}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>
            <Route exact path="/myshop/:id">
              <Maincontent
                path={"/myshop/:id"}
                user={user}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
              />
            </Route>
            <Route exact path="/manageorder">
              <Maincontent
                path={"/manageorder"}
                user={user}
                isBuyer={isBuyer}
                setLoggedInUser={setLoggedInUser}
                changeBuyerOrSeller={changeBuyerOrSeller}
                setUserNull={setUserNull}
                authProvider={authProvider}
                firebaseBuyerRepo={firebaseBuyerRepo}
                firebaseSellerRepo={firebaseSellerRepo}
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
