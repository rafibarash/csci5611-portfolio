import React from "react";

const Video = ({ url, title }) => (
  <iframe
    width="560"
    height="315"
    src={url}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={title}
  />
);

export default Video;
