import React from 'react';
import { Drawer } from '@mui/material';

interface CustomDrawerProps {
  isOpen: boolean;
  toggleDrawer: (open: boolean) => void;
  content: React.ReactNode;
  anchor: 'top' | 'bottom' | 'left' | 'right';
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ isOpen, toggleDrawer, content, anchor }) => {
  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={() => toggleDrawer(false)}

      sx={{
        '& .MuiPaper-elevation': {
          height: {
            xs: "630px",
            md: "100%"
          },
          borderTopLeftRadius: {
            xs: "20px",
            md: '0'
          },
          borderTopRightRadius: {
            xs: "20px",
            md: '0',
          },

        },
        '& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper,& .css-1160xiw-MuiPaper-root-MuiDrawer-paper,& .css-9emuhu-MuiPaper-root-MuiDrawer-paper': {

        },

        // '&.css-y411qr-MuiModal-root-MuiDrawer-root': {
        //   borderTopLeftRadius: "20px",
        //   borderTopRightRadius: "20px",
        // }
      }}
    >
      <div
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => toggleDrawer(false)}
        className='w-full lg:w-[400px]'
      >
        {content}
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
