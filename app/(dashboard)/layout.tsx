import React from 'react'
import { Separator } from '@/components/ui/separator';
import DesktpSidebar from '@/components/sidebar';

function layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex h-screen'>
        <DesktpSidebar/>
        <div className="flex flex-col flex-1 min-h-screen">
           <header className='flex items-center justify-between px-6 py-4 h-[50px] container'>
            Mi Flow
            </header>  
            <Separator/>
            <div className="overflow-auto">
                <div className="flex-1 container py-4 text-accent-forground">
                    {children}
                </div> 
            </div> 
        </div>
    </div>
  )
}

export default layout