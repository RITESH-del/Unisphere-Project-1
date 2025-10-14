
import { SidebarProvider} from "@/components/ui/sidebar"
import {AppSidebar} from '../components/app-sidebar';
import {Outlet} from 'react-router-dom';

function Root() {
    return (
        <>
    <SidebarProvider className="border-r-8 m-0 p-0">
      <AppSidebar />
        {/* <SidebarTrigger /> */}
      <div>
        <Outlet />
      </div>
    </SidebarProvider>
    
        </>
    )
}

export default Root;