import { NEXT_AUTH } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { notFound, redirect } from 'next/navigation';
import React from 'react';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(NEXT_AUTH);
  if (!session?.user?.role || session?.user?.role !== "ADMIN") {
    return <div>Unauthorised!</div>
  }
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
