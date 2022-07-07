import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? 'Next Level Partners ' + title
            : 'Next Level Partners Home Page'}
        </title>
        <meta name="description" content="Consultoria Gerencial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
