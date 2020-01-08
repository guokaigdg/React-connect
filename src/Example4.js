import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useParams,
  useLocation,
  useHistory
} from "react-router-dom";
import List from "./list";
import Backbutton from "./Example5";

// function Click() {
//   let location = useLocation();
//   console.log(location);
// }
function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(location);
  console.log(history);
  // console.log(location);
  return <div>{slug}</div>;
}
// function BackBack() {
//   const history = useHistory();
//   console.log(history);
// }
function router() {
  return (
    <Router>
      <div>
        <Link to="/">home </Link>
        <Link to="/li">list </Link>
        {/* <Link to="/li/2">list2 </Link> */}
        <Route>
          <Link to="/li/2">list2 </Link>
          <List />
          <BlogPost />
          {/* 返回前进 */}
          <Backbutton />
        </Route>
      </div>
    </Router>
  );
}
export default router;
