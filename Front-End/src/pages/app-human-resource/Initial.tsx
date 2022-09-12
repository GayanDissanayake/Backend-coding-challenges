// material
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import ChallengeOne from "../../components/challengeOne";
import ChallengeTwo from "../../components/challengeTwo";

// ----------------------------------------------------------------------
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
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function InitialPage() {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ px: "20px", pb: 4, pt: 2.5 }}>
        <Typography variant="h3" gutterBottom>
          Back-End Coding Challenges
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Challenge 1" {...a11yProps(0)} />
            <Tab label="Challenge 2" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ChallengeOne />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ChallengeTwo />
        </TabPanel>
      </Box>
    </>
  );
}
