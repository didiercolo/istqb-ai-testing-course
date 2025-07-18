import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import App from './App';
import CourseLayout from './pages/course/CourseLayout';
import CourseOverview from './pages/course/CourseOverview';
import DayContent from './pages/course/DayContent';
import NotFound from './pages/NotFound';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRouter() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main App - Root path */}
        <Route path="/" element={<App />} />
        
        {/* Course routes */}
        <Route 
          path="/course" 
          element={
            <CourseLayout>
              <Routes>
                <Route index element={<CourseOverview />} />
                <Route path="day/:day" element={<DayContent />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </CourseLayout>
          } 
        />
        
        {/* 404 - Not Found */}
        <Route path="/404" element={<NotFound />} />
        
        {/* Redirect any other routes to the home page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppRouter;
