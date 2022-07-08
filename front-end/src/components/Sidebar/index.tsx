import React, { PropsWithoutRef } from 'react'
import { Container, Drawer } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import './style.css'

interface SidebarProps {
    toggleSidebar: boolean
    showSiderbar: () => void
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {

  return (
   <Drawer 
    open={props.toggleSidebar}
    anchor={'right'}
   >       
        <div className='p-7 px-[32px]'>
            <div className='flex justify-end w-full mb-5'>
                <CloseIcon fontSize="medium" onClick={props.showSiderbar} className='cursor-pointer right-2'/>
            </div>
            <div className='flex flex-col w-60 gap-3'>
                <span>teste 1</span>
                <span>teste 2</span>
                <span>teste 3</span>
                <span>teste 4</span>
            </div>
        </div>
   </Drawer>
  )
}

export default Sidebar