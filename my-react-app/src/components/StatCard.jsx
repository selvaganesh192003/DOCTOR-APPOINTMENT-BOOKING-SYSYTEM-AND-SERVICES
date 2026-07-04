export default function StatCard({ title, count, color = "bg-white", textColor = "text-gray-800" }) {
  return (
    <div className={`${color} p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center`}>
      <span className={`text-sm mb-2 ${textColor}`}>{title}</span>
      <span className={`text-2xl font-bold ${textColor}`}>{count}</span>
    </div>
  );
}