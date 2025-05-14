// features/posts/PostView.js
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
  return (
    <div>
        <h2>Posts</h2>
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {posts.map((post) => {
            return (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            )
        })}
    </div>
  )
};

export default PostView;
