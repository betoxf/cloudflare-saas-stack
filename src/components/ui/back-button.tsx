import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function BackButton() {
  return (
    <div className="fixed top-4 left-4 z-50">
      <Link href="/">
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full w-10 h-10 bg-primary text-primary-foreground hover:scale-110 transition-transform duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
} 