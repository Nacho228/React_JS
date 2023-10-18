import React from "react";

const NavBar = () => {
    return ( 
        <div className="navbar bg-base-100 flex justify-between items-center fixed bottom-0 w-full p-4 mt-auto">
            <div className="navbar-start flex items-center">
                {/* Dropdown menu */}
                {/* Button */}
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Horizontal menu */}
                <ul className="flex space-x-4">
                    <li><a>Item 1</a></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* Button */}
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;