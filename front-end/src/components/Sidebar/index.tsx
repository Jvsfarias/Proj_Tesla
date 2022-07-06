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
        <Container className='pt-3'>
            <CloseIcon fontSize="large" onClick={props.showSiderbar} className='cursor-pointer fixed right-2'/>
            <div className='flex flex-col w-60 gap-3 mt-20'>
                <span>teste 1</span>
                <span>teste 2</span>
                <span>teste 3</span>
                <span>teste 4</span>
            </div>
        </Container>
   </Drawer>
  )
}

export default Sidebar