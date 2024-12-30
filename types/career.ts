interface Career {
    id: string;
    title: string;
    experience: string;
    deadline: string;
  }
  
  interface JobDetail {
    title: string;
    jobType: string;
    location: string;
    datePosted: string;
    experience: string;
    workingHours: string;
    workingDays: {
      weekly: string;
      weekend: string;
    };
    vacancy: number;
    requirements: string[];
    responsibilities: string[];
    education: string[];
    salary: {
      range: string;
      review: string;
    };
    benefits: string[];
    applicationProcess: string[];
  }