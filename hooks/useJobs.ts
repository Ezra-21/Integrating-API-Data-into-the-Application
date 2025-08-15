import { useState, useEffect } from 'react';

export interface Job {
  id: string;
  title: string;
  orgName: string;
  description: string;
  responsibilities: string;
  idealCandidate: string;
  whenAndWhere: string;
  logoUrl: string;
  location: string[];
  categories: string[];
  requiredSkills: string[];
  startDate: string;
  endDate: string;
  datePosted: string;
  deadline: string;
}

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch('https://akil-backend.onrender.com/opportunities/search');
        if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.statusText}`);

        const json = await res.json();

        const data = json.data;
        if (Array.isArray(data)) {
          setJobs(data);
        } else if (data) {
          setJobs([data]);
        } else {
          setJobs([]);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return { jobs, loading, error };
}
