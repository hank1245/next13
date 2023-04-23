"use client";
import Link from "next/link";
import Courses from "./components/Courses";
import LoadingPage from "./loading";
import { useEffect, useState } from "react";
import CourseSearch from "./components/CourseSearch";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) return <LoadingPage />;
  return (
    <>
      <h1>Welcome</h1>
      <CourseSearch getSearchResults={(results: any) => setCourses(results)} />
      <Courses courses={courses} />
    </>
  );
}
