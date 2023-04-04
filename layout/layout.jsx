import { Footer, Navbar } from "@/components";
import { Box } from "@mui/material";
import React from "react";

const Layout = ({ children }) => {
  return (
 
    <Box>
      <Navbar />
      <Box>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
