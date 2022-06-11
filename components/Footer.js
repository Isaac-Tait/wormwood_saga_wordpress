import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-between text-xs mx-1">
        <div className="text-slate-500 w-1/3">
          <p className="">
            ©{new Date().getFullYear()} - Built with&nbsp;
            <a
              href="https://nextjs.org/"
              className="text-indigo-500 hover:text-amber-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            ,{' '}
            <a
              href="https://tailwindcss.com"
              className="text-indigo-500 hover:text-lime-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </a>{' '}
            &&&nbsp;
            <a
              href="https://ghost.org/"
              className="text-indigo-500 hover:text-lime-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ghost
            </a>
            .
          </p>
        </div>
        <div className="mt-2 flex justify-center w-1/3">
          <a
            href="https://github.com/Isaac-Tait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/mountaintopcoding-127956/image/upload/v1653865755/GitHub/GitHub-Mark-64px_c6czf5.png"
              height={20}
              width={20}
              alt={'GitHub'}
            />
          </a>
        </div>
        <div className="text-slate-500 w-1/3 flex justify-end">
          <p className="">
            Another&nbsp;
            <a
              href="https://mountaintopcoding.dev"
              className="text-indigo-500 hover:text-fuchsia-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              mountainTopCoding(
              <span role="img" aria-label="mountain with snow-cap">
                &#127956;
              </span>
              );
            </a>{' '}
            project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
