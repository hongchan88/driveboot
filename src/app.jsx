import Maincontent from "./components/maincontent";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderFooter from "./components/common/headerFooter";
import Welcome from "./components/welcome";
import Shopdetail from "./components/shopdetail/shopdetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/shop">
          <HeaderFooter>
            <Maincontent path={"/shop"} />
          </HeaderFooter>
        </Route>
        <Route exact path="/">
          <HeaderFooter>
            <Maincontent path={"/"} />
          </HeaderFooter>
        </Route>
        <Route path="/shop/:id">
          <HeaderFooter>
            <Maincontent path={"/shop/:id"} />
          </HeaderFooter>
        </Route>
        <Route exact path="/order">
          <HeaderFooter>
            <Maincontent path={"/order"} />
          </HeaderFooter>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
