import { SidebarProvider } from "@/components/ui/sidebar"
import {AppSidebar} from '../components/app-sidebar';
import {CustomTrigger} from '../components/CustomTrigger.tsx';
import {Outlet} from 'react-router-dom';

function Root() {
    return (
        <>
    <SidebarProvider>
      <AppSidebar />
        <CustomTrigger />
      <>
        <Outlet />
      </>
    </SidebarProvider>
        </>
    )
}

export default Root;

