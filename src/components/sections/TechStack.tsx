"use client";

import React from "react";

import { portfolioData } from "~/constants/portfolio.data";
import { SectionHeading } from "~/components/ui/SectionHeading";
import SkillCategory from "./SkillCategory";

export const TechStack = React.memo(function TechStack() {
  return (
    <div className="h-full">
      <SectionHeading
        title="Tech Stack"
        subtitle="Technologies I work with"
        center={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SkillCategory title="Mobile" skills={portfolioData.skills.mobile} />
        <SkillCategory
          title="Libraries"
          skills={portfolioData.skills.libraries}
        />
        <SkillCategory title="Web" skills={portfolioData.skills.web} />
        <SkillCategory title="Tools" skills={portfolioData.skills.tools} />
      </div>
    </div>
  );
});
