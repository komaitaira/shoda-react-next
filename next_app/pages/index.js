import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  let title = "Next.js sample page.";
  let message = "React Next.js sample page.";
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"></link>
      </Head>

      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3">{title}</h4>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}.</p>
        </div>
      </div>
    </div>
  )
}
