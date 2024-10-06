"use client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const LandingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col sm:pt-64 pt-52">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />
      <div className="sm:flex w-screen justify-center items-center text-center flex-col px-4 sm:px-6 lg:px-0">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-satoshi text-white ">
          Be a 100x, because you are a 100x!
        </div>
        <div className="pt-6 text-lg sm:text-xl lg:text-2xl font-bold text-white font-satoshi">
          Unlock your potential with LearnLive's expert-led courses. Start your
          learning journey today!
        </div>
        <div className="flex items-center justify-center pt-8 sm:pt-10 space-x-5">
          <Button className="hover:bg-slate-800 font-semibold py-5 sm:text-lg">
            <Link href="/courses">Explore Courses</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center pt-20 flex-col">
        <div className="font-satoshi text-white text-center text-2xl font-bold">
          Why Choose LearnLive?
        </div>
        <div className="flex justify-center items-center gap-10 pt-10 flex-col lg:flex-row w-screen px-20">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800  min-h-[400px] lg:min-h-[300px] p-4 lg:p-8 flex justify-center items-center"
          >
            <div className="w-full md:max-w-md lg:max-w-lg">
              <h2 className="text-left text-balance text-lg md:text-xl lg:text-3xl font-semibold tracking-tight text-white">
                Why you should be a 100x?
              </h2>
              <p className="mt-4 text-left text-sm md:text-base lg:text-lg text-neutral-200 leading-relaxed">
                Being a 100x means delivering exceptional value, multiplying
                team impact, and driving innovation far beyond typical
                contributions.
              </p>
            </div>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[500px] lg:min-h-[300px] p-4 lg:p-8 flex justify-center items-center">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Why LearnLive?
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              LearnLive is a platform that offers a wide range of courses, from
              beginner to advanced levels, designed to help you unlock your
              potential and achieve your goals. Whether you're a student, a
              professional, or a developer, LearnLive has something for
              everyone.
            </p>
          </WobbleCard>
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] p-4 lg:p-8 flex justify-center items-center">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Sign-up for LearnLive today!
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                Get self-paced courses, access to a community of learners, and a
                personalized learning experience. Sign up today and start your
                journey towards unlocking your potential.
              </p>
            </div>
          </WobbleCard>
        </div>
      </div>
      <div className="flex items-center justify-center pt-20 flex-col">
        <div className="font-satoshi text-white text-center text-2xl font-bold">
          What Our Students Say
        </div>
        <div className="flex justify-center items-center pt-10 md:pt-8 sm:pt-6 w-screen overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="normal"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
