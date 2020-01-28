import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import Project from "./Project";

import projectData from "../projects";

const ProjectTabs = () => {
  console.log(projectData);
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Project Tabs"
        indicatorColor="primary"
        className={classes.tabs}
      >
        {projectData.map((project, i) => (
          <Tab label={project.title} {...a11yProps(i)} key={project.title} />
        ))}
      </Tabs>
      {projectData.map((project, i) => (
        <TabPanel value={value} index={i} key={project.title}>
          <Project project={project} />
        </TabPanel>
      ))}
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    // height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const a11yProps = index => ({
  id: `project-tab-${index}`,
  "aria-controls": `project-tabpanel-${index}`,
});

export default ProjectTabs;
