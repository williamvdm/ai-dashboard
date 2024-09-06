"use client"

import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-blue-50 p-6">
        <div className="w-full max-w-6xl p-4 lg:p-10 rounded-lg grid grid-cols-2 gap-6 bg-white shadow-2xl">
          <h1 className="text-5xl font-bold pt-2 col-span-2 text-gray-900 text-center lg:text-left">Home</h1>
            <Link href="/dashboard" className="text-blue-500 hover:text-blue-600">Go to Dashboard</Link>
        </div>
      </div>
    </>
  );
}
