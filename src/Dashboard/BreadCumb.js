import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from 'next/link'
import {useRouter} from 'next/router'
const BreadCumb = ({rootTitle,currentTitle}) => {
    const router = useRouter()
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{marginBottom:"2rem"}}>
      <Link href="/" style={{color:"#25233c"}} >
        {rootTitle}
      </Link>
      <Link color="inherit" href="/getting-started/installation/">
        Back
      </Link>
      <Typography style={{color:"#6259ca !important"}}>{currentTitle}</Typography>
    </Breadcrumbs>
  );
};

export default BreadCumb;
