import { AppRoute, AuthorizationStatus } from '../../const';
import { Navigate, RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
