import { Skeleton } from "@/components/ui/skeleton";

function InterviewFallbackPage() {
  return (
    <div className="flex h-full w-full gap-4">
      <Skeleton className="h-full flex-1" />
      <Skeleton className="h-80 w-80" />
    </div>
  );
}

export default InterviewFallbackPage;
