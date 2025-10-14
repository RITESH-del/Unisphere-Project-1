import { Home, Fence, Sun, ShieldBan, LogOut, Menu } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
// import { Blacklist } from '@components/Blacklist.tsx'
import "../index.css"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  
  },
  {
    title: "Bookings",
    url: "#",
    icon: Fence,
  },
  {
    title: "Blacklist",
    url: "#",
    icon: ShieldBan,
  },
  {
    title: "Mode",
    url: "#",
    icon: Sun,
  },
  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
]

export function AppSidebar() {
  const { toggleSidebar } = useSidebar()
  return (
    <Sidebar variant="sidebar" collapsible="icon" className="bg-[#7785FC] rounded-r-4xl m-0 p-0 h-[120vh]">
      <SidebarContent className="bg-[#7785FC] rounded-r-4xl flex flex-cols justify-center min-h-full ">
        <SidebarGroup className="pr-0">
          <SidebarGroupContent>
            <SidebarMenu>

                <SidebarMenuItem>
                    <SidebarMenuButton onClick={toggleSidebar} className="text-[#fff] my-3 hover:text-[#000] rounded-l-full py-2" >
                        <a href="#" className="flex gap-[20px] items-center">
                            <Menu size={28} className="hover:text-[#7785FC]"/>    
                            <span>Menu</span>
                        </a>
                    </SidebarMenuButton>  
                </SidebarMenuItem>

              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="my-3">
                  <SidebarMenuButton className="text-[#fff] hover:text-[#000] rounded-l-full">
                    <a href={item.url} className="flex gap-[20px] items-center">
                      <item.icon size={28} className="hover:text-[#7785FC]"/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}