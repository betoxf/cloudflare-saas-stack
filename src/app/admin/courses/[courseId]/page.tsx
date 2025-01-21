export const runtime = 'edge';

import { CourseForm } from "@/components/admin/course-form"

interface CourseEditPageProps {
  params: {
    courseId: string
  }
}

export default function CourseEditPage({ params }: CourseEditPageProps) {
  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Course</h1>
        <p className="text-muted-foreground">Update course details</p>
      </div>
      <CourseForm courseId={params.courseId} />
    </div>
  )
} 