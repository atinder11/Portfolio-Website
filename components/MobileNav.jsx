import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Navbar from "./Navbar";
import Logo from "./Logo";
import Social from "./Social";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
      <div className="flex flex-col items-center justify-between h-full py-8">
      <div className="flex flex-col items-center gap-y-32">
          <Logo />
          <Navbar
            containerStyles="flex flex-col items-center gap-y-6"
            linkStyles="text-2xl"
          />
          
        </div>
        <Social containerStyles="flex gap-x-4" iconsStyles="text-2xl" />

      </div>
        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
