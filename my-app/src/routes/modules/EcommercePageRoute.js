import React, { lazy } from "react";

import { ROUTE_MAIN,
    ROUTE_HOME,
    ROUTE_MANS,
    ROUTE_WOMENS,
    ROUTE_KIDS } from "../router";
    import PublicPageLayout from "../../layout/PublicPageLayout";
const Home = lazy(() => import("views/Home"));
const Womens = lazy(() => import("views/Womens"));
const Mans = lazy(() => import("views/Mans"));


const EcommercePageRoutes = [
  {
    isPublic: true,
    path: ROUTE_HOME,
    element: (props) => (
      <PublicPageLayout {...props}>
        <Home {...props} />
      </PublicPageLayout>
    ),
  },
  {
    isPublic: true,
    path: ROUTE_WOMENS,
    element: (props) => (
      <PublicPageLayout {...props}>
        <Womens {...props} />
      </PublicPageLayout>
    ),
  },

  {
    isPublic: true,
    path: ROUTE_MANS,
    element: (props) => (
      <PublicPageLayout {...props}>
        <Mans {...props} />
      </PublicPageLayout>
    ),
  },
];

export default EcommercePageRoutes;
