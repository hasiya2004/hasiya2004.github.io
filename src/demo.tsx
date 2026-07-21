import React from "react";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-20 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-slate-900">
          Remote{" "}
          <span className="text-sky-500">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Connecting Hasindu Senarathna's SLTC AI & Data Science Hub globally.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 7.8731, lng: 80.7718 }, // Sri Lanka (Hasindu's Base)
            end: { lat: 37.3861, lng: -122.0839 }, // Silicon Valley
          },
          {
            start: { lat: 7.8731, lng: 80.7718 }, // Sri Lanka
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 7.8731, lng: 80.7718 }, // Sri Lanka
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
          },
          {
            start: { lat: 7.8731, lng: 80.7718 }, // Sri Lanka
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 7.8731, lng: 80.7718 }, // Sri Lanka
          },
        ]}
      />
    </div>
  );
}

export default WorldMapDemo;
