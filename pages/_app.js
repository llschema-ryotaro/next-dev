// pages/_app.js
import Layout from '../components/layout'
import 'styles/reset.scss'
import 'styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
