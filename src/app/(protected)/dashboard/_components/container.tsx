import Link from "next/link";

export default function Container() {
  return (
    <section className="w-full">
      <div className="mx-auto w-[90%] px-4 py-8">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">Dashboard</h1>
        <Link href="/api/logout">
          <button className="rounded-md bg-blue-400 px-6 py-2 text-sm text-white transition-colors hover:bg-blue-500 md:px-8 md:text-base">
            Logout
          </button>
        </Link>
      </div>
    </section>
  );
}
