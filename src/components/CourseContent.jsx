import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import MarkdownContent from '@/components/MarkdownContent'

// Import markdown files directly
import day1Content from '../course_content/Day 1_ Introduction to AI and AI Testing Fundamentals.md?raw'
import day2Content from '../course_content/Day 2_ Data for AI Testing.md?raw'
import day3Content from '../course_content/Day 3_ Model Testing and Evaluation.md?raw'
import day4Content from '../course_content/Day 4_ Operational AI Testing and System Integration.md?raw'
import day5Content from '../course_content/Day 5_ Organizational Aspects, Ethics, and Exam Preparation.md?raw'

export default function CourseContent() {
  const { day } = useParams()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const dayContents = {
    1: day1Content,
    2: day2Content,
    3: day3Content,
    4: day4Content,
    5: day5Content
  }

  const dayTitles = {
    1: 'Introduction to AI and AI Testing Fundamentals',
    2: 'Data for AI Testing',
    3: 'Model Testing and Evaluation',
    4: 'Operational AI Testing and System Integration',
    5: 'Organizational Aspects, Ethics, and Exam Preparation'
  }

  useEffect(() => {
    try {
      setLoading(true)
      const content = dayContents[day] || `# Day ${day} Content Not Found\n\nThe content for this day is not available.`
      setContent(content)
      setError(null)
    } catch (err) {
      console.error('Error loading content:', err)
      setError('Failed to load course content. Please try again later.')
    } finally {
      setLoading(false)
    }
  }, [day])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded-lg">
          {error}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Course
          </Link>
        </Button>
      </div>

      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Day {day}: {dayTitles[day]}
        </h1>
        <div className="prose dark:prose-invert max-w-none">
          <MarkdownContent>{content}</MarkdownContent>
        </div>
      </article>

      <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-6">
        {day > 1 ? (
          <Button variant="outline" asChild>
            <Link to={`/day/${parseInt(day) - 1}`} className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span>Day {parseInt(day) - 1}: {dayTitles[parseInt(day) - 1]}</span>
            </Link>
          </Button>
        ) : (
          <div />
        )}
        {day < 5 && (
          <Button asChild className="ml-auto">
            <Link to={`/day/${parseInt(day) + 1}`} className="flex items-center gap-2">
              <span>Day {parseInt(day) + 1}: {dayTitles[parseInt(day) + 1]}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
