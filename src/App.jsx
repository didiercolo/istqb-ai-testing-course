import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CourseLayout from '@/components/CourseLayout'
import CourseLanding from '@/pages/CourseLanding'
import CourseContent from '@/components/CourseContent'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CourseLayout />}>
          <Route index element={<CourseLanding />} />
          <Route path="day/:day" element={<CourseContent />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
