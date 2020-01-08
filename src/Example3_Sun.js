import React from "react";
import Icon from "@material-ui/core/Icon";
import "typeface-roboto";
import PropTypes from "prop-types";
import "material-design-icons-iconfont/dist/material-design-icons.css";

function Iconc(props) {
  const { icon } = props;
  return (
    <div>
      <Icon>{icon}</Icon>
      <i className="material-icons">{icon}</i>
    </div>
  );
}
Iconc.propTypes = {
  icon: PropTypes.string
};
Iconc.defaultProps = {
  //注意defaultProps
  icon: "book"
};
export default Iconc;
