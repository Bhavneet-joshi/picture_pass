import React from 'react'
import { AiOutlineSearch, AiFillCaretDown, AiOutlineRight, AiOutlineMenu, AiFillPlayCircle } from 'react-icons/ai';
import { RiSlideshow3Fill } from 'react-icons/ri';
import { TbMovie } from 'react-icons/tb';
import { Link ,useLocation } from "react-router-dom";

export default function Navigation() {
    let location = useLocation();
    const NavLg = () => {
        return (
            <>
                <div className='flex j bg-dark_grey-700 '>
                    <div className='flex gap-2'>
                        <img src="../logo.png" className='w-12' alt="" />
                        <div className='flex '>
                            <div className='bg-white py-3 px-2 rounded-l-lg'>
                                <AiOutlineSearch />
                            </div>
                            <input type="search" name="" className='w-96 rounded-r-lg outline-none' placeholder='Search for Movies, Events, Plays, Sports and Activities' />
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <div className='flex text-white cursor-pointer py-2'>
                            <p>Bathinda</p>
                            <div className='py-1'>
                                <AiFillCaretDown />
                            </div>
                        </div>
                        <button className='bg-red-600 rounded p-2 px-4 text-white'>Sign in</button>
                        <div className=' text-white cursor-pointer py-3'>
                            <AiOutlineMenu />
                        </div>
                    </div>
                </div>
                <div className='text-white bg-dark_grey-800  m-auto pb-2 px-72 py-2'>
                    <Link className={location.pathname==='/'?'text-red-600 px-2':'text-black px-2'} to="/">Home</Link>
                    <Link className={location.pathname==='/plays'?'text-red-600 px-2':'text-black px-2'} to="/plays">Plays</Link>
                    <Link className={location.pathname==='/tvShow'?'text-red-600 px-2':'text-black px-2'} to="/tvShow">Tv Shows</Link>
                    <Link className={location.pathname==='/movies'?'text-red-600 px-2':'text-black px-2'}to="/movies">Movies</Link>
                </div>
            </>
        )
    }

    const NavMd = () => {
        return (<>
            <div className='flex py-2 justify-around  '>
                <div className='text-white' >
                    <h1>It All Starts Here!</h1>
                    <div className='flex text-gray-500'>
                        <p >Bathinda</p>
                        <div className='my-auto'>
                            <AiOutlineRight />
                        </div>
                    </div>
                </div>
                <div className='flex  text-white'>
                    <button className='bg-red-600 rounded p-2'>Use App</button>
                    <div className='text-3xl m-auto mx-2'>
                        <AiOutlineSearch />
                    </div>
                </div>
            </div>
            <div className='z-10 bg-gradient-to-r from-cyan-300 to-blue-300 fixed w-full bottom-0  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-black
 flex justify-around rounded-full p-3'>
                <Link to="/">
                    <img className={location.pathname==='/'?"w-10":"w-10 brightness-0"} src="logo512.png" alt="" />
                    <img src="../logo.png" className='w-12' alt="" />
                    <p className={location.pathname==='/'?'text-red-600':'text-black'} >Home</p>
                </Link>
                <Link to="/plays">
                    <div className={location.pathname==='/plays'?'text-red-600 text-3xl':'text-black text-3xl'} >
                        <AiFillPlayCircle />
                    </div>
                    <p className={location.pathname==='/plays'?'text-red-600 ':'text-black'}>Plays</p>
                </Link>
                <Link to="/tvShow">
                    <div className={location.pathname==='/tvShow'?'text-red-600 text-3xl mx-2':'text-black  text-3xl mx-2'}>
                        <RiSlideshow3Fill />
                    </div>
                    <p className={location.pathname==='/tvShow'?'text-red-600':'text-black'} >Tv Shows</p>
                </Link>
                <Link to="/movies">
                    <div className={location.pathname==='/movies'?'text-red-600 text-3xl mx-2':'text-black text-3xl mx-2'} >
                        <TbMovie />
                    </div>
                    <p className={location.pathname==='/movies'?'text-red-600':'text-black'} >Movies</p>
                </Link>
            </div>
        </>
        )
    }

    return (
        <>
                    <div className='lg:block hidden  ' >
                <NavLg />
            </div>
            <div className='m:block lg:hidden '>
                <NavMd />
            </div>
        </>
    )
}