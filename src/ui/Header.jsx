import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between border-y-4 border-stone-600 bg-yellow-500 p-4 uppercase">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Company
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
