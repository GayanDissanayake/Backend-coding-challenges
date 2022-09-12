import { Suspense, lazy, ElementType, useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";
// import LoadingScreen from "../components/LoadingScreen";

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
        { element: <Navigate to="/admission" replace />, index: true },
        {
          path: "admission",
          children: [
            {
              element: <Navigate to="/admission/sign-in" replace />,
              index: true,
            },
            { path: "sign-in", element: <Home /> },
          ],
        },
      ],
    },
  ]);
}

// Main
const Home = Loadable(lazy(() => import("../pages/human-resource/Initial")));
