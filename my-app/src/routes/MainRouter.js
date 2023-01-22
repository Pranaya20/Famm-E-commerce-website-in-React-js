import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import map from "lodash/map";
import EcommercePageRoutes from "./modules/EcommercePageRoute";




const Landing = () => {
  const renderRoutes = map(EcommercePageRoutes, (item, key) => {
    if (item.isPublic) {
      return (
        <Route exact path={item.path} element={<item.element/>} key={key} />
      );
    }
  });
  return (
    <Fragment>
      <Router>
        <Routes>{renderRoutes}</Routes>
      </Router>
    </Fragment>
  );
};

export default Landing;
