import { useRouteError } from 'react-router';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="section section-center text-center">
      <h2>{error.message}</h2>
    </div>
  );
};
export default Error;
