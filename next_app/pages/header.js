import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Header(props) {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"></link>
    </Head>
  )
}