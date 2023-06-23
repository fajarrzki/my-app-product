import React from "react";

function NavBar() {
  const listNav = ['Home', 'Contact','Profile'];
  return  (
  <>
    <div className="flex h-24 bg-sky-900 py-8 px-32 justify-between">
      <h1 className="text-xl font-bold text-white cursor-pointer">Logo</h1>
      <ul className="flex space-x-6">
       {listNav.map((item =>{
        return <li className="text-sm font-bold text-white cursor-pointer">
          {item}
        </li>
       }))}
      </ul>
    </div>
  </>
  );
}

export default NavBar;
