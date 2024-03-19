import Link from "next/link"

function Navigation() {
  return (
    <nav className="flex bg-indigo-500 py-4 justify-center gap-4">
        <Link href="/" className="text-white bg-indigo-300 py-2 px-4 rounded-full">
            Home
        </Link>
        <Link href="/edit" className="text-white bg-indigo-300 py-2 px-4 rounded-full">
            Edit
        </Link>
    </nav>
  )
}

export default Navigation