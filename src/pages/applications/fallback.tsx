import { Skeleton } from "@/components/ui/skeleton";

function ApplicationFallbackPage() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex gap-4">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-48" />
      </div>

      <Skeleton className="flex-1" />
    </div>
  );
}

export default ApplicationFallbackPage;
