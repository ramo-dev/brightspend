import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-7xl font-semibold text-blue-400">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <Link href="#">
              <Button className="bg-blue-400">Go back home</Button>
            </Link>
            <Link href="#">
              <Button variant="text" className=" font-semibold">Contact support {" "} <span aria-hidden="true">&rarr;</span></Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
