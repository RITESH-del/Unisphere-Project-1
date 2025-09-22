import { Calendar, Home, Inbox, Sun, LogOut, Menu } from "lucide-react"
import {CustomTrigger} from "./CustomTrigger.tsx";
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
    icon: Inbox,
  },
  {
    title: "Blacklist",
    url: "#",
    icon: Calendar,
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
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>

                <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                        <a href="#">
                            <Menu />
                            <span>Menu</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
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