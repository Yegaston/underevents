import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

import { Provider } from "react-redux";
import store from "./redux/store";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import register from "./pages/Register";
import home from "./pages/Home";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9541ea",
      main: "#6000b7",
      dark: "#240086",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff5c8d",
      main: "#d81b60",
      dark: "#a00037",
      contrastText: "#fff"
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={register} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
