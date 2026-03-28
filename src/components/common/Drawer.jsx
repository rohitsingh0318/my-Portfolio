import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/Button';
import { Link } from 'react-scroll';
import { IoIosMenu } from "react-icons/io";


export default function NavDrawer() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  return (
    <div>
      <IconButton onClick={() => { setOpen(true) }}><IoIosMenu className='text-gray' size={25} /></IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="links text-lightblue font-medium text-base w-[40vw] p-6 h-screen bg-darkblue">
        {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                            <div className='mb-4' key={section}>
                                <Link
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    onSetActive={() => setActive(section)}
                                    className={`${
                                        active === section
                                            ? 'text-yellow border-b-2 border-lightblue pb-[1px] inline'
                                            : 'text-gray hover:text-yellow'
                                    } hover:cursor-pointer transition-all duration-200`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </Link>
                            </div>
                        ))}
        </div>
      </Drawer>
    </div>
  );
}
