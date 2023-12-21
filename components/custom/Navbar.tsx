"use client";
import React, { Component, use } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";



type State = {};



type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
     <Card className="w-[876px] flex p-4 gap-x-4 justify-center">
          <div className="w-[100%]  space-y-1.5 flex  items-center">
          <h1 className="bg-black text-white p-2 rounded-md">GIPHY Search</h1>

          </div>
          <Button className="bg-rose-500 hover:bg-rose-700 text-white">
            <Link href={"/sign-in"}>Sign In</Link>
          </Button>
          <Button className="bg-rose-500 hover:bg-rose-700 text-white">
            <Link href={"/sign-up"}>Sign Up</Link>
          </Button>
        </Card> 
    </>
  )
}

export default Navbar