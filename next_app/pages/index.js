import Layout from '../components/layout'
import MyImage from '../components/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Layout header="Next.js" title="Top page">
        <div className="card p-3 text-center">
          <h4 className="my-3　text-primary text-center">Welcome to Next.js!</h4>
          <MyImage fname="image.jpg" size="300"/>
          <Link href="./other">
            <button className="btn btn-primary">Go to Other page &gt;&gt;</button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}
