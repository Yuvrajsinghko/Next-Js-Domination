import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul
        className="flex justify-between p-[1vw]"
      >
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex gap-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
