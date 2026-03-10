import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import profile from "../../../public/img/profile.png";
import ThemeSwitch from "./ThemeSwitch";
import Profile from "./Profile";
import ScrollToTop from "./ScrollToTop";

export default function Dashboard() {

    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme ? savedTheme === "dark" : true;
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.add("light-mode");
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <main className="grid-container" style={{ gridArea: "main" }}>
            <aside className="side-bar" style={{ gridArea: "side" }}>
                <Profile profile={profile} />

                <nav className="nav-container">
                    <ul className="nav-list">

                        <li>
                            <NavLink to="/" className="links">
                                <i className="bx bx-home" />
                                <span className="link-txt">Home</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="about" className="links">
                                <i className="bx bx-user-circle" />
                                <span className="link-txt">About</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="projects" className="links">
                                <i className="bx bx-layers-down-right" />
                                <span className="link-txt">Projects</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />

            </aside>

            <section className="content-section" id="content-section" style={{ gridArea: "content" }}>
                <ScrollToTop />
                <header>
                    <ThemeSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
                    <Profile profile={profile} />
                </header>
                <Outlet />
            </section>
        </main>
    );
}