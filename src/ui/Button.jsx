import { Link } from "react-router-dom";

const base =
  "inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wider text-stone-500 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
function Button({ children, disabled, to, type, onClick }) {
  const styles = {
    primary: base + " px-4 py-3",
    small: base + " px-2 py-2 mx-5 text-xs",
    secondary:
      " text-sm inline-block rounded-full   font-semibold uppercase tracking-wider text-stone-500 transition-colors duration-300  focus:outline-none hover:bg-stone-300 disabled:cursor-not-allowed  px-4 py-3 border-2 border-stone-500",
    round: base + " p-2 mx-2 text-xs",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
