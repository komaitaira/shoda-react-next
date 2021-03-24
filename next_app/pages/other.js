import Layout from '../components/layout'
import Link from 'next/link'

export default function Other() {
  return (
    <div>
      <Layout header="Next.js" title="Other page">      
        <div className="card p-3 text-center">
          <h4 className="my-3　text-primary text-center">This is Other page...</h4>
          <Link href="/">
            <button className="btn btn-primary">&lt;&lt; Back to Index page</button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}