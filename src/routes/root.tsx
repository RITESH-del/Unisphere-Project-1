import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from '../components/app-sidebar';
import HomePage from "@/components/HomePage";
  
function Root() {
    return (
        <SidebarProvider className="border-r-8">
            <AppSidebar />
            <div className="main-content">
                <HomePage />
            </div>
        </SidebarProvider>
    )
}

export default Root;