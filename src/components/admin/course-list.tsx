"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const courses = [
  {
    id: "1",
    title: "Getting Started",
    lessons: 10,
    students: 150,
    status: "Published",
  },
  // Add more courses
]

export function CourseList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Lessons</TableHead>
            <TableHead>Students</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell>{course.title}</TableCell>
              <TableCell>{course.lessons}</TableCell>
              <TableCell>{course.students}</TableCell>
              <TableCell>{course.status}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Link href={`/admin/courses/${course.id}`}>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>
                  <Link href={`/admin/courses/${course.id}/lessons`}>
                    <Button variant="outline" size="sm">
                      Lessons
                    </Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 