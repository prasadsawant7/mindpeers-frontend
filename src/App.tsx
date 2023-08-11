import { lazy, Suspense } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import AllModels from "./components/AllModels";
import ModelsFallback from "./components/ModelsFallback";
const SAModel = lazy(() => import("./components/SAModel"));
const SAFeedbackModel = lazy(() => import("./components/SAFeedbackModel"));
const KEModel = lazy(() => import("./components/KEModel"));
const KEFeedbackModel = lazy(() => import("./components/KEFeedbackModel"));
import "./App.css";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<AllModels />} />
        <Route
          path="sentiment-analysis"
          element={
            <Suspense fallback={<ModelsFallback />}>
              <SAModel />
            </Suspense>
          }
        />
        <Route
          path="sentiment-analysis-feedback"
          element={
            <Suspense fallback={<ModelsFallback />}>
              <SAFeedbackModel />
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
          path="keyword-extraction-feedback"
          element={
            <Suspense fallback={<ModelsFallback />}>
              <KEFeedbackModel />
            </Suspense>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
