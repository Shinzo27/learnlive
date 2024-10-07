"use client";
import { useEffect } from "react";

const page = ({
    params,
  }: {
    params: { course: string };
  }) => {
    const courseID = params.course;

    return (
        <div>
            {"Course ID: "+ courseID}
        </div>
    );
}

export default page;