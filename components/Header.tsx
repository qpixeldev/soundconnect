import { AppBar, Toolbar } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const Header = (): JSX.Element => (
  <AppBar>
    <Toolbar>
      <Link href="/">Sound Connect</Link>
    </Toolbar>
  </AppBar>
);

export default Header;
