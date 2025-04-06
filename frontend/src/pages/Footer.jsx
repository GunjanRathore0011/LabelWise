import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-green-600 text-white py-8'>

            <div className="container mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About us */}
                <div>
                    <h2 className='text-lg font-semibold mb-4 '>About Us</h2>
                    <p className='text-geen-400 text-sm text-justify'>
                        We are committed to providing accurate product insights. Our mission is to empower consumers with informed choices through seamless digital experiences.
                    </p>
                </div>

                {/* Quick Links */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-lg font-semibold mb-4 '>Quick Links</h2>
                    <ul className='space-y-2 text-sm'>
                        <li>
                            <Link to={'/'} className='hover:text-white'>Home</Link>
                        </li>
                        <li>
                            <Link to={'/about'} className='hover:text-white'>About Us</Link>
                        </li>
                        <li>
                            <Link to={'/scan-product'} className='hover:text-white'>Scan Product</Link>
                        </li>
                        <li>
                            <Link to={'/results'} className='hover:text-white'>Results</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact us */}
                <div>
                    <h2 className='text-lg font-semibold mb-4 '>Contact Us</h2>
                    <p className=' text-sm'>123 Street Name,City,Country</p>
                    <p className=' text-sm'>Email info@example.com</p>
                    <p className=' text-sm'>Phone: +91 234 567 890</p>
                </div>

            </div>

            {/* Social Media and Copyright */}
            <div className='mt-8  pt-6 '></div>
            <p className='text-center  text-sm'>Follow us on:</p>
            <div className='flex justify-center space-x-4 mt-3'>
                <a href='#' className=' text-sm hover:text-white'>Facebook</a>
                <a href='#' className=' text-sm hover:text-white'>Twitter</a>
                <a href='#' className=' text-sm hover:text-white'>LinkedIn</a>
                <a href='#' className=' text-sm hover:text-white'>Instagram</a>
            </div>

            <p className='mt-4 text-center '>&copy; {new Date().getFullYear()} LabelWise. All rights reserved.</p>

        </div>
    )
}

export default Footer