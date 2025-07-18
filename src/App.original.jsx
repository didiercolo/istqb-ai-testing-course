import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';
import './App.css';

// Import course components
import CourseLayout from './pages/course/CourseLayout';
import CourseOverview from './pages/course/CourseOverview';
import DayContent from './pages/course/DayContent';
import NotFound from './pages/NotFound';

function App() {
  const courseData = {
    title: "ISTQB Certified Tester AI Testing",
    subtitle: "Master AI Testing with Our Comprehensive 5-Day Course",
    duration: "5 Days",
    format: "Online/Self-Paced",
    level: "Intermediate to Advanced"
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen bg-background">
            <header className="bg-white dark:bg-gray-900 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {courseData.title}
                  </h1>
                </div>
              </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {courseData.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {courseData.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <CardTitle>Duration</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{courseData.duration}</p>
                    <p className="text-sm text-muted-foreground">Comprehensive training</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Users className="h-6 w-6 text-blue-600" />
                      <CardTitle>Format</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{courseData.format}</p>
                    <p className="text-sm text-muted-foreground">Learn at your own pace</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Award className="h-6 w-6 text-blue-600" />
                      <CardTitle>Level</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">{courseData.level}</p>
                    <p className="text-sm text-muted-foreground">For experienced testers</p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center">
                <Button size="lg" asChild>
                  <Link to="/course" className="flex items-center mx-auto">
                    Explore Full Course <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </main>
          </div>
        }
      />

      <Route path="/course" element={<CourseLayout />}>
        <Route index element={<CourseOverview />} />
        <Route path="day/:day" element={<DayContent />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
      
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App

