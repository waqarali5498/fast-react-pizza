import { useRouteError } from "react-router-dom";
import LinkButton from "./LInkButton";
function Error() {
  const error = useRouteError();

  return (
    <div className="text-red-400">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
