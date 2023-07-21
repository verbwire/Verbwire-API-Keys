import Image from "next/image";
import Buttons from "./Components/buttons";

export default function Home() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center items-center">
            <img src="/logo.svg" className="h-16 mx-auto my-6"/>
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Understand Best Practices
              <span className="sm:block"> For Public/Private Keys </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            The project shows how to use public/private keys with scopes and restrictions.
            This project will highlight best practices of using this pattern. 
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/private"
              >
                Private Keys
              </a>
              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/public"
              >
                Public Keys
              </a>
            </div>
          </div>
        </div>
      </section>
      <Buttons />
    </>
  );
}
