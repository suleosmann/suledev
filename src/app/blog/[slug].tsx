import React from 'react';
import { useRouter } from 'next/router';

const posts = {
  'first-post': {
    title: 'First Post',
    date: '2023-01-01',
    content: 'This is the content of the first post.',
  },
  'second-post': {
    title: 'Second Post',
    date: '2023-02-01',
    content: 'This is the content of the second post.',
  },
};

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (typeof slug !== 'string') {
    return (
      <div>
        <h1>Post Not Found</h1>
      </div>
    );
  }

  const post = posts[slug];

  if (!post) {
    return (
      <div>
        <h1>Post Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div>{post.content}</div>
    </div>
  );
};

export default Post;