import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Sun, Menu } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";
import { DM_Sans } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import toast, { Toaster } from "react-hot-toast";

const dmSans = DM_Sans({ subsets: ["latin"] });
import Logo from "@/public/images/logo.png";
const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg',
];

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ElixirClubLanding() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });

    // Create audio element
    audioRef.current = new Audio("/notification.mp3");

    // Show initial toast notifications
    const notifications = [
      "Muhammad Refaat just joined Media Team at Elixir",
      "Sarah Ahmed completed the Programming Workshop",
      "Ahmed Hassan won first place in the Robotics Competition",
      "Fatima Ali joined the Research Team at Elixir",
    ];

    notifications.forEach((notification, index) => {
      setTimeout(() => {
        showToast(notification);
      }, index * 3000);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const showToast = (message: string) => {
    toast(message, {
      duration: 3000,
      position: "top-right",
      icon: "🎉",
    });
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const activities = [
    {
      title: "Competitions",
      description:
        "Participate in university-wide and national level engineering competitions to challenge yourself and apply your skills.",
    },
    {
      title: "Workshops",
      description:
        "Attend hands-on workshops to learn new technologies and enhance your practical engineering skills.",
    },
    {
      title: "Fun Days",
      description:
        "Join our recreational events to unwind, network, and build lasting friendships with fellow engineering students.",
    },
    {
      title: "Specialized Lectures",
      description:
        "Gain insights from industry experts through our focused lectures on mechanical and electrical engineering topics.",
    },
    {
      title: "Field Trips",
      description:
        "Explore real-world engineering applications through visits to industrial sites and research facilities.",
    },
    {
      title: "Project Collaborations",
      description:
        "Work on interdisciplinary projects to solve real-world problems and build your portfolio.",
    },
  ];

  const teams = [
    {
      name: "Media Team",
      description:
        "Our Media Team is responsible for event coverage, organizing ongoing recreational competitions, and generating fresh ideas for future events. They play a crucial role in promoting Elixir's activities and maintaining our online presence.",
    },
    {
      name: "Mechanical Team",
      description:
        "The Mechanical Team handles all aspects of mechanical projects, including assembly, design, and maintenance. They work with cutting-edge mechanical design software and provide lectures to help students specialize in this field.",
    },
    {
      name: "Research Team",
      description:
        "Our Research Team is the backbone of Elixir, gathering and providing valuable information for other teams. They contribute to competitions, cultural topics, and generate new ideas for club events. While there are no strict requirements to join, patience and perseverance are essential for success in this team.",
    },
  ];

  const testimonials = [
    {
      text: "Elixir has been an incredible platform for me to explore my interests in engineering and make lasting friendships.",
      author: "Ahmed, 3rd Year Student",
    },
    {
      text: "The competitions organized by Elixir have really helped me apply my classroom knowledge to real-world problems.",
      author: "Fatima, 4th Year Student",
    },
    {
      text: "Being part of the Media Team has given me valuable skills that I know will help me in my future career.",
      author: "Mohamed, 2nd Year Student",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""} ${
        dmSans.className
      }`}
    >
      <Toaster />
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between border-b dark:border-gray-700">
        <Link className="flex items-center justify-center" href="#">
          <Image src={Logo} alt="Elixir Logo" width={40} height={40} />
          <span className="ml-2 text-2xl font-bold text-[#6cbdda] dark:text-[#6cbdda]">
            Elixir
          </span>
        </Link>
        <nav className="ml-auto items-center hidden md:flex">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300 mr-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300 mr-4"
            href="#activities"
          >
            Activities
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300 mr-4"
            href="#teams"
          >
            Teams
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300 mr-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300 mr-4"
            href="#faq"
          >
            FAQ
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300 mr-4"
            href="#join"
          >
            Join Us
          </Link>
        </nav>
        <div className="flex items-center ml-auto md:ml-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="w-full md:hidden bg-white dark:bg-gray-800 p-4">
          <nav className="flex flex-col space-y-2">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#about"
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#activities"
            >
              Activities
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#teams"
            >
              Teams
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#faq"
            >
              FAQ
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-gray-700 dark:text-gray-300"
              href="#join"
            >
              Join Us
            </Link>
          </nav>
        </div>
      )}
      <main className="flex-1 flex flex-col w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#6cbdda] dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white dark:text-[#6cbdda]">
                  Welcome to Elixir
                </h1>
                <p className="mx-auto max-w-[700px] text-white dark:text-gray-300 md:text-xl">
                  Balancing study and fun through competitions, trips, and
                  events at the Faculty of Engineering, New Mansoura University.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-[#6cbdda] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#6cbdda] dark:bg-gray-700 dark:text-[#6cbdda] dark:hover:bg-gray-600"
                  href="#join"
                >
                  Join Now
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-700"
                  href="#about"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#6cbdda] dark:text-[#6cbdda]">
              Photo Gallery
            </h2>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              loop={true}
              className="mySwiper"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={src}
                      alt={`Elixir Event ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#6cbdda] dark:text-[#6cbdda]">
                  About Elixir
                </h2>
                <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Elixir is a dynamic club at New Mansoura University's Faculty
                  of Engineering. We organize competitions, educational
                  activities, and recreational events to help students explore
                  their interests across various fields. Our focus includes
                  programming, media work, and specialized lectures in
                  mechanical and electrical engineering.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="activities"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#6cbdda] dark:text-[#6cbdda]">
              Our Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 h-64 flex flex-col justify-between transition-transform duration-300 ease-in-out hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#6cbdda] dark:text-[#6cbdda]">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow">
                    {activity.description}
                  </p>
                  <Button className="mt-4 w-full bg-[#6cbdda] text-white hover:bg-[#5aa7c2] dark:bg-gray-600 dark:hover:bg-gray-500">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="teams"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#6cbdda] dark:text-[#6cbdda]">
              Our Teams
            </h2>
            <div className="space-y-8">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="pb-8 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-[#6cbdda] dark:text-[#6cbdda]">
                    {team.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {team.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#6cbdda] dark:text-[#6cbdda]">
              What Our Members Say
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2"
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="font-semibold text-gray-800 dark:text-white">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="faq"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#6cbdda] dark:text-[#6cbdda]">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-2xl mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-gray-800 dark:text-white">
                  How can I join Elixir?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  You can join Elixir by signing up through our website or
                  attending one of our introductory events at the beginning of
                  each semester.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-gray-800 dark:text-white">
                  What kind of activities does Elixir organize?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Elixir organizes a variety of activities including
                  competitions, educational workshops, fun days, trips, and
                  specialized lectures in mechanical and electrical engineering.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-gray-800 dark:text-white">
                  Do I need to have specific skills to join a team?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  While specific skills are not strictly required, having
                  patience and perseverance is essential for success in any of
                  our teams. We provide training and support to help you develop
                  the necessary skills.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-gray-800 dark:text-white">
                  How does Elixir support students' future careers?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  Elixir supports students' future careers by offering
                  specialized lectures, hands-on experience through projects and
                  competitions, and opportunities to develop soft skills like
                  teamwork and leadership.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section
          id="join"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#6cbdda] dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white dark:text-[#6cbdda]">
                  Join Elixir Today
                </h2>
                <p className="max-w-[600px] text-white dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of a community that balances study and fun, helping
                  you explore your interests and develop new skills.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-2">
                  <Input
                    className="bg-white text-gray-800 placeholder:text-gray-500 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button
                    className="bg-white text-[#6cbdda] hover:bg-gray-100 dark:bg-gray-700 dark:text-[#6cbdda] dark:hover:bg-gray-600"
                    type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full flex flex-col gap-2 sm:flex-row py-6 shrink-0 items-center justify-center px-4 md:px-6 border-t dark:border-gray-700">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Elixir Club. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            This project via{" "}
            <Link
              href="https://www.astorlabes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f0b88d] hover:underline"
            >
              Astorlabe.Inc
            </Link>
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}