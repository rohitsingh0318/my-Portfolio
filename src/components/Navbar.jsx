import React, { useState } from 'react';
import { Link } from 'react-scroll';
import NavDrawer from './common/Drawer';

const Navbar = () => {
    const [active, setActive] = useState('home');

    return (
        <div className='fixed w-full z-20'>
            <div className='bg-darkblue flex justify-between items-center px-4 py-3'>
                <div className='flex gap-1 font-bold flex-1'>
                    <div className='text-lightblue'>Rohit</div>
                    <div className='text-yellow'>Singh</div>
                </div>
                <div>
                    <ul className='gap-6 font-mono font-semibold hidden md:flex'>
                        {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                            <li key={section}>
                                <Link
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onSetActive={() => setActive(section)}
                                    className={`${
                                        active === section
                                            ? 'text-yellow border-b-2 border-lightblue pb-1 px-1 inline'
                                            : 'text-gray hover:text-yellow'
                                    } transition-all duration-200`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='inline-block md:hidden'>
                        <NavDrawer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
