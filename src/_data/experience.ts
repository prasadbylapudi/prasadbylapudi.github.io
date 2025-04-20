import type { Experience } from '$lib/types/main';

export default [
	{
		companyName: 'Grow4tech',
		roles: [
			{
				role: 'Software Engineer- full stack',
				period: 'Dec 2023 - Aug 2024'
			}
		],
		description: [
			'Developed a CMS platform for video courses, enabling users to enroll, attempt quizzes, challenges, and earn certificates.',
			'Integrated a secure payment system and a CRM for marketing and analytics, leveraging Kafka and SQS queue service
            for asynchronous processing, improving system performance, user engagement, and insights.',
			'Deployed the frontend on Amazon S3 for cost optimization and used AWS Lambda to connect to the backend. Imple-
mented CI/CD pipelines with Docker and Kubernetes for scalable deployment.',
			'The tech stack is Nest.js, TypeScript,PostgreSQL, and AWS(EKS, ECR, S3, SQS, EC2).'
		]
	}
	,
	{
		companyName: 'Samaaro',
		roles: [
			{
				role: 'Software Development Engineer',
				period: 'Sep 2022 - Jul 2023'
			},
			
		],
		description: [
			'Worked on a robust website builder for the platform, optimizing the website creation process and enhancinguser experience.',
			'Automated all platform features, significantly improving efficiency and reducing manual effort.',
			'Integrated intro.js for user guidance and implemented QR code check-ins, enhancing the platform’s capabilities and streamlining user interactions.',
			'Implemented core components including push notifications and feedback functionality, achieving a 40% cost reduction in AWS servers through strategic resource allocation and efficient utilization.',
			'Demonstrated expertise in JavaScript, TypeScript, Reactl, Node, Express and AWS for efficient and scalable development.'

		]
	},
	{
		companyName: 'IIIT Hyderabad - LTRC Lab',
		roles: [
			{
				role: 'NLP Intern',
				period: 'May 2021 - Oct 2021'
			}
		],
		description: [
			'Worked on human-annotated abstractive summarization dataset creation for the Telugu language.',
			'Implemented a machine learning model that translates the English language to the Telugu language.',
			'Learnt about advanced concepts in NLP, data cleaning, and scraping.',
		]
	}
] as Experience[];
