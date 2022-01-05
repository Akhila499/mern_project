import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const NavBar = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <Box
        sx={{
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link href="#">Movies</Link>
        <Link href="#">Create Movie</Link>
      </Box>
    </div>
  );
};

export default NavBar;
