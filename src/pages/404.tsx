import Link from 'next/link';
import { NextPage } from 'next';

const Custom404: NextPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go back to home page</Link>
    </div>
  );
};

export default Custom404;
