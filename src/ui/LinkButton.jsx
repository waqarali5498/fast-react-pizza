import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === "-1")
    return (
      <button
        className="text-sm text-blue-500 hover:text-blue-600  "
        onClick={() => navigate(-1)}
      >
        {children}
      </button>
    );
  return (
    <Link to={to} className="text-sm text-blue-500 hover:text-blue-600  ">
      &larr; Back to menu
    </Link>
  );
}

export default LinkButton;
