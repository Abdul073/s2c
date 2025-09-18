import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <Loader2
        className={cn(
          "h-10 w-10 animate-spin text-primary",
          "transition-colors duration-200"
        )}
      />
      <p className="mt-4 text-base font-medium text-foreground">Loading...</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Please wait while we prepare your dashboard
      </p>
    </div>
  );
};

export default Loading;
