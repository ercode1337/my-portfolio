import React, { useState } from "react";
import { awards } from "@/lib/data";
import { Trophy } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

const INITIAL_VISIBLE = 6;

export default function AwardsSection() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const showAll = visibleCount >= awards.length;

  const handleToggle = () => {
    setVisibleCount(showAll ? INITIAL_VISIBLE : awards.length);
  };

  return (
    <section
      id="courses"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            🏆 Courses ({awards.length})
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {awards.slice(0, visibleCount).map((award, index) => (
            <MotionWrapper key={award.name} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2"
                  >
                    <Trophy className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{award.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1 pl-8">
                  🏢 {award.issuer}
                </p>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {awards.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleToggle}
              className="text-sm text-purple-600 hover:underline hover:text-purple-800 transition"
            >
              {showAll ? "Show Less ▲" : "Show More ▼"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
