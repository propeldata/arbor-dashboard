import Link from "next/link"

const menuItems = [
  "Behaviour",
  "Headlines",
  "Schools",
  "Students"
]

export function Sidebar() {
  return (
    <div className="w-48 min-h-screen bg-gray-50 p-4 border-r">
      {menuItems.map((item) => (
        <Link
          key={item}
          href="#"
          className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
        >
          {item}
        </Link>
      ))}
    </div>
  )
}

