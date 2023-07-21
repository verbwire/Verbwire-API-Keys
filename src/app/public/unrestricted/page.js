import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mx-auto my-8 max-w-3xl text-center text-white">
        <img src="/logo.svg" className="h-12 mx-auto my-6" />
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Public Keys with Scope
        </h1>
      </div>
      <div className="mx-auto my-8 text-center text-lg leading-loose">
        <p>
          <span className="text-blue-500">Step 1: &nbsp;</span>
          Create a Public Key from &nbsp;
          <strong>
            <a
              href="https://www.verbwire.com/dashboard/apikeys"
              target="_blank"
            >
              Verbwire Dashboard.
            </a>
          </strong>
        </p>
        <p>
          <span className="text-blue-500">Step 2: &nbsp;</span>
          Create a scope for the key according to purpose (To keep your Key
          usage safe 🤫).
        </p>

        <p>
          <span className="text-blue-500">Step 3: &nbsp;</span>
          You&apos;re ready to use your Public Key and make API calls. 🎉
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Link
          className=" rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/public/unrestricted/example"
        >
          Example Component
        </Link>
      </div>
    </>
  );
}
