import Maincontent from "./components/maincontent";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderFooter from "./components/common/headerFooter";
import Welcome from "./components/welcome";
import Shopdetail from "./components/shopdetail/shopdetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HeaderFooter>
            <Maincontent path={"/"} />
          </HeaderFooter>
        </Route>
        <Route path="/welcome">
          <HeaderFooter>
            <Maincontent path={"/welcome"} />
          </HeaderFooter>
        </Route>
        <Route path="/shop/:id">
          <HeaderFooter>
            <Maincontent path={"/shop/:id"} />
          </HeaderFooter>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
