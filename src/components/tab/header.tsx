import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabHeader = ({
  tabs,
  handleChange,
  setValue,
}: {
  tabs: { name: string; value: number }[];
  handleChange: any;
  setValue: number;
}) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={setValue}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {tabs.map((tab) => (
          <Tab key={tab.value} label={tab.name} {...a11yProps(tab.value)} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabHeader;
