import { Route, Routes, MemoryRouter } from 'react-router-dom';

import { RouteHandlerProps } from '../../types/services/Router';

function RouteHandler(props: RouteHandlerProps) {
  const { routes } = props;
  
  return (
    <MemoryRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </MemoryRouter>
  );
}

export default RouteHandler;