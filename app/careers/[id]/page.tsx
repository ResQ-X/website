import { jobDetailsData } from '@/data/jobDetails';
import JobDetailCard from '@/components/careers/JobDetailCard';
import { notFound } from 'next/navigation';
import CareerHero from '@/components/careers/CareerHeroDetail';

type Props = {
  params: {
    id: string;
  };
};

// interface JobDetail {
//   id: string;
//   title: string;
//   jobType: string;
// }

export default function CareerDetailPage({ params }: Props) {
  // Get the job details using the ID from the URL
  const jobDetail = jobDetailsData[params.id];

  // If no job found with this ID, show 404
  if (!jobDetail) {
    notFound();
  }
  
  console.log('Job Detail Page Mounted', jobDetail.title, jobDetail.jobType);


  return (
    <div className="min-h-screen pb-12">
      <CareerHero jobDetail={jobDetail} />
      <JobDetailCard jobDetail={jobDetail} />
    </div>
  );
}

// You can also add generateStaticParams if you want to statically generate the pages
export async function generateStaticParams() {
  return Object.keys(jobDetailsData).map((id) => ({
    id: id,
  }));
}