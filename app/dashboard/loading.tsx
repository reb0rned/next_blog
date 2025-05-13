export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"></div>
        <div className="relative w-12 h-12 rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
}
