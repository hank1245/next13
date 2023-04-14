import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link href="/">Hoem</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </>
  );
}
