import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./contexts/auth";
import SnackbarProvider from "./contexts/snackbar.jsx";
import MuiProvider from "./contexts/mui.jsx";
import UserProvider from "./contexts/user.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <MuiProvider>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </MuiProvider>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);
