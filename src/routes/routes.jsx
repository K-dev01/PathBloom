import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import After10th from '../pages/After10th';
import After12th from '../pages/After12th';
import Careers from '../pages/Careers';
import Scholarships from '../pages/Scholarships';
import ScholarshipDetails from '../pages/ScholarshipDetails';
import Colleges from '../pages/Colleges';
import Quiz from '../pages/Quiz';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: '/after-10th',
    element: <MainLayout><After10th /></MainLayout>,
  },
  {
    path: '/after-12th',
    element: <MainLayout><After12th /></MainLayout>,
  },
  {
    path: '/careers',
    element: <MainLayout><Careers /></MainLayout>,
  },
  {
    path: '/scholarships',
    element: <MainLayout><Scholarships /></MainLayout>,
  },
  {
    path: '/scholarships/:id',
    element: <MainLayout><ScholarshipDetails /></MainLayout>,
  },
  {
    path: '/colleges',
    element: <MainLayout><Colleges /></MainLayout>,
  },
  {
    path: '/quiz',
    element: <MainLayout><Quiz /></MainLayout>,
  },
]);
