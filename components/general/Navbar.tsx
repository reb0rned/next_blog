import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export const Navbar = () => {
  return (
    <nav className="py-5 flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl font-semibold">
          Reb0rned<span className="text-blue-500">Blog</span>
        </h1>
      </Link>

      <div className="flex-1 flex justify-start gap-6 pl-[60px] tracking-[1px]">
        <Link
          href="/"
          className="hover:text-zinc-950 font-semibold text-[20px]"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:text-zinc-950 font-semibold text-[20px]"
        >
          Dashboard
        </Link>
        <Link
          href="/about"
          className="hover:text-zinc-950 font-semibold text-[20px]"
        >
          About
        </Link>
      </div>

      <div className="flex gap-4">
        <LoginLink className={`cursor-pointer ${buttonVariants()}`}>
          Sign in
        </LoginLink>
        <RegisterLink
          className={`cursor-pointer ${buttonVariants({
            variant: "secondary",
          })}`}
        >
          Sign up
        </RegisterLink>
      </div>
    </nav>
  );
};
