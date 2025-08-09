import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const NotFound = () => {
    const { pathname } = useLocation();
    return (
        <div className="d-flex flex-column gap-3">
            404 Not Found
            Nothing found on {pathname}
            <Link to='/'>Home</Link>
        </div>
    );
}