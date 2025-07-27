import ServerCard from "../../components/ServerCard";
import Header from "../../components/Header";

export default function ServersPage() {
  return (
    <>
      <Header />
      <div className="flex bg-gray-50 min-h-screen pt-4">
        {/* 左侧分类栏 */}
        <aside className="w-64 bg-white rounded-lg shadow-sm p-4 mr-4 h-[calc(100vh-64px)] flex flex-col">
          <div className="font-bold text-lg mb-4">服务器列表</div>
          <ul className="flex-1 space-y-2 text-gray-600 text-base">
            <li className="bg-blue-50 text-blue-600 rounded px-3 py-1 font-medium">全部</li>
            <li className="px-3 py-1">世界生成</li>
            <li className="px-3 py-1">生物圈</li>
            <li className="px-3 py-1">天然结构</li>
            <li className="px-3 py-1">维度</li>
            <li className="px-3 py-1">生物</li>
            <li className="px-3 py-1">科技</li>
            <li className="px-3 py-1">生存</li>
            <li className="px-3 py-1">农业</li>
            <li className="px-3 py-1">食物</li>
            <li className="px-3 py-1">装备与工具</li>
            <li className="px-3 py-1">冒险与探索</li>
            <li className="px-3 py-1">建筑与装饰</li>
            <li className="px-3 py-1">信息组件</li>
            <li className="px-3 py-1">支持库</li>
            <li className="px-3 py-1">服务端用联</li>
          </ul>
          <button className="mt-4 text-gray-400 flex items-center gap-1 text-sm"><span className="material-icons">menu</span> 收起</button>
        </aside>
        {/* 中间服务器卡片列表 */}
        <main className="flex-1 flex flex-col gap-4">
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            近期打击关于非法美化服务器的相关规定已发放，请各位查收！
          </div>
          <ServerCard />
          <ServerCard />
          <ServerCard />
        </main>
        {/* 右侧热门文章和评论 */}
        <aside className="w-80 ml-4 flex flex-col gap-4">
          <div className="bg-orange-50 rounded-lg p-4 mb-2">
            <div className="text-orange-500 font-bold mb-2">热门文章/评论</div>
            <div className="bg-white rounded-lg p-4 mb-2">
              <div className="font-bold text-gray-700 mb-1">标题标题标题标题标题</div>
              <div className="bg-gray-100 w-full h-24 rounded flex items-center justify-center mb-2">
                <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14" />
                  <polyline points="3 17 12 12 21 17" />
                </svg>
              </div>
              <div className="text-xs text-gray-400 mb-2">文本内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容</div>
              <div className="text-xs text-gray-400">用户名 - 2024年3月26日</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg">👤</span>
                </div>
                <span className="font-bold text-gray-700">用户名</span>
                <span className="text-xs text-gray-400">- 2024年3月26日</span>
              </div>
              <div className="text-xs text-gray-400 mb-2">正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容正文内容</div>
              <div className="flex gap-4 text-xs text-gray-400">
                <span>99赞</span>
                <span>99评论</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
} 