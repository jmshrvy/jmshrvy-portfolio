export default function ThemeSwitch({ darkMode, setDarkMode }) {
    return (
        <div className="dark-light-switch-container">

            <div className="mode-txt">
                <i className={`bx ${darkMode ? "bx-moon" : "bx-sun"}`} />
                <label className="mode">
                    {darkMode ? "DarkMode" : "LightMode"}
                </label>
            </div>

            <label className="switch">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
                <span className="slider"></span>
            </label>

        </div>
    );
}