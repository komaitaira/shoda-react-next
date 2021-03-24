import Header from './header'
import Link from 'next/link'

export default function Other() {
  const title = "Other"

  return (
    <div>
      <Header title={title}/>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="my-3　text-primary text-center">{title}</h4>
        <div className="card p-3 text-center">
          <p className="h5">これはもう一つのページです</p>
          <Link href="/">
            <a>&lt;&lt; Back to Index page</a>
          </Link>
        </div>
      </div>
    </div>
  )
}