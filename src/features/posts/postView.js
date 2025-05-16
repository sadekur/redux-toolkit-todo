// features/posts/PostView.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">📚 Latest Posts</h2>

      {isLoading && <div className="text-center text-gray-500">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white border border-gray-200 shadow-sm rounded-xl p-5 hover:shadow-lg transition duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PostView;
