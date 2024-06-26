'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { DarkModeToggle } from './DarkModeToggle'

const MobileNav = ({ isAuth }: { isAuth: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleOpen = () => setIsOpen((prev) => !prev)

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen()
    }
  }

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname])

  return (
    <div className='sm:hidden'>
      <div className='flex items-center gap-2'>
        <DarkModeToggle />

        <Menu
          onClick={toggleOpen}
          className='relative z-50 h-5 w-5 dark:text-neutral-300 text-zinc-700'
        />
      </div>

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute dark:bg-gray-900 dark:border-neutral-400 bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-5 pt-20 pb-8'>
            {!isAuth ? (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/sign-up')}
                    className='flex items-center w-full font-semibold text-green-600'
                    href='/sign-up'
                  >
                    Get Started <ArrowRight className='ml-2 h-5 w-5' />
                  </Link>
                </li>
                <li className='my-3 h-px w-full dark:bg-neutral-400 bg-gray-300' />
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/sign-in')}
                    className='flex items-center w-full font-semibold'
                    href='/sign-in'
                  >
                    Sign in
                  </Link>
                </li>

                <li className='my-3 h-px w-full dark:bg-neutral-500 bg-gray-300' />
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/pricing')}
                    className='flex items-center w-full font-semibold'
                    href='/pricing'
                  >
                    Pricing
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent('/dashboard')}
                    className='flex items-center w-full font-semibold'
                    href='/dashboard'
                  >
                    Dashboard
                  </Link>
                </li>
                <li className='my-3 h-px w-full dark:bg-neutral-400 bg-gray-300' />
                <li>
                  <Link
                    className='flex items-center w-full font-semibold'
                    href='/sign-out'
                  >
                    Sign out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav
