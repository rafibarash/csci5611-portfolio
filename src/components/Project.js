import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, List, Link } from "@material-ui/core";
import Video from "./Video";

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
        <SectionList
          list={group}
          renderItem={name => (
            <List key={name} disablePadding={true}>
              {name}
            </List>
          )}
        />
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
        <Video url={videoLink} title={title} />
      </Section>
      <Section>
        <SectionHeader text="Features" />
        <SectionList
          list={featureList}
          renderItem={feat => (
            <List key={feat} disablePadding={true}>
              {feat}
            </List>
          )}
        />
      </Section>
      <Section>
        <SectionHeader text="Images" />
        <SectionList
          list={imageList}
          renderItem={({ url, alt }) => (
            <>
              <img src={url} alt={alt} className={classes.img} />
              <Typography variant="subtitle2">{alt}</Typography>
            </>
          )}
        />
      </Section>
      <Section>
        <SectionHeader text="Tools and Libraries" />
        <SectionList
          list={tools}
          renderItem={({ title, url }) => (
            <Link href={url} target="_blank" rel="noreferrer">
              {title}
            </Link>
          )}
        />
      </Section>
      {otherResources && (
        <Section>
          <SectionHeader text="Additional Resources" />
          <SectionList
            list={otherResources}
            renderItem={({ title, url }) => (
              <Link href={url} target="_blank" rel="noreferrer">
                {title}
              </Link>
            )}
          />
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

const SectionList = ({ list, renderItem }) => (
  <>{list.map(item => renderItem(item))}</>
);

const useStyles = makeStyles(theme => ({
  root: {
    padding: "2rem",
    marginTop: 0,
    maxWidth: "1000px",
    marginLeft: "1rem",
  },
  section: {
    marginTop: "1rem",
  },
  img: {
    maxHeight: "300px",
    borderRadius: "8px",
  },
}));

export default Project;
