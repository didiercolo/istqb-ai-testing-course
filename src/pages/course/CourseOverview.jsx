import { Link } from 'react-router-dom';
import { BookOpen, Clock, Users, Award, ChevronRight } from 'lucide-react';

const features = [
  {
    name: '5-Day Comprehensive Course',
    description: 'In-depth coverage of AI testing concepts and practices',
    icon: Clock,
  },
  {
    name: 'Hands-on Learning',
    description: 'Practical exercises and real-world examples',
    icon: BookOpen,
  },
  {
    name: 'Expert Instruction',
    description: 'Learn from industry professionals',
    icon: Users,
  },
  {
    name: 'Certification Prep',
    description: 'Prepare for the ISTQB AI Testing certification',
    icon: Award,
  },
];

const days = [
  {
    id: 1,
    title: 'Introduction to AI and AI Testing Fundamentals',
    description: 'Learn the fundamentals of AI and how testing AI systems differs from traditional software testing.',
  },
  {
    id: 2,
    title: 'Data for AI Testing',
    description: 'Master techniques for testing and validating data used in AI systems.',
  },
  {
    id: 3,
    title: 'Model Testing and Evaluation',
    description: 'Explore methods for evaluating and validating AI models effectively.',
  },
  {
    id: 4,
    title: 'Operational AI Testing and System Integration',
    description: 'Understand how to test AI systems in production environments.',
  },
  {
    id: 5,
    title: 'Organizational Aspects, Ethics, and Exam Preparation',
    description: 'Prepare for certification and understand the ethical implications of AI testing.',
  },
];

export default function CourseOverview() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          ISTQB AI Testing Course
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Master the essential skills and knowledge required for testing AI-based systems
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg"
          >
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <feature.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
              {feature.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Course Outline
        </h2>
        <div className="space-y-4">
          {days.map((day) => (
            <Link
              key={day.id}
              to={`/course/day/${day.id}`}
              className="block group"
            >
              <div className="bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 p-6 rounded-lg transition-colors duration-200 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Day {day.id}: {day.title}
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {day.description}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Begin your journey into AI testing by exploring the course content. Start with Day 1 to learn the fundamentals.
        </p>
        <Link
          to="/course/day/1"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          Start Learning
          <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
