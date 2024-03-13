const PrivateRoute = ({ children, ...rest }) => {
  console.log(children);
  // console.log(rest);
  return <div>PrivateRoute</div>;
};
export default PrivateRoute;
