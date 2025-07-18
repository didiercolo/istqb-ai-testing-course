import { Outlet, Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Course Overview', path: '/course' },
  { name: 'Day 1: Introduction', path: '/course/day/1' },
  { name: 'Day 2: Data for AI Testing', path: '/course/day/2' },
  { name: 'Day 3: Model Testing', path: '/course/day/3' },
  { name: 'Day 4: Operational Testing', path: '/course/day/4' },
  { name: 'Day 5: Ethics & Exam Prep', path: '/course/day/5' },
];

export default function CourseLayout() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/course') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Course Content
              </h2>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'block px-3 py-2 rounded-md text-sm font-medium',
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50',
                      'transition-colors duration-200'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
