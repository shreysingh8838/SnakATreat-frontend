import React from "react";
import { NavLink  } from 'react-router-dom';
export default (props) => {
    return (
        <>
        <NavLink to={props.to} title={props.title}>
            <div className="fixed flex items-center justify-center font-bold cursor-pointer text-center dark:bg-gray-900 bg-red-700 rounded-full bottom-10 right-10 text-white shadow-2xl w-12 p-3 h-12">
                {props.val}
            </div>
        </NavLink>
        </>
    )
}