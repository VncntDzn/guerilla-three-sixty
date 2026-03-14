import React from "react";
import { Skeleton } from "../ui/skeleton";

export const SkeletonLoader = () => {
  return (
    <>
      <div className="w-full space-y-4">
        <div className="flex justify-between items-center gap-2">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-32" />
        </div>{" "}
        <div className="border rounded-lg overflow-hidden">
          <div className="space-y-2 p-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-24" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
