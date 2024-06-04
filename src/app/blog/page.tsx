import React from 'react'
import Link from 'next/link';


const posts = [
  { slug: 'first-post', title: 'First Post', date: '2023-01-01' },
  { slug: 'second-post', title: 'Second Post', date: '2023-02-01' },
];

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <p className="text-gray-600">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page
