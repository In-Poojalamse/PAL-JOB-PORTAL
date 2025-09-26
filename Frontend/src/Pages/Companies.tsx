
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Search, MapPin, Users, Building, Globe, ArrowRight, Star} from 'lucide-react'
import { motion } from 'framer-motion'

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [industry, setIndustry] = useState('all')
  const [size, setSize] = useState('all')

  const companies = [
    {
      id: 1,
      name: 'TechCorp Inc.',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Technology',
      location: 'San Francisco, CA',
      size: '200-500',
      employees: '350+',
      openJobs: 12,
      rating: 4.8,
      description: 'Leading technology company focused on innovative solutions and cutting-edge software development.',
      benefits: ['Health Insurance', 'Remote Work', '401k', 'Stock Options'],
      founded: '2015'
    },
    {
      id: 2,
      name: 'Design Studio',
      logo: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Design',
      location: 'New York, NY',
      size: '50-200',
      employees: '120+',
      openJobs: 8,
      rating: 4.6,
      description: 'Creative design agency specializing in brand identity, digital experiences, and product design.',
      benefits: ['Creative Freedom', 'Flexible Hours', 'Health Insurance', 'Professional Development'],
      founded: '2018'
    },
    {
      id: 3,
      name: 'DataFlow Analytics',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Data & Analytics',
      location: 'Remote',
      size: '100-500',
      employees: '280+',
      openJobs: 15,
      rating: 4.9,
      description: 'Data science company helping businesses make informed decisions through advanced analytics.',
      benefits: ['Remote First', 'Learning Budget', 'Health Insurance', 'Equity'],
      founded: '2016'
    },
    {
      id: 4,
      name: 'Innovation Labs',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Technology',
      location: 'Austin, TX',
      size: '500-1000',
      employees: '750+',
      openJobs: 25,
      rating: 4.7,
      description: 'R&D company focused on emerging technologies and breakthrough innovations.',
      benefits: ['Innovation Time', 'Health Insurance', 'Stock Options', 'Gym Membership'],
      founded: '2012'
    },
    {
      id: 5,
      name: 'CloudTech Solutions',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Cloud Computing',
      location: 'Seattle, WA',
      size: '200-500',
      employees: '400+',
      openJobs: 18,
      rating: 4.5,
      description: 'Cloud infrastructure provider offering scalable solutions for modern businesses.',
      benefits: ['Cloud Credits', 'Remote Work', 'Health Insurance', 'Learning Budget'],
      founded: '2017'
    },
    {
      id: 6,
      name: 'Growth Marketing Co.',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      industry: 'Marketing',
      location: 'Los Angeles, CA',
      size: '50-200',
      employees: '85+',
      openJobs: 6,
      rating: 4.4,
      description: 'Digital marketing agency helping startups and enterprises scale their customer acquisition.',
      benefits: ['Performance Bonuses', 'Flexible Schedule', 'Health Insurance', 'Team Events'],
      founded: '2019'
    }
  ]

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesIndustry = industry === 'all' || company.industry === industry
    const matchesSize = size === 'all' || company.size === size

    return matchesSearch && matchesIndustry && matchesSize
  })

  const industries = ['Technology', 'Design', 'Data & Analytics', 'Cloud Computing', 'Marketing']
  const companySizes = ['50-200', '200-500', '500-1000', '1000+']

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
              Discover Amazing{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Companies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore {companies.length} top companies hiring talented professionals. Find your next career opportunity with industry leaders.
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Company name or industry"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Industry Filter */}
              <div>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                >
                  <option value="all">All Industries</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* Size Filter */}
              <div>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500"
                >
                  <option value="all">All Sizes</option>
                  {companySizes.map((s) => (
                    <option key={s} value={s}>{s} employees</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredCompanies.length} Companies Found
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6 hover:border-primary-600/40 transition-all duration-300 group hover:scale-105"
              >
                {/* Company Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary-300 transition-colors">
                        {company.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{company.industry}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{company.rating}</span>
                  </div>
                </div>

                {/* Company Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="h-4 w-4 mr-2" />
                    {company.employees} employees
                  </div>
                  <div className="flex items-center text-primary-300 font-semibold">
                    <Building className="h-4 w-4 mr-2" />
                    {company.openJobs} open positions
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {company.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {company.benefits.slice(0, 3).map((benefit) => (
                      <span
                        key={benefit}
                        className="bg-primary-900/30 text-primary-300 px-2 py-1 rounded text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                    {company.benefits.length > 3 && (
                      <span className="text-gray-400 text-xs px-2 py-1">
                        +{company.benefits.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link
                    to={`/companies/${company.id}`}
                    className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-center text-sm"
                  >
                    View Company
                  </Link>
                  <Link
                    to="/jobs"
                    className="flex-1 border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 text-center text-sm"
                  >
                    View Jobs
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12">
              <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No companies found</h3>
              <p className="text-gray-400">Try adjusting your search criteria or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join an Amazing Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Explore job opportunities at these incredible companies and take your career to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/jobs"
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Star className="h-5 w-5 mr-2" />
                Browse All Jobs
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-700 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Companies
