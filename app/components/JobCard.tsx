'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface Job {
  title: string;
  company: string;
  about: {
    location: string;
    categories: string[];
  };
  description: string;
  image: string;
}

const JobCard: FC<{ job: Job }> = ({ job }) => {
  const slug = job.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/job/${slug}`} className="block">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 p-5 cursor-pointer">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-50 flex-shrink-0">
            <Image
              src={job.image || '/default-logo.png'}
              alt={`${job.company} logo`}
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Job Details */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1">
              {job.company} • {job.about.location}
            </p>
            <p className="text-sm text-gray-700 mt-2 line-clamp-3">{job.description}</p>

            {/* Categories */}
            <div className="mt-3 flex flex-wrap gap-2">
              {job.about.categories.map((cat, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
