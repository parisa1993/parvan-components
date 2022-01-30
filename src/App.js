import React from "react";
import Button from "./components/Button";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./assets/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button variant="contained" color="info" size="small" onClick={() => alert("iii")}>
        تست تست
      </Button>
    </ThemeProvider>
  );
}