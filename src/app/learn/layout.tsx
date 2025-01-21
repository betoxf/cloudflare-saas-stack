import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { LearnSidebar } from "@/components/learn/learn-sidebar"

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:block w-72 border-r">
        <ScrollArea className="h-screen">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Course Content</h2>
            <Separator className="mb-4" />
            <LearnSidebar />
          </div>
        </ScrollArea>
      </aside>
      <main className="flex-1">
        <div className="h-full px-4 py-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
} 