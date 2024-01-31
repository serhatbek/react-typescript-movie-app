import './Error.scss';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error: any = useRouteError();
  // console.log('error', error);
  return (
    <section className='section section-error'>
      <div className='container'>
        <h2>Oops!</h2>
        <h3>{error.status}</h3>
        <p>{error.statusText}</p>
        <p>{error.message}</p>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </section>
  );
};

export default Error;
