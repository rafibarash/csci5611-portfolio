import React from "react";

const Video = ({ url, title }) => (
  <iframe
    width="560"
    height="315"
    src={url}
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    title={title}
  />
);

export default Video;
