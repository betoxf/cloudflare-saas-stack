"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const courses = [
  {
    id: 1,
    title: "Getting Started",
    lessons: [
      { id: 1, title: "Introduction", slug: "introduction" },
      { id: 2, title: "Setup", slug: "setup" },
    ],
  },
  // Add more courses as needed
]

export function LearnSidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div key={course.id} className="space-y-2">
          <h3 className="font-medium">{course.title}</h3>
          <div className="space-y-1">
            {course.lessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/learn/${lesson.slug}`}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm",
                  pathname === `/learn/${lesson.slug}`
                    ? "bg-secondary"
                    : "hover:bg-secondary/50"
                )}
              >
                {lesson.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
} 