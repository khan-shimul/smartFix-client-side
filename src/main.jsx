import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const queryClient = new QueryClient();
axios.defaults.withCredentials = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <AuthProvider>
          <RouterProvider router={Router} />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </StrictMode>
);
