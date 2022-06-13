import Head from 'next/head';
import Link from 'next/link';

//import { getAllPosts } from '../../lib/api'

const Novel = ({ allPosts: { edges } }) => (
  <div>
    <Head>
      <title>Blog articles page</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Latest blog articles</h1>
      <hr />
      <section>
        {edges.map(({ node }) => (
          <div key={node.id}>
            <div>
              <h2>{node.title}</h2>
              <Link href={`/blog/${node.slug}`}>
                <a>Read more</a>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export default Novel;
