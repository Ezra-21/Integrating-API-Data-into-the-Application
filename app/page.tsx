'use client';

import JobCard from './components/JobCard';
import { useJobs, Job } from '@/hooks/useJobs';
import { useState } from 'react';

export default function HomePage() {
  const { jobs, loading, error } = useJobs();
  const [sortBy, setSortBy] = useState('Most relevant');

  if (loading) {
    return (
      <p className="text-center mt-20 text-gray-600 text-lg font-medium">
        Loading jobs...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-20 text-red-500 text-lg font-medium">
        Error: {error}
      </p>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Opportunities
          </h1>
          <p className="mt-1 text-gray-500">
            Showing {jobs.length} {jobs.length === 1 ? 'result' : 'results'}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm text-gray-600 font-medium">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-300 rounded-md px-3 py-1 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Most relevant">Most relevant</option>
            <option value="Newest">Newest</option>
            <option value="Oldest">Oldest</option>
          </select>
        </div>
      </div>

      {/* Job Listings in Vertical List */}
      <div className="flex flex-col space-y-4">
        {jobs.map((job: Job) => (
          <div
            key={job.id}
            className="transform transition-transform duration-300 hover:scale-105"
          >
            <JobCard
              job={{
                title: job.title,
                company: job.orgName,
                about: {
                  location: job.location[0] || 'N/A',
                  categories: job.categories || [],
                },
                description: job.description,
                image: job.logoUrl,
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
