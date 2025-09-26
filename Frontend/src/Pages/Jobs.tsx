
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Search, MapPin, Filter, Briefcase, Clock, DollarSign, Building} from 'lucide-react'
import { motion } from 'framer-motion'

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [location, setLocation] = useState('')
  const [jobType, setJobType] = useState('all')
  const [experience, setExperience] = useState('all')

  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      salary: '$120k - $150k',
      type: 'Full-time',
      experience: 'Senior',
      posted: '2 days ago',
      tags: ['React', 'TypeScript', 'Node.js'],
      description: 'We are looking for an experienced frontend developer to join our growing team...',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      salary: '$80k - $110k',
      type: 'Full-time',
      experience: 'Mid-level',
      posted: '1 day ago',
      tags: ['Figma', 'Adobe XD', 'Prototyping'],
      description: 'Join our creative team to design beautiful and intuitive user experiences...',
    },
    {
      id: 3,
      title: 'Data Scientist',
      company: 'DataFlow Analytics',
      location: 'Remote',
      salary: '$100k - $130k',
      type: 'Remote',
      experience: 'Senior',
      posted: '3 days ago',
      tags: ['Python', 'Machine Learning', 'SQL'],
      description: 'Analyze complex datasets and build predictive models to drive business insights...',
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'Austin, TX',
      salary: '$110k - $140k',
      type: 'Full-time',
      experience: 'Senior',
      posted: '1 week ago',
      tags: ['Strategy', 'Analytics', 'Leadership'],
      description: 'Lead product development from conception to launch in a fast-paced environment...',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'CloudTech Solutions',
      location: 'Seattle, WA',
      salary: '$95k - $125k',
      type: 'Full-time',
      experience: 'Mid-level',
      posted: '4 days ago',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      description: 'Build and maintain scalable infrastructure to support our growing platform...',
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      company: 'Growth Marketing Co.',
      location: 'Los Angeles, CA',
      salary: '$60k - $80k',
      type: 'Full-time',
      experience: 'Entry-level',
      posted: '2 days ago',
      tags: ['Digital Marketing', 'SEO', 'Content'],
      description: 'Drive customer acquisition through innovative marketing campaigns...',
    },
  ]

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesLocation = location === '' || 
                           job.location.toLowerCase().includes(location.toLowerCase())
    
    const matchesType = jobType === 'all' || job.type === jobType
    const matchesExperience = experience === 'all' || job.experience === experience

    return matchesSearch && matchesLocation && matchesType && matchesExperience
  })

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Header */}
      <section className="bg-gradient-to-r from-dark-900 to-primary-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Find Your Next{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover {jobs.length} amazing job opportunities from top companies around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-dark-900 border-b border-primary-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search Input */}
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Job title, keywords, or company"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Location Input */}
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Job Type Filter */}
              <div>
                <select
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                >
                  <option value="all">All Types</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Remote">Remote</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              {/* Experience Filter */}
              <div>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                >
                  <option value="all">All Levels</option>
                  <option value="Entry-level">Entry Level</option>
                  <option value="Mid-level">Mid Level</option>
                  <option value="Senior">Senior</option>
                  <option value="Executive">Executive</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredJobs.length} Jobs Found
            </h2>
            <div className="flex items-center space-x-2 text-gray-400">
              <Filter className="h-5 w-5" />
              <span>Sort by: Most Recent</span>
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6 hover:border-primary-600/40 transition-all duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex items-center text-gray-400 mb-2">
                          <Building className="h-4 w-4 mr-2" />
                          {job.company}
                        </div>
                        <div className="flex items-center text-gray-400 mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-primary-300 font-semibold">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <div className="bg-primary-600/20 text-primary-300 px-3 py-1 rounded-full text-sm">
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary-900/30 text-primary-300 px-2 py-1 rounded text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:ml-6 flex flex-col space-y-3">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-center"
                    >
                      View Details
                    </Link>
                    <button className="border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
                      Save Job
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
          )}

          {/* Pagination */}
          {filteredJobs.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-dark-800 border border-primary-800/20 rounded-lg text-white hover:bg-primary-600 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-primary-600 border border-primary-600 rounded-lg text-white">
                  1
                </button>
                <button className="px-4 py-2 bg-dark-800 border border-primary-800/20 rounded-lg text-white hover:bg-primary-600 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-dark-800 border border-primary-800/20 rounded-lg text-white hover:bg-primary-600 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-dark-800 border border-primary-800/20 rounded-lg text-white hover:bg-primary-600 transition-colors">
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Jobs
