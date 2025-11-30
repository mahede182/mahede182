import React from "react";
import { motion } from "framer-motion";

const SkillCategory = React.memo(function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="dark:bg-slate-800/30 background p-6 rounded-2xl border border-slate-800/30 hover:border-primary/50 transition-colors"
    >
      <h3 className="text-xl font-semibold foreground mb-4 border-b border-slate-800 pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-full hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
});

export default SkillCategory;