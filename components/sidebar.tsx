"use client"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { SidebarItems } from "./sidebar-items"

type Props = {
    className?: Props | undefined
}
export const Sidebar = ({className}: Props) => {
  

    return (
       
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col bg-blue-100",
            className,
          )}>
            <Link href={"/learn"}>
                     <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
           <Image height={40} width={40} src={"/mascot.svg"} alt="mascot"/>
           <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
             DuaLingo
           </h1>
      </div>
     </Link>
     <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItems label="learn" 
        href="/learn" 
        iconSrc="/learn.svg"
        />
        <SidebarItems label="leaderboard" 
        href="/leaderboard" 
        iconSrc="/leaderboard.svg"
        />
        <SidebarItems label="quests" 
        href="/quests" 
        iconSrc="/quests.svg"
        />
        <SidebarItems label="shop" 
        href="/shop" 
        iconSrc="/shop.svg"
        />
     </div>

          </div>
    )
}