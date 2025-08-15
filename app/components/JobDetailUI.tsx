'use client';

import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { Job } from '@/hooks/useJobs';
import { Badge } from './ui/badge';

interface JobDetailUIProps {
  job: Job;
}

export default function JobDetailUI({ job }: JobDetailUIProps) {
  const responsibilitiesList = job.responsibilities?.split('\n').filter(Boolean) || [];
  const idealCandidateList = job.idealCandidate?.split('\n').filter(Boolean) || [];

  const categoryColors = [
    'bg-yellow-100 text-yellow-800',
    'bg-green-100 text-green-800',
    'bg-blue-100 text-blue-800',
    'bg-pink-100 text-pink-800',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-10 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <div className="flex-1 space-y-10">
          {/* Description */}
          <section className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 text-base leading-relaxed">{job.description}</p>
          </section>

          {/* Responsibilities */}
          {responsibilitiesList.length > 0 && (
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-2">
                {responsibilitiesList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Ideal Candidate */}
          {idealCandidateList.length > 0 && (
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ideal Candidate</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
                {idealCandidateList.map((trait, idx) => (
                  <li key={idx}>{trait}</li>
                ))}
              </ul>
            </section>
          )}

          {/* When & Where */}
          {job.whenAndWhere && (
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">When & Where</h2>
              <div className="flex items-start gap-3 text-gray-700 text-base">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <p>{job.whenAndWhere}</p>
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 space-y-8">
          {/* About */}
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">About</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
  {[
    { icon: Calendar, label: 'Posted On', value: job.datePosted },
    { icon: Clock, label: 'Deadline', value: job.deadline },
    { icon: MapPin, label: 'Location', value: job.location.join(', ') },
    { icon: Calendar, label: 'Start Date', value: job.startDate },
    { icon: Calendar, label: 'End Date', value: job.endDate },
  ].map((item, idx) => (
    <li key={idx} className="flex items-start gap-3">
      <item.icon className="w-5 h-5 text-blue-600 mt-1" />
      <div>
        <p className="text-gray-500">{item.label}</p>
        <p className="font-medium">{new Date(item.value as string).toLocaleDateString()}</p>
      </div>
    </li>
  ))}
</ul>

          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {job.categories.map((category, idx) => (
                <Badge
                  key={idx}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    categoryColors[idx % categoryColors.length]
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Required Skills */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Required Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.requiredSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
