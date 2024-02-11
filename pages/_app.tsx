import { wrapper } from '../redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
