import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default async function MainLayout(props: Props) {
  return <div className="w-full">{props.children}</div>;
}