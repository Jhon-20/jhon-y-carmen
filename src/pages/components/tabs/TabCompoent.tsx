import React, { useState, ReactElement } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

interface IconTabsProps {
  tabs: {
    label: string;
    icon: ReactElement;
    content: React.ReactNode;
  }[];
}

const IconTabs: React.FC<IconTabsProps> = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="icon tabs example" sx={{
        '& .MuiTabs-indicator': {
          backgroundColor: '#86977E', // Color del indicador
        },
        '& .Mui-selected': {
          color: "#86977E !important"
        },

      }}>
        {tabs.map((tab, index) => (
          <Tab

            key={index}
            icon={tab.icon}
            label={tab.label}
            {...a11yProps(index)}
            iconPosition='start'
            sx={{ width: "50%", fontFamily: "Montserrat" }}

          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

export default IconTabs;
