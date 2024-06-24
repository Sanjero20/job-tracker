import { Skeleton } from "@/components/ui/skeleton";

function DashboardFallbackPage() {
  return (
    <div className="grid h-fit grid-cols-8 gap-4">
      <Skeleton className="col-span-8 h-32 w-full" />

      {/* Status Distribution */}
      <Skeleton className="col-span-4 row-span-2" />

      {/*  */}
      <Skeleton className="col-span-2 p-4" />

      {/* Interview Schedule Calendar */}
      <Skeleton className="col-span-2 row-span-2 h-96" />

      {/*  */}
      <Skeleton className="col-span-2 p-4" />

      {/* Activity Calendar*/}
      {/* <Skeleton className="col-span-6 flex h-32" /> */}

      {/* Recent Changes */}
      {/* <Skeleton className="col-span-2" /> */}
    </div>
  );
}

export default DashboardFallbackPage;
