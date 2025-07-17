import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { BookOpen, Clock, Users, Award, CheckCircle, Star } from 'lucide-react'
import './App.css'

function App() {
  const [activeDay, setActiveDay] = useState(null)

  const courseData = {
    title: "ISTQB Certified Tester AI Testing",
    subtitle: "Master AI Testing with Our Comprehensive 5-Day Course",
    duration: "5 Days",
    format: "Online/Self-Paced",
    level: "Intermediate to Advanced",
    days: [
      {
        id: 1,
        title: "Introduction to AI and AI Testing Fundamentals",
        topics: [
          "What is Artificial Intelligence (AI)?",
          "Different types of AI (Narrow AI, General AI, Super AI)",
          "Key concepts in AI: Machine Learning (ML), Deep Learning (DL), Neural Networks (NN)",
          "Brief history and evolution of AI",
          "Applications of AI in various industries",
          "Why is AI testing different from traditional software testing?",
          "Challenges in AI testing: data dependency, non-determinism, ethical considerations",
          "The role of the tester in an AI project",
          "Quality characteristics for AI-based systems",
          "AI System Development Life Cycle (AI-SDLC)"
        ]
      },
      {
        id: 2,
        title: "Data for AI Testing",
        topics: [
          "Data Quality Characteristics: Accuracy, completeness, consistency, timeliness, validity, uniqueness, integrity",
          "Impact of data quality on AI model performance",
          "Testing data sources and data collection processes",
          "Testing data cleaning, transformation, and labeling",
          "Techniques for data validation and verification",
          "Data bias and its implications for AI testing",
          "Understanding data augmentation techniques",
          "Testing strategies for synthetic data generation"
        ]
      },
      {
        id: 3,
        title: "Model Testing and Evaluation",
        topics: [
          "Testing the training process: hyperparameter tuning, overfitting, underfitting",
          "Evaluating model performance: metrics (accuracy, precision, recall, F1-score, AUC, etc.)",
          "Cross-validation and other validation techniques",
          "Black-box testing techniques for AI models",
          "White-box testing techniques for AI models (e.g., neuron coverage, adversarial examples)",
          "Robustness testing, fairness testing, explainability testing",
          "Testing for bias and ethical considerations in models",
          "Testing strategies for model retraining",
          "Continuous integration and continuous delivery (CI/CD) for AI systems"
        ]
      },
      {
        id: 4,
        title: "Operational AI Testing and System Integration",
        topics: [
          "Testing the deployment process of AI models",
          "Monitoring AI system performance in production",
          "A/B testing and canary releases for AI systems",
          "Regression testing for AI systems after updates or retraining",
          "Testing the integration of AI components with other software systems",
          "End-to-end testing of AI-powered applications",
          "Performance, scalability, and security testing for AI systems",
          "Strategies for maintaining AI systems",
          "Managing changes in data, models, and environments",
          "Version control for AI assets (data, models, code)"
        ]
      },
      {
        id: 5,
        title: "Organizational Aspects, Ethics, and Exam Preparation",
        topics: [
          "Team structures and roles in AI projects",
          "Collaboration between testers, data scientists, and AI developers",
          "Test environment management for AI systems",
          "Tools and technologies for AI testing",
          "Bias and fairness in AI systems",
          "Privacy and data protection (e.g., GDPR, CCPA)",
          "Accountability and transparency in AI",
          "Regulatory compliance and legal considerations",
          "Review of key concepts from all modules",
          "Tips and strategies for the ISTQB CT-AI examination",
          "Practice questions and discussion"
        ]
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {courseData.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              {courseData.subtitle}
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {courseData.duration}
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                {courseData.format}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {courseData.level}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Course Overview */}
        <section className="mb-12">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                Course Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                This comprehensive course is designed to prepare individuals for the ISTQB Certified Tester AI Testing (CT-AI) certification. 
                It covers the fundamental concepts of Artificial Intelligence (AI) and Machine Learning (ML), their application in software systems, 
                and the specific challenges and approaches to testing AI-based systems.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">What You Will Learn</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Understand basic concepts of AI and ML</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Identify challenges in testing AI-based systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Apply appropriate testing techniques for AI systems</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Understand data quality and its impact on AI performance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Recognize ethical implications of AI testing</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-3">Target Audience</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Software testers and QA professionals</li>
                    <li>• Test managers, test leads, and test consultants</li>
                    <li>• Developers and business analysts in AI projects</li>
                    <li>• Anyone pursuing ISTQB CT-AI certification</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Daily Breakdown */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            5-Day Course Structure
          </h2>
          
          <div className="grid gap-6">
            {courseData.days.map((day) => (
              <Card key={day.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setActiveDay(activeDay === day.id ? null : day.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-3 px-3 py-1">
                        Day {day.id}
                      </Badge>
                      <CardTitle className="text-xl">{day.title}</CardTitle>
                    </div>
                    <Button variant="ghost" size="sm">
                      {activeDay === day.id ? 'Hide Details' : 'Show Details'}
                    </Button>
                  </div>
                </CardHeader>
                
                {activeDay === day.id && (
                  <CardContent>
                    <CardDescription className="mb-4">
                      Detailed topics covered in Day {day.id}:
                    </CardDescription>
                    <ul className="space-y-2">
                      {day.topics.map((topic, index) => (
                        <li key={index} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Mini Quiz:</strong> At the end of Day {day.id}, a quiz will assess understanding of the covered topics.
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Master AI Testing?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Join thousands of professionals who have advanced their careers with ISTQB certification
              </p>
              <Button size="lg" variant="secondary" className="text-blue-600">
                Enroll Now
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 ISTQB Certified Tester AI Testing Course. All rights reserved.</p>
          <p className="mt-2 text-gray-400">
            Prepare for the future of software testing with comprehensive AI testing knowledge.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

