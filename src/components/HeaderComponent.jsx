import React from 'react';

/**
 * HeaderComponent for Header in the Application
 * @returns {React.JSX.Element}
 * @constructor
 */
const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className={"navbar navbar-dark bg-dark"}>
                    <div className={"container-fluid"}>
                        <a className={"navbar-brand"} href={"https://github.com/JesseHerrera04/ems-frontend"}>
                            Employee Management System
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default HeaderComponent;