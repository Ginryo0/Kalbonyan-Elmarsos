// domain.com/
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="news/nextjs">Next JS</Link>
        </li>
        <li>
          <Link href="news/reactjs">React JS</Link>
        </li>
      </ul>
    </>
  );
}
