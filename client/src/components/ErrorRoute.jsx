import { useRouteError } from "react-router-dom";

function ErrorRoute() {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <p>{error.statusText || error.message}</p>
    </>
  );
}

export default ErrorRoute;
