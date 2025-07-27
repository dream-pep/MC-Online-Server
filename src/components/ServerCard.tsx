import React from "react";

export default function ServerCard() {
  return (
    <div className="flex bg-white rounded-lg shadow-sm p-6 mb-4 items-center gap-6 border border-gray-100">
      <div className="w-32 h-24 bg-gray-100 rounded flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14" />
          <polyline points="3 17 12 12 21 17" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-lg font-semibold">服务器名称</span>
          <span className="text-xs text-yellow-500 flex items-center gap-0.5">
            ★★★★★
          </span>
          <span className="text-xs text-gray-400 ml-2">18.3M</span>
          <span className="text-xs text-gray-400 ml-2">11.4k</span>
          <span className="text-xs text-blue-500 ml-2">服务器主</span>
        </div>
        <div className="text-xs text-gray-400 truncate mb-2">商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述</div>
        <div className="flex gap-2 mb-2">
          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500">标签</span>
          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500">标签</span>
          <span className="px-2 py-0.5 bg-gray-100 rounded text-xs text-gray-500">标签</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 min-w-[100px]">
        <button className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 transition">立即加入</button>
        <button className="bg-gray-100 text-gray-400 px-2 py-1 rounded hover:bg-gray-200 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
} 