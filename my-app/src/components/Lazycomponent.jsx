import React, { lazy, Suspense } from 'react';

const Lazycomponent = lazy(() => import('./UseRefDemo'));

const LazyComponent = () => {
  return (
    <div>
      <h1>My React App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Lazycomponent />
      </Suspense>
    </div>
  );
};

export default LazyComponent;