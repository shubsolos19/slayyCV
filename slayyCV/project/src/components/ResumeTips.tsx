import React, { useState } from 'react';
import { 
  Star, 
  Target, 
  Users, 
  Award, 
  TrendingUp, 
  Eye, 
  Clock, 
  Zap,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Trophy,
  Rocket,
  Shield
} from 'lucide-react';

const ResumeTips: React.FC = () => {
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const toggleTip = (index: number) => {
    setExpandedTip(expandedTip === index ? null : index);
  };

  const tips = [
    {
      icon: Star,
      title: "Make Your Resume Stand Out",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600",
      tips: [
        "Use a unique but professional design that reflects your industry",
        "Include a compelling professional summary that tells your story",
        "Add a portfolio section with links to your best work",
        "Use industry-specific keywords naturally throughout your content",
        "Include relevant certifications and continuous learning achievements",
        "Showcase measurable results and quantifiable achievements"
      ]
    },
    {
      icon: Target,
      title: "Tailor for Each Application",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600",
      tips: [
        "Research the company culture and values, reflect them in your resume",
        "Mirror the job description language and requirements",
        "Prioritize relevant experience and skills for each position",
        "Adjust your professional summary for each role",
        "Include company-specific keywords and technologies",
        "Highlight experiences that directly relate to the job requirements"
      ]
    },
    {
      icon: Users,
      title: "Showcase Leadership & Collaboration",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconColor: "text-green-600",
      tips: [
        "Highlight team leadership experiences and mentoring roles",
        "Include cross-functional collaboration examples",
        "Mention volunteer work and community involvement",
        "Show how you've influenced positive team outcomes",
        "Include examples of conflict resolution and problem-solving",
        "Demonstrate your ability to work in diverse environments"
      ]
    },
    {
      icon: Award,
      title: "Highlight Achievements & Impact",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600",
      tips: [
        "Use the STAR method (Situation, Task, Action, Result) for descriptions",
        "Include percentage improvements, cost savings, and revenue increases",
        "Mention awards, recognitions, and performance rankings",
        "Show progression in responsibilities and scope",
        "Include customer satisfaction scores and feedback",
        "Highlight innovations and process improvements you've implemented"
      ]
    },
    {
      icon: TrendingUp,
      title: "Demonstrate Growth & Learning",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconColor: "text-indigo-600",
      tips: [
        "Show career progression and increasing responsibilities",
        "Include recent courses, certifications, and skill development",
        "Mention conferences, workshops, and industry events attended",
        "Highlight how you've adapted to new technologies or methodologies",
        "Show examples of self-directed learning and initiative",
        "Include side projects that demonstrate passion and skill growth"
      ]
    },
    {
      icon: Eye,
      title: "Optimize Visual Appeal",
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      iconColor: "text-pink-600",
      tips: [
        "Use consistent formatting and professional fonts (Arial, Calibri, or Times New Roman)",
        "Maintain proper white space and margins for readability",
        "Use bullet points and short paragraphs for easy scanning",
        "Ensure consistent date formats and alignment",
        "Use bold text strategically to highlight key information",
        "Keep the design clean and avoid excessive graphics or colors"
      ]
    },
    {
      icon: Clock,
      title: "Perfect Your Timing & Length",
      color: "from-teal-500 to-green-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      iconColor: "text-teal-600",
      tips: [
        "Keep it to 1-2 pages maximum (1 page for early career, 2 for experienced)",
        "Apply within the first 48 hours of job posting when possible",
        "Update your resume every 3-6 months with new achievements",
        "Include only relevant experience from the last 10-15 years",
        "Use reverse chronological order for work experience",
        "Remove outdated skills and technologies that are no longer relevant"
      ]
    },
    {
      icon: Zap,
      title: "Power Words & Action Verbs",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconColor: "text-orange-600",
      tips: [
        "Start bullet points with strong action verbs (Achieved, Implemented, Led, Optimized)",
        "Use industry-specific terminology and technical language appropriately",
        "Avoid passive voice and weak phrases like 'responsible for'",
        "Include power words that convey impact (Transformed, Revolutionized, Streamlined)",
        "Use varied vocabulary to avoid repetition",
        "Choose words that demonstrate your level of involvement and ownership"
      ]
    }
  ];

  const quickTips = [
    {
      icon: Lightbulb,
      title: "Pro Tip",
      content: "Include a 'Key Achievements' section at the top to immediately grab attention with your biggest wins."
    },
    {
      icon: Trophy,
      title: "Expert Advice",
      content: "Use LinkedIn to research employees at your target company and understand their background and skills."
    },
    {
      icon: Rocket,
      title: "Career Boost",
      content: "Create different versions of your resume for different types of roles, but keep the core achievements consistent."
    },
    {
      icon: Shield,
      title: "ATS Secret",
      content: "Include both spelled-out and abbreviated versions of key terms (e.g., 'Search Engine Optimization (SEO)')."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Professional Resume Tips
        </h3>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert strategies to make your resume stand out from the competition and land more interviews
        </p>
      </div>

      {/* Quick Tips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickTips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center space-x-2 mb-2">
                <Icon className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900 text-sm">{tip.title}</span>
              </div>
              <p className="text-sm text-gray-600">{tip.content}</p>
            </div>
          );
        })}
      </div>

      {/* Detailed Tips */}
      <div className="space-y-4">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          const isExpanded = expandedTip === index;
          
          return (
            <div key={index} className={`${tip.bgColor} ${tip.borderColor} border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300`}>
              <button
                onClick={() => toggleTip(index)}
                className="w-full p-6 text-left hover:bg-white hover:bg-opacity-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${tip.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{tip.title}</h4>
                      <p className="text-gray-600">Click to see expert strategies</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-500" />
                    )}
                  </div>
                </div>
              </button>
              
              {isExpanded && (
                <div className="px-6 pb-6">
                  <div className="bg-white bg-opacity-70 rounded-lg p-4">
                    <ul className="space-y-3">
                      {tip.tips.map((tipItem, tipIndex) => (
                        <li key={tipIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${tip.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-700 leading-relaxed">{tipItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
        <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Resume?</h4>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Apply these expert tips to create a resume that not only passes ATS systems but also impresses hiring managers and lands you more interviews.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold">85%</div>
            <div className="text-sm text-blue-100">Higher interview rate with optimized resumes</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold">3x</div>
            <div className="text-sm text-blue-100">More likely to pass ATS screening</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold">60%</div>
            <div className="text-sm text-blue-100">Faster job search process</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeTips;