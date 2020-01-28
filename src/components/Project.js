import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, List, Link } from "@material-ui/core";

const Project = ({ project }) => {
  const classes = useStyles();
  const {
    title,
    group,
    description,
    code,
    videoLink,
    featureList,
    imageList,
    tools,
    otherResources,
  } = project;

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" component="h3" gutterBottom>
        {title}
      </Typography>
      <Section>
        <SectionHeader text="Group" />
        <SectionList list={group} />
      </Section>
      <Section>
        <SectionHeader text="Description" />
        <Typography>{description}</Typography>
      </Section>
      <Section>
        <SectionHeader text="Code" />
        <Link href={code} target="_blank" rel="noreferrer">
          {code}
        </Link>
      </Section>
      <Section>
        <SectionHeader text="Video" />
        <Typography>{videoLink}</Typography>
      </Section>
      <Section>
        <SectionHeader text="Features" />
        <SectionList list={featureList} />
      </Section>
      <Section>
        <SectionHeader text="Images" />
        <Typography>{imageList}</Typography>
      </Section>
      <Section>
        <SectionHeader text="Tools and Libraries" />
        <SectionList list={tools} />
      </Section>
      {otherResources && (
        <Section>
          <SectionHeader text="Additional Resources" />
          <SectionList list={otherResources} />
        </Section>
      )}
    </Paper>
  );
};

const Section = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.section}>{children}</Box>;
};

const SectionHeader = ({ text }) => (
  <Typography variant="h6">{text}</Typography>
);

const SectionList = ({ list }) => (
  <>
    {list.map(str => (
      <List key={str} disablePadding={true}>
        {str}
      </List>
    ))}
  </>
);

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2rem",
    maxWidth: "1000px",
    marginLeft: "1rem",
  },
  section: {
    marginTop: "1rem",
  },
}));

export default Project;
