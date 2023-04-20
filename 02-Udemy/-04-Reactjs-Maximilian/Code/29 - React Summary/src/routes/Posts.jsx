import { Outlet } from 'react-router-dom';
import PostsList from '../components/PostsList';
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export async function loader() {
  const res = await fetch('http://localhost:8080/posts');
  const resData = await res.json();
  return resData.posts;
}

export default Posts;
