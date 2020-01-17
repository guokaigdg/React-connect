import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fatherWrap: {
    width: 446,
    height: 356,
    background: "rgba(63,68,71,1)",
    boxShadow: " 0 2 4 0 rgba(0,0,0,0.3)",
    borderRadius: "2 0 2 2"
  }
});
function CodeEditor() {
  const classes = useStyles();

  useEffect(() => {
    console.log("🙆‍♂️");
  });

  return (
    <div className={classes.fatherWrap}>
      <div>路由器</div>
      <div>View区</div>
    </div>
  );
}

export default CodeEditor;
