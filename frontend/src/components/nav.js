import React from 'react';

const Nav = () => {
  return (
    <div>
      <ul className="flex bg-stone-100 cursor-pointer">
        <li className="mx-3 my-4 test-2xl test-slate-900 hover:text-slate-700 transiotion">
          Test Portofolio
        </li>
        <li className="mx-3 my-5 test-slate-900 hover:text-slate-700 transiotion">
          Education
        </li>
        <li className="mx-3 my-5 test-slate-900 hover:text-slate-700 transiotion">
          Work Experience
        </li>
        <li className="mx-3 my-5 test-slate-900 hover:text-slate-700 transiotion">
          Portofolio
        </li>
      </ul>
    </div>
  );
};

export default Nav;
