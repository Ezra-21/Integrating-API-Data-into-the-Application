import jobs from "@/data/jobs.json";

export function getAllJobs() {
  return jobs.job_postings;
}

export function getJobById(id: number) {
  const allJobs = getAllJobs();
  return allJobs[id];
}
