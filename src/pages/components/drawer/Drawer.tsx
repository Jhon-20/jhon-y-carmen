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

    >
      <div
        role="presentation"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={() => toggleDrawer(false)}

      >
        {content}
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
