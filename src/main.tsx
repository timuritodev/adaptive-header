/* eslint-disable react-refresh/only-export-components */
import React, { FC } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.css";

import { Layout } from "./components/Layout/Layout";
import App from "./pages/App/App";
import ScrollToTop from "./hooks/ScrollToTop";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

const Root: FC = () => {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<App />} /> */}
          {/* <Route path="/main" element={<MainPage />} /> */}
          <Route index element={<App />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Root />
    </BrowserRouter>
  </React.StrictMode>
);
