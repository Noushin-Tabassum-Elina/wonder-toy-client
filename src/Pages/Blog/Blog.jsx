import React, { useState } from 'react';
import { useTitle } from '../../hooks/useTitle';

const Blog = () => {
  const questions = [
    {
      question: 'What is an access token and refresh token? How do they work and where should we store them on the client-side?',
      answer: 'An access token is a credential granted to a client after successful authentication, allowing access to specific resources. It is included in API requests to verify client identity and permissions. Access tokens have a limited lifespan and expire after a short period to enhance security.A refresh token is a long-lived credential issued during authentication. It is used to obtain a new access token when the current one expires. Refresh tokens provide a seamless user experience by allowing clients to obtain new access tokens without requiring reauthentication. On the client-side, access tokens are typically stored in memory or local storage, while refresh tokens should be securely stored, such as in an HTTP-only cookie, to prevent unauthorized access. Care must be taken to protect these tokens against theft or misuse.',
    },
    {
      question: 'Compare SQL and NoSQL databases?',
      answer: 'SQL databases are based on a fixed schema, using structured query language (SQL) for data organization and predefined relationships. They excel in complex queries and ensure data integrity through ACID properties. NoSQL databases, on the other hand, provide a flexible data model, allowing storage of unstructured, semi-structured, and structured data. They prioritize scalability, performance, and handling large volumes of rapidly changing data. The choice between SQL and NoSQL depends on factors like data structure, scalability needs, and querying requirements.',
    },
    {
      question: 'What is Express.js? What is Nest.js?',
      answer: 'Express.js is a minimalistic and flexible web application framework for Node.js. It provides a lightweight and unopinionated approach to building web applications and APIs, allowing developers to have full control over the applications structure and design. Nest.js, on the other hand, is a full-featured, progressive framework for building scalable and maintainable server-side applications. It is built on top of Express.js and utilizes TypeScript as its primary language. Nest.js provides a modular and organized architecture, dependency injection, and powerful features like decorators and middleware, making it suitable for large-scale enterprise applications',
    },
    {
      question: 'What is MongoDB aggregate and how does it work?',
      answer: 'MongoDBs aggregate is a powerful feature that allows for advanced data aggregation operations in the database. It works by providing a flexible and efficient way to process and transform data within MongoDB collections. Aggregation pipelines are constructed using stages that define the operations to be performed, such as filtering, grouping, sorting, and computing computed fields. Aggregation pipelines can handle complex data transformations and can be used to generate statistical results, perform data analytics, and generate customized reports. By utilizing aggregation, MongoDB provides a robust and efficient solution for performing advanced data processing and analysis within the database itself.',
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  useTitle('Blogs')

  return (
    <div className="container mx-auto p-4 mt-12">
      <h1 className="text-6xl font-extrabold text-center text-teal-600 m-4">Read Our Blogs</h1>
      <div className="space-y-4">
        {questions.map((q, index) => (
          <div key={index}>
            <div
              className="cursor-pointer bg-teal-100 p-4 rounded-md font-semibold text-lg"
              onClick={() => toggleQuestion(index)}
            >
              {q.question}
              <svg
                className={`ml-2 h-5 w-5 transition-transform ${
                  activeQuestion === index ? 'transform rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {activeQuestion === index && (
              <div className="pl-6">
                <div className="accordion-content">
                  <p className="py-4">{q.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
