import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { fromImageToUrl, API_URL } from '../utils/urls'
import { twoDecimals } from '../utils/format'

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {products.map(product => (
        <div key={product.name} className={styles.products}>
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className={styles.products__Row}>
                <div className={styles.products__ColImg}>
                  <img src={fromImageToUrl(product.thumb_img)}/>
                </div>
                <div className={styles.products__Col}>{product.name} ${twoDecimals(product.price)}</div>
              </div>
            </a>
          </Link>
        </div>
      ))}

    </div>
  )
}

export async function getStaticProps() {
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()

  return {
    props: {
      products
    }
  }

}