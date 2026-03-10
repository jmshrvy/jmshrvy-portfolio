import { NavLink } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not-found-container">

            <h1 className="not-found-code">404</h1>

            <h2 className="not-found-title">
                Oops, This Page Not Found!
            </h2>

            <p className="not-found-sub">
                The link might be corrupted,
            </p>

            <p className="not-found-sub-small">
                or the page may have been removed
            </p>

            <NavLink to="/" className="not-found-btn">
                GO BACK HOME
            </NavLink>

        </div>
    );
}