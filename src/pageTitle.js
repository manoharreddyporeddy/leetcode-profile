import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="" content={description} />
    </Helmet>
  );
};

export default PageTitle;
