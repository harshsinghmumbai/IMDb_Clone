"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ModeToggle } from "./ModeToggle";
import { SearchBox } from "./SearchBox";

const Header = () => {
  const li = [
    { title: "Popular" },
    { title: "Upcoming" },
    { title: "Top Rated" },
  ];
  return (
    <>
      <header className="flex justify-between items-center py-2 p-1 sm:px-9 md:px-5  border-b rounded-lg border-gray-800">
        <div className="flex justify-center items-center space-x-1">
          <Sheet>
            <SheetTrigger asChild>
              <GiHamburgerMenu className="text-2xl md:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"} className="p-11">
              <SheetHeader className="mb-5">
                <Image
                  src="/logo.svg"
                  alt="Image"
                  className="object-cover w-[5.5rem] h-[2.8rem] rounded-md"
                  width={100}
                  height={100}
                />
              </SheetHeader>
              <nav>
                <ul className="space-y-3 font-semibold text-lg">
                  {li.map((items, id) => {
                    const { title } = items;
                    return <li key={id}>{title}</li>;
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="block md:hidden">
            <ModeToggle />
          </div>
        </div>
        <Image
          src="/logo.svg"
          alt="Image"
          className="object-cover w-[6rem] h-[2.2rem] xl:w-[5.5rem] xl:h-[2rem] rounded-lg mx-5"
          width={100}
          height={100}
        />
        <nav className="hidden lg:block">
          <ul className="flex space-x-10 lg:space-x-5 font-semibold font-serif text-lg xl:text-xl">
            {li.map((items, id) => {
              const { title } = items;
              return <li key={id}>{title}</li>;
            })}
          </ul>
        </nav>
        <SearchBox />
        <div className="flex justify-center items-center space-x-1 ml-2 md:space-x-3 lg:space-x-9 md:ml-5 sm:space-x-7">
          <Avatar className="w-8 h-8">
            <AspectRatio ratio={16 / 9}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            </AspectRatio>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
