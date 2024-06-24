import { Skeleton } from "@/components/ui/skeleton";

function ApplicationFallbackPage() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-10 w-48" />
      </div>

      <Skeleton className="h-[80vh] max-h-[625px]" />
    </div>
  );
}

export default ApplicationFallbackPage;
