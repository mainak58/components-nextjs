"use client";
import { useRouter } from "next/navigation";
function ForumComponents() {
  const router = useRouter();

  function routeClick(name: string) {
    router.push(`/${name}`);
  }

  return (
    <div>
      <button
        className="m-2 p-2 bg-amber-500"
        onClick={() => routeClick("home")}
      >
        Home
      </button>
      <button
        className="m-2 p-2 bg-amber-500"
        onClick={() => routeClick("paid")}
      >
        Paid
      </button>
      <button
        className="m-2 p-2 bg-amber-500"
        onClick={() => routeClick("paid-community")}
      >
        Paid community
      </button>
    </div>
  );
}

export default ForumComponents;
