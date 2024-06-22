"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT DIV */}
      <div className="md:hidden lg:block w-[30%]">
        <Link href={"/"} className="font-bold text-xl text-blue-600">
          SocialWorld
        </Link>
      </div>
      {/* CENTER DIV */}
      <div className="hidden md:flex w-[50%] text-sm ">
        <div className="flex gap-6">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              className="w-4 h-4"
              src={"/home.png"}
              alt="HomePage"
              width={16}
              height={16}
            />
            <span>HomePage</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              className="w-4 h-4"
              src={"/friends.png"}
              alt="Friends"
              width={16}
              height={16}
            />
            <span>Friends</span>
          </Link>
          <Link href={"/"} className="flex gap-2 items-center">
            <Image
              className="w-4 h-4"
              src={"/stories.png"}
              alt="Stories"
              width={16}
              height={16}
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT DIV */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={"/people.png"} alt="People" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/messages.png"}
                alt="messages"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/notifications.png"}
                alt="notifications"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="cursor-pointer flex items-center gap-2 text-sm">
              <Image
                src={"/noAvatar.png"}
                alt="noAvatar"
                width={20}
                height={20}
              />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </div>
  );
};
export default Navbar;
