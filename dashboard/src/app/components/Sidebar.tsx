import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-full gap-4 p-4 border-r-2 border-foreground">
      <Link href="/" className="text-lg border-b-2 border-foreground">
        Home
      </Link>
      <Link href="/settings" className="text-lg border-b-2 border-foreground">
        Settings
      </Link>
    </div>
  );
}
