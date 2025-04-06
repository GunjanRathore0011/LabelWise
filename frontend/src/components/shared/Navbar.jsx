import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'sonner'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOutSuccess } from '@/redux/user/userSlice';

const Navbar = () => {

    const { currentUser } = useSelector((state) => state.user);
    // console.log(currentUser);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const signOutHandler = async () => {
        console.log("signout handler called")
        try {
            const res = await fetch("/api/auth/signout", {
                method: "DELETE"
            })

            const data = await res.json();

            if (res.ok) {
                dispatch(signOutSuccess());
                toast.success(data.message)
            }
            else {
                toast.error(data.message)
            }
            navigate("/sign-in")
        }
        catch (error) {
            console.log("Error in signout", error);
        }
    }

    return (
        <nav className='shadow-lg'>
            <div className='flex justify-around items-center p-5 max-w-screen-2xl'>
                <Link to='/'>
                    <h1 className='flex flex-wrap font-bold text-2xl sm:text-2xl tracking-wide'>
                        <span className='text-green-500 '>Label</span>
                        <span className='text-gray-800 '>Wise</span>
                    </h1>
                </Link>

                <div className='flex justify-between items-center text-gray-800 hover: translate-x-1 flex-wrap w-96'>
                    <Link to='/' className='hover:underline'>Home</Link>
                    <Link to='/scan-product' className='hover:underline'>Scan Product</Link>
                    <Link to='/results' className='hover:underline'>Results</Link>
                    <Link to='/about' className='hover:underline'>About</Link>
                </div>
                {currentUser ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild className='cursor-pointer'>
                            <div className='w-10 h-10 bg-green-600 rounded-full flex justify-center items-center text-white font-semibold text-xl'>
                                {currentUser?.name?.[0]?.toUpperCase() || currentUser?.email?.[0]?.toUpperCase() || "U"}
                            </div>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-60'>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-400" />
                            <DropdownMenuItem className='block font-semibold text-sm'>
                                <div className='flex flex-col gap-1'>
                                    {/* <span>{currentUser.userName}</span> */}
                                    <span>{currentUser.email}</span>
                                </div>
                            </DropdownMenuItem>

                            <DropdownMenuItem className='font-semibold mt-2 cursor-pointer' onClick={signOutHandler} >
                                Sign Out
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>

                ) : (
                    <Link to={'/sign-in'}>
                        <Button className="text-white bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out">Sign In</Button>
                    </Link>
                )}

            </div>
        </nav>
    )
}

export default Navbar