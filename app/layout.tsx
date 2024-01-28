import { Layout } from '../components/layout/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.scss';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <body>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
};

export default RootLayout;
