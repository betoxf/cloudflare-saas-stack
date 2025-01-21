import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Getting Started",
    progress: 45,
    totalLessons: 10,
    completedLessons: 4,
  },
  // Add more courses as needed
]

export function CourseGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Link key={course.id} href={`/learn/${course.id}`}>
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={course.progress} />
                <p className="text-sm text-muted-foreground">
                  {course.completedLessons} of {course.totalLessons} lessons completed
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
} 