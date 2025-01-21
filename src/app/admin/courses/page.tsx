import { CourseList } from "@/components/admin/course-list"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Manage your courses</p>
        </div>
        <Link href="/admin/courses/new">
          <Button>Create Course</Button>
        </Link>
      </div>
      <CourseList />
    </div>
  )
} 