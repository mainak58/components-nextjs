"use client";
import CommunityNavigation from "@/components/CommunityNavigation";
import useHome from "@/hooks/useHome";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const homeSections = useHome();
  return (
    <>
      <div>
        <CommunityNavigation sections={homeSections} />
      </div>
    </>
  );
}

export default page;
