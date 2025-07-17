import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { BookOpen, Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    name: 'Comprehensive Curriculum',
    description: 'Covering all aspects of AI testing from fundamentals to advanced techniques',
    icon: BookOpen,
  },
  {
    name: 'Expert Instructors',
    description: 'Learn from industry professionals with real-world AI testing experience',
    icon: Users,
  },
  {
    name: 'Practical Exercises',
    description: 'Hands-on labs and real-world case studies',
    icon: CheckCircle,
  },
  {
    name: 'Certification Prep',
    description: 'Fully prepares you for the ISTQB CT-AI certification exam',
    icon: Award,
  },
]

export default function CourseLanding() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            ISTQB Certified Tester
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
              AI Testing
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
            Master AI Testing with Our Comprehensive 5-Day Course
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/day/1">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#course-outline">View Course Outline</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Everything you need to master AI testing
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our comprehensive course covers all aspects of AI testing, from fundamentals to advanced techniques.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.name} className="h-full transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Course Outline */}
      <div id="course-outline" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Course Outline
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              A comprehensive 5-day program covering all aspects of AI testing
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { day: 1, title: 'Introduction to AI and AI Testing Fundamentals' },
              { day: 2, title: 'Data for AI Testing' },
              { day: 3, title: 'Model Testing and Evaluation' },
              { day: 4, title: 'Operational AI Testing and System Integration' },
              { day: 5, title: 'Organizational Aspects, Ethics, and Exam Preparation' },
            ].map(({ day, title }) => (
              <Link key={day} to={`/day/${day}`}>
                <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="md:flex">
                    <div className="p-6 bg-blue-600 text-white flex items-center justify-center md:w-48 flex-shrink-0">
                      <div className="text-center">
                        <span className="text-sm font-medium">DAY</span>
                        <div className="text-4xl font-bold">{day}</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {day === 1 && 'Learn the fundamentals of AI and how testing AI systems differs from traditional software testing.'}
                        {day === 2 && 'Master techniques for testing and validating data used in AI systems.'}
                        {day === 3 && 'Explore methods for evaluating and validating AI models effectively.'}
                        {day === 4 && 'Understand how to test AI systems in production environments.'}
                        {day === 5 && 'Prepare for certification and understand the ethical implications of AI testing.'}
                      </p>
                      <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-medium">
                        View details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to become an AI Testing expert?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Start your journey today and gain the skills needed to test AI systems effectively.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-blue-700" asChild>
              <Link to="/day/1">
                Start Learning Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <a href="#course-outline">View Full Curriculum</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
