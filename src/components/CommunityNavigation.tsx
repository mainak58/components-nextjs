"use client";
import React, { useState } from "react";

interface Subsection {
  id: number;
  name: string;
}

interface Section {
  id: number;
  name: string;
  subsection?: Subsection[];
}

function CommunityNavigation({ sections }: { sections: Section[] }) {
  const [openSectionId, setOpenSectionId] = useState<number | null>(null);

  const toggleSection = (id: number) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="h-full w-full flex justify-end">
      <div className="m-3 bg-green-500 min-h-[150px] w-[700px] flex flex-col justify-center items-center">
        <p className="text-white text-lg font-bold mb-2">
          Make it Dynamic either Home | Paid | Paid Community
        </p>

        <div className="flex flex-col bg-yellow-600 p-3 w-full">
          {sections.map((section) => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => toggleSection(section.id)}
                className="font-semibold text-left w-full hover:underline"
              >
                {section.name}
                {section.subsection && (
                  <span className="ml-2 text-sm">
                    {openSectionId === section.id ? "▲" : "▼"}
                  </span>
                )}
              </button>

              {openSectionId === section.id && section.subsection && (
                <div className="ml-4 mt-1 text-sm text-white">
                  {section.subsection.map((sub) => (
                    <div key={sub.id}>↳ {sub.name}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunityNavigation;
