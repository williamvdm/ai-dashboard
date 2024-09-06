"use client"

import React, { useState, useEffect, useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import ChatComponent from "../components/ChatComponent";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-blue-50 p-6">
        <div className="w-full max-w-6xl p-4 lg:p-10 rounded-lg grid grid-cols-2 gap-6 bg-white shadow-2xl">
          <h1 className="text-5xl font-bold pt-2 col-span-2 text-gray-900 text-center lg:text-left">Dashboard</h1>

          {/* FEEDBACK SECTION */}
          <section className="p-6 bg-white rounded-lg border col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Feedback</h2>
            <p className="text-gray-700">You&apos;re doing great, Pantoffel! Keep up the good work.</p>
          </section>

          {/* TEST RESULT SECTION */}
          <section className="p-6 bg-white rounded-lg border col-span-2 lg:col-span-1">
            <div className="flex justify-between items-baseline flex-row">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex-grow">Last quiz results</h2>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Course</span>
                <div className="flex space-x-4">
                  <span className="text-gray-600">You</span>
                  <span className="text-gray-600">Peers</span>
                </div>
              </div>
              <hr className="border-gray-300 my-4" />
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Health Law</span>
                <div className="flex space-x-4">
                  <span className="text-green-700">85%</span>
                  <span className="text-gray-600">80%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Social Medical Sciences</span>
                <div className="flex space-x-4">
                  <span className="text-yellow-700">72%</span>
                  <span className="text-gray-600">75%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Cell Biology and Immunology</span>
                <div className="flex space-x-4">
                  <span className="text-red-700">58%</span>
                  <span className="text-gray-600">65%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">Methodology 1</span>
                <div className="flex space-x-4">
                  <span className="text-green-700">90%</span>
                  <span className="text-gray-600">85%</span>
                </div>
              </div>
            </div>
            <Link href="/dashboard/results">
              <button className="mt-6 px-4 py-2 rounded-md w-full transition" aria-label="View all quiz results">View all quiz results</button>
            </Link>
          </section>

          {/* STUDY PROGRESS SECTION */}
          <section className="flex flex-col flex-grow p-6 bg-white rounded-lg border col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Study progress</h2>
            <p className="text-gray-700 mb-4 text-center">
              You&apos;re almost there, Pantoffel! Keep up the good work.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-48 h-48 bg-orange-50 rounded-full border-4 border-orange-700 flex items-center justify-center">
                <p className="text-3xl text-orange-700">55/60</p>
              </div>
            </div>
          </section>

          {/* CHAT SECTION */}
          <ChatComponent />
          
        </div>
      </div>
    </>
  );
}
