import { CourseGrid } from "@/components/learn/course-grid"

export default function LearnPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Courses</h1>
        <p className="text-muted-foreground">
          Continue learning where you left off
        </p>
      </div>
      <CourseGrid />
    </div>
  )
} 