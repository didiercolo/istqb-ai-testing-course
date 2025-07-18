import { Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import CourseLayout from './pages/course/CourseLayout';
import CourseOverview from './pages/course/CourseOverview';
import DayContent from './pages/course/DayContent';
import NotFound from './pages/NotFound';

function AppRouter() {
  return (
    <Routes>
      {/* Main App */}
      <Route path="/" element={<App />} />
      
      {/* Course routes */}
      <Route path="/course" element={<CourseLayout />}>
        <Route index element={<CourseOverview />} />
        <Route path="day/:day" element={<DayContent />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
      
      {/* 404 - Not Found */}
      <Route path="/404" element={<NotFound />} />
      
      {/* Redirect any other routes to the home page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;
