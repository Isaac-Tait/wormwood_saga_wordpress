import Link from 'next/link';

const Header = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1 className="text-3xl font-semibold">Wormwood Saga</h1>
      </div>
      <div className="flex justify-end mr-2 space-x-4 text-xs italic">
        <Link href="https://mountaintopcoding.dev">
          <a>Login</a>
        </Link>
        <Link href="https://mountaintopcoding.dev">
          <a>Register</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
