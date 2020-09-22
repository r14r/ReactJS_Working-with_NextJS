import Layout from '../../components/layout';

import styles from '../../styles/alert.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
    return (
        <Layout>
            {' '}
            <div
                className={cn({
                    [styles.success]: type === 'success',
                    [styles.error]: type === 'error',
                })}
            >
                Alert Message: {children}
            </div>
        </Layout>
    );
}
