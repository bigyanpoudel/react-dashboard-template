import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

const BreadCumb = ({ rootTitle, currentTitle }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: "2rem" }}>
      <a href="/" style={{ color: "#25233c" }}>
        {rootTitle}
      </a>
      <a color="inherit" href="/getting-started/installation/">
        Back
      </a>
      <Typography style={{ color: "#6259ca !important" }}>
        {currentTitle}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadCumb;
