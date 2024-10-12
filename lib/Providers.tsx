"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

export const Providers = ({ children, pageProps }: { children: React.ReactNode, pageProps: any }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
}