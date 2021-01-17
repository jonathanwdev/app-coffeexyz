import { Route as ReactDOMRoute, Redirect } from 'react-router-dom';

const Routes = ({ isPrivate = false, component: Component, ...rest }) => {
  const user = false;

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : 'home',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Routes;
