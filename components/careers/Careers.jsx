'use client';
import { useState } from 'react';

export default function CareersContent() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: 'UI/UX Designer',
      type: 'Internship',
      location: 'Noida',
      description:
        'Design intuitive user experiences and beautiful interfaces that delight our users and align with our brand vision.',
    },
    {
      id: 2,
      title: 'Backend Developer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      description:
        'Develop scalable APIs and microservices using Node.js and Express. Collaborate with frontend teams to integrate backend services.',
    },
    {
      id: 3,
      title: 'Frontend Developer',
      type: 'Intern',
      location: 'Gurugram',
      description:
    'Work with React, Next.js, and Tailwind CSS to build modern and responsive user interfaces for our e-commerce platform.',
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      type: 'Internship',
      location: 'Remote',
      description:
        'Assist in planning and executing digital marketing campaigns, SEO strategies, and social media content.',
    },
  ];

  return (
    <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20 bg-gray-50 min-h-screen">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">
          Careers at Shopping App
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Join a passionate team that's shaping the future of online shopping.
          We believe in creativity, innovation, and growth.
        </p>
      </section>
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all border border-gray-100"
          >
            <h3 className="text-xl font-semibold  mb-2">
              {job.title}
            </h3>
            <p className="text-gray-600 mb-2">
              <strong>Type:</strong> {job.type}
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-gray-700 mb-6">{job.description}</p>

            <button
              onClick={() =>
                setSelectedJob(selectedJob === job.id ? null : job.id)
              }
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {selectedJob === job.id ? 'Applied' : 'Apply Now'}
            </button>
          </div>
        ))}
      </section>
      <section className="mt-20 bg-blue-600 text-white text-center py-12 rounded-xl max-w-6xl mx-auto shadow-md">
        <h2 className="text-3xl font-bold mb-4">
          Build Your Career With Shopping App
        </h2>
        <p className="text-white mb-6 max-w-2xl mx-auto">
          We're always looking for talented, motivated people to join our
          growing team. Let's innovate the world of e-commerce together!
        </p>
        <button
          onClick={() => alert('Thank you for your interest')}
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Send Resume
        </button>
      </section>
    </main>
  );
}