'use client';   //import React from 'react'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"      // //<a>// tag  relod problm off



function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
       <Menu setActive={setActive}>
          <Link href={"/"}>
                <MenuItem setActive={setActive}  active={active} item="Home ">

                </MenuItem>
          </Link>
                <MenuItem setActive={setActive}  active={active} item="Our courses">
                    <div className="flex flex-col space-y-4 text-sm font-bold">
                         <HoveredLink href="/Courses"> Basic Music theory</HoveredLink>
                         <HoveredLink href="/Advancecourse">Advance Composition</HoveredLink>
                         <HoveredLink href="/Courses">Songwritting</HoveredLink>
                         <HoveredLink href="/Courses"> Music Production</HoveredLink>
                    </div>
                </MenuItem>
          <Link href={"/contact"}>
                <MenuItem setActive={setActive}  active={active} item="Contact Us">

                </MenuItem>
          </Link>
       </Menu>
    </div>
  )
}

export default Navbar
