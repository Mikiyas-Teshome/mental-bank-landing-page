import Link from "next/link";
import Logo from "./Icons/logo";
import Linkedin from "./Icons/LinkedIn";
import Facebook from "./Icons/Facebook";
import Twitter from "./Icons/Twitter";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="  bg-secondary-muted">
      <div className=" flex items-center max-w-[73.6875rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 sm:gap-6 lg:gap-[8.0625rem] pt-8 md:pt-12 lg:pt-16 mb-[2.1875rem]  ">
        <div className=" flex  gap-2 sm:gap-2.5  lg:gap-3.5 ">
          {/* <img src="/Logo.svg" alt="" className="text-primary" /> */}
          <div className="  max-w-[6.75rem]">
            <Logo
              fill="#F6F6F9"
              width=""
              height=""
              className=" w-12 h-10 sm:w-14 md:w-20 lg:w-28 sm:h-12 md:h-16 lg:h-24"
            />
          </div>
          <div className="flex flex-col ">
            <h1 className=" text-background font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Mental Bank
            </h1>
            <p className="text-background">Prosperous You!</p>
          </div>
        </div>
        <div className=" flex flex-col gap-2 sm:gap-3 md:gap-5 xl:gap-7 text-[0.8rem] md:text-[1rem] lg:text-lg xl:text-[1.25rem] leading-none text-primary-text w-full max-w-[7.75rem] mx-auto ">
          <Link
            href="/#home"
            className="hover:text-background transition-colors">
            Home
          </Link>
          <Link
            href="/#features"
            className="hover:text-background transition-colors">
            Feature
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-background transition-colors">
            How it works{" "}
          </Link>
          <Link
            href="/#faq"
            className="hover:text-background transition-colors">
            FAQ
          </Link>
          <Link
            href="/#testimonials"
            className="hover:text-background transition-colors">
            Testimonial
          </Link>
        </div>
        <div className=" flex flex-col sm:flex-row gap-[0.9375rem] my-7 mr-0 max-w-[10.59375rem]">
          <div className="border border-muted rounded-full p-3 cursor-pointer">
            <Link href="#">
              <Linkedin />
            </Link>
          </div>
          <div className="border border-muted rounded-full p-3 cursor-pointer">
            <Link href="#">
              <Facebook />
            </Link>
          </div>
          <div className="border border-muted rounded-full p-3 cursor-pointer">
            <Link href="#">
              <Twitter />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[89.3125rem] px-2 sm:px-5 lg:px-7 flex items-center justify-between text-[#71717A] py-6">
        <p className="text-xs md:text-sm xl:text-[1rem]">
          © {currentYear} All Right Reserved. Designed By Bekur Technologies
        </p>
        <div className="flex gap-2 sm:gap-4 lg:gap-6  md:pr-4 lg:pr-8 text-xs md:text-sm xl:text-[1rem]">
          <Link href="/terms">Terms of service</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/account-deletion">Account Deletion</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
