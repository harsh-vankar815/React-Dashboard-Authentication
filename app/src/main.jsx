import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';
import App from "./App.jsx";
import "./index.css";
import { theme } from "./theme/index.js";
import '@fontsource/ubuntu';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import AuthProvider from "./provider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </AuthProvider>
  </StrictMode>
);