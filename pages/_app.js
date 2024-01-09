import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import Head from 'next/head'

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Fonts />

            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>

        </ChakraProvider>
    )
}

export default Website