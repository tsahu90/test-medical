import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import styles from "./left-menu.module.css";
import { Drawer, Tooltip } from "@mui/material";
import { TroubleshootOutlined } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function LeftMenu() {

  return (
    <React.Fragment>
      <nav className={styles.nav} aria-label="hamburger menu">
        <Drawer variant="permanent" open={TroubleshootOutlined} className={styles.drawer}>
          <List>
            <ListItem className={styles.left_menu_list}>
              <ListItemIcon>
                <MenuIcon color="white" />
              </ListItemIcon>
            </ListItem>
            <Tooltip title="Home" placement="right">
              <ListItem className={styles.left_menu_list}>
                <ListItemIcon>
                  <HomeIcon color="white" />
                </ListItemIcon>
              </ListItem>
            </Tooltip>
            <ListItem className={styles.left_menu_list}>
              <ListItemIcon>
                <AccessTimeIcon color="white" />
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </nav>
    </React.Fragment>
  );
}
