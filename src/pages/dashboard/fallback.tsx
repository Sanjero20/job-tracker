import { Skeleton } from "@/components/ui/skeleton";

function DashboardFallbackPage() {
  return (
    <div className="grid h-full w-full grid-cols-10 gap-4">
      <Skeleton className="col-span-10 h-32 w-full" />

      {/* Status Distribution */}
      <Skeleton className="col-span-5 row-span-2" />

      {/*  Statistics*/}
      <Skeleton className="col-span-2 row-span-2 w-full" />

      {/* Interview Schedule Calendar */}
      <Skeleton className="col-span-3 row-span-2 h-96" />

      {/* Activity Calendar*/}
      <Skeleton className="col-span-10 flex h-48" />
    </div>
  );
}

export default DashboardFallbackPage;
