import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full h-14 flex items-center justify-between px-8 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <Image src="/next.svg" alt="MC Logo" width={32} height={32} />
        <span className="text-xl font-bold text-blue-700">MC</span>
        <span className="text-xl font-semibold text-gray-700 ml-1">Online Shop</span>
      </div>
      <nav className="flex-1 flex items-center justify-center">
        <ul className="flex gap-6 text-gray-700 text-base font-medium">
          <li className="hover:text-blue-600 cursor-pointer relative after:block after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300">
            首页
          </li>
          <li className="hover:text-blue-600 cursor-pointer relative after:block after:w-full after:h-0.5 after:bg-blue-600 after:scale-x-100 after:transition-transform after:origin-left after:duration-300">
            仓库
          </li>
          <li className="hover:text-blue-600 cursor-pointer">社区</li>
          <li className="hover:text-blue-600 cursor-pointer">创作中心</li>
          <li className="hover:text-blue-600 cursor-pointer">开发者</li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-100 rounded px-2">
          <input
            className="bg-transparent outline-none px-2 py-1 text-sm text-gray-700"
            placeholder="请输入内容"
          />
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-gray-400 text-lg">👤</span>
        </div>
        <span className="text-gray-400 text-sm">用户名</span>
      </div>
    </header>
  );
} 