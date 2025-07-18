import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';
import { loadMarkdown, DAY_CONTENT_PATHS } from '@/utils/markdownLoader';

const dayTitles = {
  1: 'Introduction to AI and AI Testing Fundamentals',
  2: 'Data for AI Testing',
  3: 'Model Testing and Evaluation',
  4: 'Operational AI Testing and System Integration',
  5: 'Organizational Aspects, Ethics, and Exam Preparation',
};

export default function DayContent() {
  const { day } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dayNum = parseInt(day, 10);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (dayNum < 1 || dayNum > 5 || isNaN(dayNum)) {
          throw new Error('Invalid day number');
        }
        
        const markdownContent = await loadMarkdown(DAY_CONTENT_PATHS[dayNum]);
        setContent(markdownContent);
      } catch (err) {
        console.error('Error loading content:', err);
        setError('Failed to load the course content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [day, dayNum]);
  
  const navigateToDay = (newDay) => {
    if (newDay >= 1 && newDay <= 5) {
      navigate(`/course/day/${newDay}`);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        <p className="text-gray-500">Loading course content...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-red-800 dark:text-red-200">
                Error loading content
              </h3>
              <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                <p>{error}</p>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-900/30 dark:text-red-200 dark:hover:bg-red-900/50"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Day {day}: {dayTitles[dayNum]}
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
      </div>

      <div className="prose dark:prose-invert max-w-none prose-blue prose-lg">
        <ReactMarkdown
          components={{
            h1: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h4 className="text-lg font-medium mt-5 mb-2" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="mb-4 leading-relaxed" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="pl-2" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a 
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline" 
                target="_blank" 
                rel="noopener noreferrer"
                {...props} 
              />
            ),
            code: ({ node, inline, ...props }) => (
              inline ? (
                <code className="bg-gray-100 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
              ) : (
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-4">
                  <code className="text-sm font-mono" {...props} />
                </pre>
              )
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote 
                className="border-l-4 border-blue-500 pl-4 italic text-gray-600 dark:text-gray-300 my-4"
                {...props} 
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between gap-4">
        <div>
          {dayNum > 1 && (
            <button
              onClick={() => navigateToDay(dayNum - 1)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous: Day {dayNum - 1}
            </button>
          )}
        </div>
        
        <div className="flex justify-center">
          <Link
            to="/course"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Course Overview
          </Link>
        </div>
        
        <div className="flex justify-end">
          {dayNum < 5 ? (
            <button
              onClick={() => navigateToDay(dayNum + 1)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Next: Day {dayNum + 1}
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          ) : (
            <Link
              to="/course/quiz"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Take Final Quiz
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
