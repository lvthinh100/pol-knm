import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";

import Layout from "../components/Layout/index.js";
import AboutUs from "../pages/AboutUs";
import Document from "../pages/DocumentPage";
import Member from "../pages/Member";

export default function MyRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/document" element={<Document />} />
        <Route path="/member/:id" element={<Member />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
