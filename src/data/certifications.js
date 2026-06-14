import certAdobe from '../assets/Adobe India Hackathon Participation.pdf';
import certNLP from '../assets/CertificateOfCompletion_Advance Your Skills in Natural Language Processing.pdf';
import certLLM from '../assets/CertificateOfCompletion_Develop Your Skills with Large Language Models.pdf';
import certPowerBI from '../assets/CertificateOfCompletion_Master Microsoft Power BI.pdf';
import certPythonFin from '../assets/CertificateOfCompletion_Python for Data Professionals in Finance.pdf';
import certCodeClash from '../assets/CodeClash Participation.pdf';
import certNvidia from '../assets/Nvidia Deep Learning Certificate.pdf';
import certFlipkart from '../assets/FlipKart Grid Participation Certificate.pdf';
import certTata from '../assets/TATA Imagination Challenge particiaption.pdf';
import certAWS from '../assets/Coursera AWS Cloud Technology Consultant.pdf';
import certDesignThinking from '../assets/SkillUp Design Thinking.pdf';

export const certifications = [
  {
    id: 'cert-1',
    title: 'Fundamentals of Deep Learning',
    org: 'NVIDIA',
    orgInitials: 'NV',
    orgColor: '#76B900',
    date: '2024',
    credentialId: 'View Document',
    verifyUrl: certNvidia,
    category: 'AI / ML',
  },
  {
    id: 'cert-2',
    title: 'Develop Your Skills with Large Language Models',
    org: 'LinkedIn Learning',
    orgInitials: 'Li',
    orgColor: '#0A66C2',
    date: '2025',
    credentialId: 'View Document',
    verifyUrl: certLLM,
    category: 'AI / ML',
  },
  {
    id: 'cert-3',
    title: 'Advance Your Skills in Natural Language Processing',
    org: 'LinkedIn Learning',
    orgInitials: 'Li',
    orgColor: '#0A66C2',
    date: '2025',
    credentialId: 'View Document',
    verifyUrl: certNLP,
    category: 'AI / ML',
  },
  {
    id: 'cert-4',
    title: 'Master Microsoft Power BI',
    org: 'LinkedIn Learning',
    orgInitials: 'Li',
    orgColor: '#0A66C2',
    date: '2025',
    credentialId: 'View Document',
    verifyUrl: certPowerBI,
    category: 'Data',
  },
  {
    id: 'cert-5',
    title: 'Python for Data Professionals in Finance',
    org: 'LinkedIn Learning',
    orgInitials: 'Li',
    orgColor: '#0A66C2',
    date: '2025',
    credentialId: 'View Document',
    verifyUrl: certPythonFin,
    category: 'Data',
  },
  {
    id: 'cert-6',
    title: 'Adobe India Hackathon',
    org: 'Adobe',
    orgInitials: 'Ad',
    orgColor: '#FF0000',
    date: '2024',
    credentialId: 'Participation',
    verifyUrl: certAdobe,
    category: 'Development',
  },
  {
    id: 'cert-7',
    title: 'CodeClash Hackathon',
    org: 'CodeClash',
    orgInitials: 'CC',
    orgColor: '#8B5CF6',
    date: '2024',
    credentialId: 'Participation',
    verifyUrl: certCodeClash,
    category: 'Development',
  },
  {
    id: 'cert-8',
    title: 'Flipkart Grid Hackathon',
    org: 'Flipkart',
    orgInitials: 'FK',
    orgColor: '#2874F0',
    date: '2024',
    credentialId: 'Participation',
    verifyUrl: certFlipkart,
    category: 'Development',
  },
  {
    id: 'cert-9',
    title: 'Tata Imagination Challenge',
    org: 'Tata',
    orgInitials: 'TA',
    orgColor: '#0055A5',
    date: '2024',
    credentialId: 'Participation',
    verifyUrl: certTata,
    category: 'Development',
  },
  {
    id: 'cert-10',
    title: 'AWS Cloud Technology Consultant',
    org: 'Coursera / AWS',
    orgInitials: 'AWS',
    orgColor: '#FF9900',
    date: '2025',
    credentialId: 'View Document',
    verifyUrl: certAWS,
    category: 'Cloud',
  },
  {
    id: 'cert-11',
    title: 'Design Thinking',
    org: 'SkillUp',
    orgInitials: 'SU',
    orgColor: '#E63946',
    date: '2025',
    credentialId: 'View Document',
    verifyUrl: certDesignThinking,
    category: 'Development',
  },
];

export const certCategories = ['All', 'AI / ML', 'Cloud', 'Data', 'Development'];
