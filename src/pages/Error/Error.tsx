import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log('error', error);
  return <div></div>;
};

export default Error;
