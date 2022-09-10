import "../styles/general.css";
import "tailwindcss/tailwind.css";
import 'react-toastify/dist/ReactToastify.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'flag-icon-css/css/flag-icon.min.css';
import App from 'next/app';

Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props
    return (
        <Component {...pageProps} />
    )
  }
}

export default MyApp;