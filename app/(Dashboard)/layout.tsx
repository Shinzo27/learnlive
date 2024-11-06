import DashboardLayout from '@/components/Dashboard-layout';
import { Redirect } from '@/components/Redirect';
import { NEXT_AUTH } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default (props: Props) => {

  return (
    <div className=" min-h-screen w-full">
      <DashboardLayout>
        <div className="wrapper w-full">{props.children}</div>
      </DashboardLayout>
    </div>
  );
};