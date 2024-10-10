import DashboardLayout from '@/components/Dashboard-layout';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default (props: Props) => {
  return (
    <div className="flex min-h-screen w-full">
      <DashboardLayout>
        <div className="wrapper w-full">{props.children}</div>
      </DashboardLayout>
    </div>
  );
};