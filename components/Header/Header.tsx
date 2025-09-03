"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {

    const navigationLinks = [
        { name: "Products", href: "#" },
        { name: "Resources", href: "#" },
        { name: "Contact", href: "#" },
    ]

    return (
        <section className="py-4">
            <div className="w-full">
                <nav className="flex items-center justify-between relative">
                    <Link
                        href="/"
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/logo.svg"
                            width={32}
                            height={32}
                            alt="Logo"
                        />
                        <span className="text-lg font-semibold tracking-tighter">
                            Craft<span className="text-primary">AI</span>
                        </span>
                    </Link>
                    <NavigationMenu className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                        <NavigationMenuList>
                            {navigationLinks.map((link, index) => (
                                <NavigationMenuItem key={index}>
                                    <NavigationMenuLink
                                        href={link.href}
                                        className={navigationMenuTriggerStyle()}
                                    >
                                        {link.name}
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <div className="hidden items-center gap-4 lg:flex">
                        <Button variant="outline">Sign in</Button>
                        <Button>Start for free</Button>
                    </div>
                    <Sheet>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="max-h-screen overflow-auto">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2"
                                    >
                                        <Image
                                            src="/logo.svg"
                                            width={32}
                                            height={32}
                                            alt="Logo"
                                        />
                                        <span className="text-lg font-semibold tracking-tighter">
                                            Craft<span className="text-primary">AI</span>
                                        </span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col p-4">
                                <div className="flex flex-col gap-6">
                                    {navigationLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="font-medium">
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6 flex flex-col gap-4">
                                    <Button variant="outline">Sign in</Button>
                                    <Button>Start for free</Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            </div>
        </section>
    );
};

export default Header;
