import CommunityNavigation from "@/components/CommunityNavigation";
import usePaid from "@/hooks/usePaid";

import React from "react";

function page() {
  const paidSection = usePaid();
  return (
    <>
      <div>
        <CommunityNavigation sections={paidSection} />
      </div>
    </>
  );
}

export default page;
