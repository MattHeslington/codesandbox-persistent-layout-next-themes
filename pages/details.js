import Head from 'next/head'
import Layout from 'layouts/layout'

export default function Details() {
    return (
        <div className='w-full h-full'>
            <Head>
                <title>Details | Persistent Layouts with Next Themes</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <span className='text-black dark:text-white'>details</span>
        
        </div>
    )
}

Details.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}