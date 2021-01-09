import { wrapper } from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
