import Sidebar from "./components/Sidebar";

export default function NotFound() {
  return (
    <div className="flex flex-row h-full w-full">
      <Sidebar />
      <p className="flex-1 p-8 text-sm text-gray-500">
        Invalid route. Please check the URL and try again.
      </p>
    </div>
  );
}
