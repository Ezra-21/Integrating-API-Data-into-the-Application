'use client';

import { useJobs, Job } from '@/hooks/useJobs';
import JobDetailUI from '../../components/JobDetailUI';

type PageProps = {
  params: {
    slug: string;
  };
};

export default function JobPage({ params }: PageProps) {
  const { jobs, loading, error } = useJobs();

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600 text-lg">
        Loading job...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Error: {error}
      </p>
    );
  }

  // Find job by matching slug (title lowercased & dash-separated)
  const job: Job | undefined = jobs.find(
    (job) => job.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!job) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">
        Job not found
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-10">
      <JobDetailUI job={job} />
    </div>
  );
}
