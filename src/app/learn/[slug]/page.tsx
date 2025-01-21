export const runtime = 'edge';

interface LessonPageProps {
  params: {
    slug: string
  }
}

export default function LessonPage({ params }: LessonPageProps) {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Lesson Title</h1>
        <p className="text-muted-foreground">
          Part of Getting Started course
        </p>
      </div>
      
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Video Player Placeholder</p>
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <h2>Lesson Content</h2>
        <p>This is where the lesson content will go...</p>
      </div>
    </div>
  )
} 