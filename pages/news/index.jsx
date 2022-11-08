import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/next-js-is-great">Next js is great framework</Link>
        </li>
        <li>something else</li>
      </ul>
    </>
  );
};

export default NewsPage;
