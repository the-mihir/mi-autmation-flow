"use client";

import React from 'react'
import {HomeIcon, Layers2Icon, ShieldCheckIcon,CoinsIcon } from "lucide-react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function DesktpSidebar() {
    const routes = [
        {
            href:"",
            label:"Home",
            icon: HomeIcon,
        },

        {
            href:"workflows",
            label:"Workflows",
            icon: Layers2Icon,
        },

        {
            href:"credentials",
            label:"Credentials",
            icon: ShieldCheckIcon,
        },

        {
            href:"billing",
            label:"Billing",
            icon: CoinsIcon,
        }       
    ]
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[230px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
        <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
            <Logo/>
        </div>

        <div className="flex flex-col p-2">
            {
                routes.map((route)=>(
                    <Link key={route.href} href={route.href} className={buttonVariants({})}>
                        <route.icon size={20}/>
                        {route.label}
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default DesktpSidebar;