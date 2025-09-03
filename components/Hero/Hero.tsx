import React from 'react'
import Image from 'next/image';

import { cn } from "@/lib/utils";

import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";

import { Button } from '../ui/button';


const Hero = () => {
  return (
    <section className='py-16'>
      <div className='w-full'>
        <div className='grid items-center gap-8 lg:grid-cols-2'>
          <div className='container flex flex-col items-center text-center lg:mx-auto lg:items-start lg:px-0 lg:text-left'>
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in dark:border-white/5 dark:bg-neutral-900",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Introducing Craft AI</span>
              </AnimatedShinyText>
            </div>
            <h1 className='my-6 text-4xl font-bold text-pretty lg:text-6xl flex flex-col'>
              <span>Need Audience?</span>
              <span>Let AI Handle It.</span>
            </h1>
            <p className='mb-8 max-w-xl text-muted-foreground'>
              Turn your creations into impactful stories with AI-powered ads. From design to publishing, our platform gives artisans and creators everything they need to reach audiences seamlessly—no extra tools required.
            </p>
            <div className='flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start'>
              <Button>Primary</Button>
              <Button variant={'outline'}>Secondary</Button>
            </div>
          </div>
          <div className='grid aspect-square grid-cols-[2fr_20fr_2fr] grid-rows-[2fr_30fr_2fr] bg-linear-to-t from-fuchsia-100 via-cyan-100 to-fuchsia-100'>
            <div className='border-r border-b border-primary'></div>
            <div className='border-b border-primary'></div>
            <div className='relative border-b border-l border-primary'></div>
            <div className='border-r border-primary'></div>
            <div className='relative'>
              <div className='absolute top-[8%] left-[12%] flex aspect-3/4 w-[60%] justify-center rounded-lg border border-border bg-background'>
                <Image
                  src="/Hero/Hero_Ad_One.jpeg"
                  alt="Demo Image"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className='absolute top-[20%] right-[10%] flex aspect-square w-[30%] justify-center rounded-lg border border-border bg-background'>
                <Image
                  src="/Hero/Hero_Ad_Three.jpeg"
                  alt="Demo Image"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className='absolute bottom-[8%] left-[36%] flex aspect-4/3 w-[50%] justify-center rounded-lg border border-border bg-background'>
                <Image
                  src="/Hero/Hero_Ad_Two.jpeg"
                  alt="Demo Image"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className='border-l border-primary'></div>
            <div className='relative border-t border-r border-primary'></div>
            <div className='border-t border-primary'></div>
            <div className='border-t border-l border-primary'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero