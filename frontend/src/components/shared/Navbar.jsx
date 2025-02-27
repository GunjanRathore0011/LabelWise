import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <nav className='shadow-lg'>
        <div className='flex justify-around items-center p-5 max-w-screen-2xl'>
            <Link to='/'>
                <h1 className='flex flex-wrap font-bold text-2xl sm:text-2xl tracking-wide'>
                    <span className='text-green-500 '>Label</span>
                    <span className='text-gray-800 '>Wise</span>
                </h1>
            </Link>

            <div className='flex justify-between items-center text-gray-700 hover: translate-x-1 flex-wrap w-96'> 
                <Link to='/' className='hover:underline'>Home</Link>
                <Link to='/scan-product' className='hover:underline'>Scan Product</Link>
                <Link to='/results' className='hover:underline'>Results</Link>
                <Link to='/about' className='hover:underline'>About</Link>
            </div>
            <Link  to='/sign-in' className='text-green-700 '>
                <Button className='bg-green-900 '>Sign In</Button>
            </Link>

        </div>
    </nav>
  )
}

export default Navbar