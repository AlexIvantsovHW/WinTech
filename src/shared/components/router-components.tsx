import { Suspense } from "react";
import { Route } from "react-router-dom";

export const routeComponent = (
  path: string,
  Component: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Route
      key={path}
      path={path}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <Component />
        </Suspense>
      }
    />
  );
};
