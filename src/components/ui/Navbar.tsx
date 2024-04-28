'use client'
import React, { useState } from 'react';

import Link from 'next/link';
import Text from './Text';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Completed Tasks', href: '/completed-tasks' },
  { label: 'Pending Tasks', href: '/pending' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 

const clickHandle= ()=>{
    setIsOpen(false)
}

  return (
    <nav className="bg-[#190340]  relative">
      <div className="container mx-auto px-4 py-2 md:flex sm:items-center p-2 ">
        <div className="flex items-center justify-between py-2">
          <Link href="/">
            <div className="text-xl font-bold text-white">Task Management</div>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
            </svg>
          </button>
        </div>
        {/* navigation */}
        <div className="hidden md:flex text-gray-100 flex-grow justify-end md:right-0 md:space-x-8 mr-6 ">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Text variant="bodySm" className="text-gray-100" fontWeight="medium">
                {item.label}
              </Text>
            </Link>
          ))}
        </div>
        {/* Mobile Navigation Items */}
        <div className={`${
        isOpen ? ' sm:hidden text-white ' : 'hidden'
      } absolute md:relative bg-[#190340] py-4 md:py-0 -right-8 md:right-0 w-72 md:w-auto rounded-md md:rounded-none z-50 flex-col md:flex-row flex-grow justify-end  space-x-0 mr-6`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={clickHandle}>
            <div className={`${
              isOpen ? "p-4 text-gray-100 space-y-4 border-b-[1px] border-white" : ""
            } text-gray-100 hover:text-gray-300 px-3 py-2 rounded-md md:rounded-none text-sm font-medium`}>
              {item.label}
            </div>
          </Link>
        ))}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;


