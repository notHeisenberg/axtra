import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import { TextAnimation } from "@/components/animations/TextAnimation"
import { NavigationContent } from "@/components/navigation/NavigationContent"
import { navigationMenuData } from "@/data/navigationMenuData"

export function NavigationMenuBar() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="flex gap-2">
        {Object.entries(navigationMenuData).map(([key, data]) => (
          <NavigationMenuItem key={key}>
            {key === "about" || key === "contact" ? (
              <Link to={`/${key}`}>
                <NavigationMenuLink className="group flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground">
                  <TextAnimation text={data.title} />
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger className="group flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground">
                  <TextAnimation text={data.title} />
                </NavigationMenuTrigger>
                <NavigationContent groups={data?.groups} />
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}