'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu as MenuIcon, Octagon } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { title: 'Servicios', href: '/servicios' },
  { title: 'Productos', href: '/productos' },
  { title: 'Intelpower', href: 'https://www.intelpower.com.ve/' },
  { title: 'Blog', href: '/blog' },
]

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="sticky top-0 z-10 w-full">
      <div
        className={cn(
          'flex h-14 items-center',
          scrolled && 'bg-primary transition-colors duration-1000'
        )}
      >
        <MainNav scrolled={scrolled} />
        <MobileNav />
      </div>
    </header>
  )
}

function MainNav({ scrolled }: { scrolled: boolean }) {
  return (
    <div className="container hidden w-full items-center justify-between gap-2 md:flex">
      <Link
        href="/"
        className="group flex items-center justify-center gap-2 text-xl font-bold"
      >
        <Octagon
          size={24}
          className={cn(scrolled ? 'text-secondary' : 'text-primary')}
        />
        <span className="underline-offset-4 group-hover:underline">
          RadioLink
        </span>
      </Link>
      <div>
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="link"
            className="text-secondary-foreground"
            asChild
          >
            <Link href={item.href}>{item.title}</Link>
          </Button>
        ))}
        <Button
          variant={scrolled ? 'secondary' : 'default'}
          className="ml-2"
        >
          Contáctanos
        </Button>
      </div>
    </div>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <div className="flex w-full items-center justify-between px-2 md:hidden">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-xl font-bold"
        >
          <Octagon size={24} className="text-primary" />
          RadioLink
        </Link>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>
      </div>

      <SheetContent side="left">
        <div className="mt-4 flex flex-col items-start">
          <Link
            href="/"
            className="mb-2 flex w-full items-center justify-center gap-2 text-xl font-bold"
            onClick={() => {
              setOpen(false)
            }}
          >
            <Octagon size={24} className="text-primary" />
            RadioLink
          </Link>
          {navItems.map((item, index) => (
            <Link
              className="my-2"
              key={index}
              onClick={() => {
                setOpen(false)
              }}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
          <Button variant="default" size="lg" className="mt-2 w-full">
            Contáctanos
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
