import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full">
      <Sidebar />
      <div className="flex-1 p-8">
        <p className="text-sm text-gray-500">
          This is Whirlpool. A centralized api scheduler.
        </p>
      </div>
    </div>
  );
}
