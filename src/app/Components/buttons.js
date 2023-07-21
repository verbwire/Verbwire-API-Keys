import Image from "next/image";

export default function Buttons() {
  return (
    <>
      <div className="flex h-screen flex-col justify-between items-center border-e bg-black">
        <div className="px-4 py-6">
          <ul className="mt-6 space-y-2">
            <li>
              <a
                href=""
                className="block rounded-lg bg-blue-600 px-4 py-2 text-md font-medium text-gray-100"
              >
                Private Keys
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-blue-600 hover:text-white">
                  <span className="text-md font-medium"> Public Keys </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-blue-600 hover:text-white"
                    >
                      Dynamic
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-blue-600 hover:text-white"
                    >
                      Restricted
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
