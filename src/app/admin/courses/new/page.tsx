import { CourseForm } from "@/components/admin/course-form"

export default function NewCoursePage() {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Course</h1>
        <p className="text-muted-foreground">Add a new course to your platform</p>
      </div>
      <CourseForm />
    </div>
  )
} 