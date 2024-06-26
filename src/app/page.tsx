import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs/server'
import { GeminiEffect } from '@/components/GeminiEffect'

export default function Home() {
  return (
    <>
      <MaxWidthWrapper classname='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center  '>
        <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full dark:bg-indigo-500/10 dark:text-indigo-400 ring-1 ring-inset dark:ring-indigo-500/20 font-semibold text-gray-700 bg-white px-7 py-2 shadow-md backdrop-blur transition-all '>
          <p className='text-sm font-semibold'>
            Essence is now public! <span className='text-base'>🎉</span>
          </p>
        </div>
        <h1 className='max-w-4xl text-5xl tracking-tight font-bold md:text-6xl lg:text-7xl'>
          Chat with your <span className='text-indigo-400'>documents</span> in
          seconds.
        </h1>
        <p className='mt-5 max-w-prose dark:text-neutral-300 text-zinc-700 leading-8 sm:text-lg'>
          Essence allows you to have conversations with your PDF.{' '}
        </p>

        <RegisterLink
          className={buttonVariants({
            size: 'lg',
            className:
              'rounded-md bg-indigo-500 mt-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400',
          })}
        >
          Get Started <ArrowRight className='ml-2 h-5 w-5' />
        </RegisterLink>
        <div
          className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </MaxWidthWrapper>

      {/* value proposition */}
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[clac(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/chat-preview-light.webp'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={75}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[clac(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      <GeminiEffect />
      <div className='mx-auto mb-32 max-w-5xl mt-5'>
        {/* Steps */}

        <ol className='my-8 space-y-6 max-md:px-5 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-2 sm:border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-indigo-400'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700 dark:text-gray-300 leading-7'>
                Start out with a free account or get our{' '}
                <Link
                  href={'/pricing'}
                  className='text-indigo-400 underline underline-offset-2'
                >
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-2 sm:border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-indigo-400'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>Upload your PDF</span>
              <span className='mt-2 text-zinc-700 dark:text-gray-300 leading-7'>
                Essence will process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-2 sm:border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-indigo-400'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-700 dark:text-gray-300 leading-7'>
                It&apos;s that simple. Try Essence today - It takes less than a
                minute.
              </span>
            </div>
          </li>
        </ol>

        <div className='mx-auto max-w-6xl px-6 lg:px-8'>
          <div className='mt-16 flow-root sm:mt-24'>
            <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
              <Image
                src='/file-upload-preview.webp'
                alt='uploading preview'
                width={1419}
                height={732}
                quality={75}
                className='rounded-md  bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
