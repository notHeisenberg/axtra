import { Link } from "react-router-dom";
import { NavigationMenuBar } from "./NavigationMenuBar"
import logoBlack from "@/assets/logo-black.webp"
import logoWhite from "@/assets/logo-white.webp"
import { useState } from "react";
import { Menu, Search } from "lucide-react";

function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="">
      <div className="mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="header__logo">
            <Link href="/">
              <img 
                src={logoBlack} 
                alt="Site Logo" 
                width="136" 
                height="45"
                className="dark:hidden"
              />
              <img 
                src={logoWhite} 
                alt="Site Logo" 
                width="136" 
                height="45"
                className="hidden dark:block"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <NavigationMenuBar />

          {/* Navbar end */}
          <div className="flex items-center space-x-4">
            {/* Search Popover */}
            <div className="relative">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className=""
              >
                <Search />
              </button>

              {/* Search Popover Content */}
              {isSearchOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border dark:border-gray-700">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full py-2 pl-8 pr-4 text-sm border rounded-lg focus:outline-none focus:border-primary dark:bg-gray-700 dark:border-gray-600"
                      autoFocus
                    />
                    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>
              )}
            </div>

            {/* Hamburger Menu */}
            <button className="">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar 