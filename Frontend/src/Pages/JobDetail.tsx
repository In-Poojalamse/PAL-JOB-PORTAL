
import { useParams, Link } from 'react-router-dom'
import {ArrowLeft, MapPin, DollarSign, Clock, Building, Share2, Heart} from 'lucide-react'
import { motion } from 'framer-motion'

const JobDetail = () => {
  const { id } = useParams()

  // Mock job data - in a real app, this would come from an API
  const job = {
    id: parseInt(id || '1'),
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    type: 'Full-time',
    experience: 'Senior Level',
    posted: '2 days ago',
    applicants: 24,
    tags: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
    description: `We are looking for an experienced Senior Frontend Developer to join our growing engineering team. You will be responsible for building and maintaining our web applications using modern technologies and best practices.

    This is an excellent opportunity to work with a talented team on cutting-edge projects that impact millions of users worldwide. We offer competitive compensation, comprehensive benefits, and a collaborative work environment that encourages innovation and growth.`,
    responsibilities: [
      'Develop and maintain high-quality web applications using React and TypeScript',
      'Collaborate with designers and backend developers to implement user interfaces',
      'Write clean, maintainable, and well-tested code',
      'Participate in code reviews and contribute to technical decisions',
      'Mentor junior developers and share knowledge with the team',
      'Stay up-to-date with the latest frontend technologies and best practices'
    ],
    requirements: [
      '5+ years of experience in frontend development',
      'Strong proficiency in React, TypeScript, and modern JavaScript',
      'Experience with state management libraries (Redux, Zustand, etc.)',
      'Knowledge of testing frameworks (Jest, React Testing Library)',
      'Familiarity with CI/CD pipelines and deployment processes',
      'Excellent communication and collaboration skills',
      'Bachelor\'s degree in Computer Science or related field (preferred)'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote work options',
      'Professional development budget and conference attendance',
      'Generous PTO and parental leave policies',
      'Modern office with free meals and snacks',
      'Team building events and company retreats'
    ],
    companyInfo: {
      name: 'TechCorp Inc.',
      size: '200-500 employees',
      industry: 'Technology',
      founded: '2015',
      description: 'TechCorp is a leading technology company focused on building innovative solutions that transform how businesses operate. We are committed to creating a diverse and inclusive workplace where everyone can thrive.',
      website: 'https://techcorp.com'
    }
  }

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <section className="bg-gradient-to-r from-dark-900 to-primary-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/jobs"
              className="inline-flex items-center text-primary-300 hover:text-primary-200 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Jobs
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {job.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Building className="h-5 w-5 mr-2" />
                    {job.company}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-5 w-5 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-primary-300 font-semibold">
                    <DollarSign className="h-5 w-5 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 mr-2" />
                    {job.posted}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary-900/30 text-primary-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:ml-8 mt-6 lg:mt-0">
                <div className="flex flex-col space-y-3">
                  <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                    Apply Now
                  </button>
                  <div className="flex space-x-2">
                    <button className="flex-1 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                      <Heart className="h-4 w-4 mr-2" />
                      Save
                    </button>
                    <button className="flex-1 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Job Description</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {job.description}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Benefits & Perks</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-primary-600 w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Job Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Job Type:</span>
                    <span className="text-white">{job.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white">{job.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Applicants:</span>
                    <span className="text-white">{job.applicants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Posted:</span>
                    <span className="text-white">{job.posted}</span>
                  </div>
                </div>
              </motion.div>

              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">About {job.companyInfo.name}</h3>
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {job.companyInfo.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Industry:</span>
                      <span className="text-white">{job.companyInfo.industry}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Company Size:</span>
                      <span className="text-white">{job.companyInfo.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Founded:</span>
                      <span className="text-white">{job.companyInfo.founded}</span>
                    </div>
                  </div>
                  <Link
                    to="/companies"
                    className="text-primary-400 hover:text-primary-300 text-sm transition-colors"
                  >
                    View Company Profile →
                  </Link>
                </div>
              </motion.div>

              {/* Apply Section */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-primary-900/50 to-primary-800/50 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Ready to Apply?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Don't miss this opportunity to join an amazing team and advance your career.
                </p>
                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105">
                  Apply Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobDetail
