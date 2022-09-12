import { Suspense, lazy, ElementType } from "react";
import { useRoutes, Navigate } from "react-router-dom";

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        { element: <Navigate to="/initial" replace />, index: true },
        { path: "initial", element: <Home /> },
      ],
    },
  ]);
}

// Main
const Home = Loadable(
  lazy(() => import("../pages/app-human-resource/Initial"))
);
