import React from "react";
import { Button, Fab, TextField } from "@material-ui/core";
import { Icon } from "@material-ui/core";
// import AndroidIcon from "@material-ui/icons/Android";
// import AppleIcon from "@material-ui/icons/Apple";
// import Battery20Icon from "@material-ui/icons/Battery20";
// import { Battery20Icon } from "@material-ui/icons";
// import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import {
  AccessAlarm,
  ThreeDRotation
  // AccountCircleIcon
  // Battery20Icon
} from "@material-ui/icons";
import { Display, SidebarSwitch } from "solidoc-ase-component-lib";

function Example2() {
  return (
    <div>
      <AccessAlarm color="primary" fontSize="large"></AccessAlarm>
      <ThreeDRotation></ThreeDRotation>
      {/* <Battery20Icon></Battery20Icon> */}
      <Button variant="contained" color="primary">
        你好，世界
      </Button>
      <Fab color="primary" aria-label="add"></Fab>
      <Fab color="secondary" aria-label="edit"></Fab>
      <Fab disabled aria-label="like"></Fab>

      <Icon color="primary" fontSize="small">
        222
      </Icon>
      {/* <AndroidIcon /> */}
      {/* <AppleIcon /> */}

      <TextField />

      <SidebarSwitch
        icon={"🐒"}
        title={"郭凯工作区域ccccccccc"}
        onSelct={() => {
          alert("ok ");
        }}
      />
      <SidebarSwitch
        icon={"🐒"}
        title={"郭凯工作区域ccccccccc"}
        onSelct={() => {
          alert("ok ");
        }}
      />
      <SidebarSwitch
        icon={"🐒"}
        title={"郭凯工作区域ccccccccc"}
        onSelct={() => {
          alert("ok ");
        }}
      />
      <SidebarSwitch
        icon={"🐒"}
        title={"郭凯工作区域ccccccccc"}
        onSelct={() => {
          alert("ok ");
        }}
      />
      <Display
        icon={"🍉"}
        title={"目录栏目"}
        onSelct={() => {
          alert("ok ");
        }}
      />
      <Display
        icon={"🍉"}
        title={"目录栏目"}
        onSelct={() => {
          alert("ok ");
        }}
      />
    </div>
  );
}
export default Example2;
