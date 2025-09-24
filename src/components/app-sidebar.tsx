import { Home, Fence, Sun, ShieldBan, LogOut, Menu } from "lucide-react"
import { useSidebar } from "@/components/ui/sidebar"
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
    <Sidebar variant="sidebar" collapsible="icon" className="bg-[#7785FC] rounded-r-4xl w-[150px]">
      <SidebarContent className="bg-[#7785FC] rounded-r-4xl">
        <SidebarGroup className="flex flex-cols justify-center min-h-full">
          <SidebarGroupContent>
            <SidebarMenu>

                <SidebarMenuItem>
                    <SidebarMenuButton onClick={toggleSidebar} className="text-[#fff] hover:text-[#000]" asChild>
                        <a href="#">
                            <Menu className="text-[#fff] h-[27px] w-[27px]" />
                            <span>Menu</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-[#fff] hover:text-[#000]">
                    <a href={item.url}>
                      <item.icon className="text-[#fff] h-[27px] w-[27px]"/>
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