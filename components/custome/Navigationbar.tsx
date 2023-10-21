"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navigation_items_nochildren, navigation_items_withchildren } from "@/utils/navigations/navigation_items"
import { Button } from "../ui/button"
import { ModeToggle } from "./ModeToggle"
import { NavSheet } from "./NavSheet"


export function Navigationbar() {
    return (
        <div className="flex justify-between md:justify-evenly shadow-lg ">
            <div>
                <Link href="/" >
                    <p className="scroll-m-20 text-lg tracking-tight p-6">
                        My stupid Logo
                    </p>
                </Link>
            </div>
            <NavigationMenu className="hidden md:flex" >
                <NavigationMenuList>
                    {navigation_items_withchildren.map(navwc => (
                        <NavigationMenuItem key={navwc.id}>
                            <NavigationMenuTrigger>{navwc.name}</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                href="/services"
                                            >
                                                <div className="mb-2 mt-4 text-lg font-medium">
                                                    {navwc.name}
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    The services That we provide
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    {navwc.children.map((children, index) => (

                                        <ListItem href={`/services${children.path}`} title={children.name} key={index}>
                                            {children.description}
                                        </ListItem>
                                    ))}

                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}

                    {navigation_items_nochildren.map((navch, _) => (
                        <NavigationMenuItem
                            key={navch.id}
                        >
                            <Link href={navch.path} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {navch.name}
                                </NavigationMenuLink>
                            </Link>

                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className="p-4 hidden md:flex">
                <Link href="/contact" passHref>
                    <Button variant="destructive" className="ml-4 mr-6" >
                        Book a demo
                    </Button>
                </Link>

                <ModeToggle />

            </div>
            <div className="flex pt-5 md:hidden hover:text-teal-600">

                <NavSheet />
            </div>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
