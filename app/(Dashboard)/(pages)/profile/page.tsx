import React from 'react'
import Profile from '@/components/Profile';
import { getUserDetails } from '@/lib/db';
import { getSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';

const page = async() => {
  const session = await getServerSession();
  const getDetails = await getUserDetails(session?.user?.email || '')

  const student = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    joinDate: "January 15, 2024",
    bio: "Passionate about web development and machine learning. Always eager to learn new technologies and improve my skills.",
    avatar: "/placeholder.svg?height=100&width=100",
    coursesEnrolled: 5,
    coursesCompleted: 3,
    totalHoursLearned: 120,
    certificates: 2
  }

  return (
    <Profile student={student} studentDetails={getDetails}/>
  );
};

export default page;
