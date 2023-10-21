"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { all_navigations_items } from "@/utils/navigations/navigation_items"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"


export function NavSheet() {
    return (
        <div className="grid grid-cols-2 gap-2">
            <Sheet >
                <SheetTrigger asChild>
                    <Menu size={30} />
                </SheetTrigger>
                <SheetContent side={"right"}>
                    <ModeToggle />
                    <div className="flex flex-col items-center justify-center h-screen">
                        {all_navigations_items.map(nav => (
                            <Link className="pt-10 hover:text-primary" key={nav.id} href={nav.path} passHref>
                                <p>{nav.name}</p>
                            </Link>
                        ))}

                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
