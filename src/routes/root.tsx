import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import {AppSidebar} from '../components/app-sidebar';
import {Outlet} from 'react-router-dom';

function Root() {
    return (
        <>
    <SidebarProvider className="border-r-8">
      <AppSidebar />
        {/* <SidebarTrigger /> */}
      <>
        <Outlet />
      </>
    </SidebarProvider>
        </>
    )
}

export default Root;

