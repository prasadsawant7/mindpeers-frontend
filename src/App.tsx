import { lazy, Suspense } from "react";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import ModelsFallback from "./components/ModelsFallback";
const SAModel = lazy(() => import("./components/SAModel"));
const KEModel = lazy(() => import("./components/KEModel"));
const DTModel = lazy(() => import("./components/DTModel"));
import "./App.css";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Navigate to="/sentiment-analysis" />} />
        <Route
          index
          path="sentiment-analysis"
          element={
            <Suspense fallback={<ModelsFallback />}>
              <SAModel />
            </Suspense>
          }
        />
        <Route
          path="keyword-extraction"
          element={
            <Suspense fallback={<ModelsFallback />}>
              <KEModel />
            </Suspense>
          }
        />
        <Route
          path="data-tagging"
          element={
            <Suspense fallback={<ModelsFallback />}>
              <DTModel />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}