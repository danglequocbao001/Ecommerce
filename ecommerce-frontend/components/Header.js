import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default () => (
    <div>
        <div className={styles.title}>
            <Link href="/">
                <a>
                    <h1>
                        The E-Commerce
                    </h1>
                </a>
            </Link>
        </div>
    </div>
)