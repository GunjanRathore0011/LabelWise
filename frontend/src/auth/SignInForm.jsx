import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import { signInFailure, signInStart, signInSuccess } from '@/redux/user/userSlice'

const formSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" }).max(50),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }).max(50),

})

const SignInForm = () => {

  const {error,loading}=useSelector(state=>state.user)
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
       email: "",
      password: "",
    },
  })
 async function onSubmit(values) {
    dispatch(signInStart())
    const res=await fetch('/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    const data=await res.json()
    const mssg=data.message

    if(res.ok){
      
      dispatch(signInSuccess(data.message))
      toast.success(mssg)
      navigate('/')
    }
    else{
      dispatch(signInFailure(data.message))
      toast.error(mssg)
    }
   

  }

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left  */}
        <div className='flex-1'>
          <Link to={'/'} className='text-2xl font-bold sm:text-4xl flex flex-wrap'>
            <span className='text-green-500 '>Label</span>
            <span className='text-gray-800 '>Wise</span>
          </Link>


          <h2 className='text-[24px] md:text-[30px] tracking-tighter leading-[140%] font-bold pt-5 sm:pt-12' >
          Sign in to your account
          </h2>

          <p className='text-slate-500 text-[14px] font-medium leading-[140%] md:text-[16px] md:font-normal mt-2'>
          Welcome back, Please provide your details.
          </p>

        </div>


        {/* right */}
        <div className='flex-1'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input text='email' placeholder="xyz@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type='password' placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />

              <Button type="submit" className='px-5 py-2 rounded-lg text-white bg-green-800 hover:bg-green-900 transition duration-300 ease-in-out' >Submit</Button>
            </form>
          </Form>

          <div className='flex gap-2 text-sm mt-5' >
            <span>Don't have an account?</span>
            <Link className='text-green-700' to={'/sign-up'}>Sign Up</Link>
          </div>

          {/* Display error message if exists */}
          {error && (
            <p className="text-red-500 mt-5">{error}</p>
          )}

        </div>

      </div>
    </div>
  )
}

export default SignInForm