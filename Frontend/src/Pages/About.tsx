
import React from 'react'
import {Target, Users, Award, TrendingUp, Heart, Lightbulb, Shield, Globe} from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'People First',
      description: 'We believe that great careers start with understanding people, their aspirations, and their unique talents.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly evolve our platform to provide cutting-edge tools and features for job seekers and employers.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and privacy are paramount. We maintain the highest standards of security and transparency.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting talent and opportunities across the globe, breaking down geographical barriers to career growth.'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Job Seekers', icon: Users },
    { number: '2,500+', label: 'Partner Companies', icon: Target },
    { number: '95%', label: 'Success Rate', icon: Award },
    { number: '10,000+', label: 'Jobs Placed', icon: TrendingUp }
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Former tech executive with 15+ years in talent acquisition and HR technology.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Full-stack engineer passionate about building scalable platforms that connect people.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Product strategist focused on creating intuitive experiences for job seekers and recruiters.'
    },
    {
      name: 'David Kim',
      role: 'VP of Growth',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Growth marketing expert helping companies and candidates find their perfect match.'
    }
  ]

  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-950 via-primary-950 to-dark-950 py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/10 via-transparent to-primary-800/5"></div>
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-48 h-48 bg-primary-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-primary-500/10 to-transparent rounded-full"></div>
        </div>
        
        {/* Dot Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(109, 40, 217, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Connecting Talent with{' '}
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-200 bg-clip-text text-transparent animate-pulse">
                Opportunity
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              CareerHub was founded with a simple mission: to bridge the gap between exceptional talent and amazing career opportunities. We're building the future of work, one connection at a time.
            </motion.p>
            
            {/* Floating Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25">
                Join Our Mission
              </button>
              <button className="border-2 border-primary-400 text-primary-300 hover:bg-primary-400 hover:text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-500 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our <span className="text-primary-400">Mission</span>
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                We believe that everyone deserves to find meaningful work that aligns with their skills, values, and aspirations. Our platform leverages cutting-edge technology and human insight to create perfect matches between job seekers and employers.
              </motion.p>
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                By focusing on quality over quantity, we ensure that every connection made through CareerHub has the potential to transform careers and drive business success.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-primary-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="relative rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-950 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(109, 40, 217, 0.1) 50%, transparent 60%)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-primary-400">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              These core values guide everything we do and shape the way we serve our community of job seekers and employers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6 text-center hover:border-primary-600/40 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <motion.div 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 to-dark-800 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-900/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary-800/10 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-primary-400">Impact</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Numbers that reflect our commitment to connecting talent with opportunity and driving career success.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div 
                  className="bg-gradient-to-r from-primary-500 to-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-950 relative">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-primary-800/5"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-primary-400">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              The passionate individuals behind CareerHub who are dedicated to transforming the way people find and build their careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-dark-800/50 backdrop-blur-sm border border-primary-800/20 rounded-xl p-6 text-center hover:border-primary-600/40 hover:bg-dark-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary-500/10"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-primary-500/20 group-hover:border-primary-400/40"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-primary-300 transition-colors">
                  {member.name}
                </h3>
                <div className="text-primary-400 font-medium mb-3 group-hover:text-primary-300 transition-colors">
                  {member.role}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-600/20 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary-700/20 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p 
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join thousands of professionals who have found their dream careers through CareerHub. Your journey to career success starts here.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-primary-700 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Find Your Dream Job
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Post a Job
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
