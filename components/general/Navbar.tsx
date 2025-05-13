import Link from "next/link";
import { buttonVariants } from "../ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs";
import { NavbarLinks } from "./NavBarLinks";
import Image from "next/image";

interface Props {
  user: KindeUser<Record<string, any>> | null;
}

export function Navbar({ user }: Props) {
  return (
    <nav className="py-5 flex items-center justify-between flex-wrap gap-4">
      <Link href="/" className="flex-shrink-0">
        <h1 className="text-3xl font-semibold">
          Reb0rned<span className="text-blue-500">Blog</span>
        </h1>
      </Link>

      <NavbarLinks />

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <div className="relative size-8 overflow-hidden rounded-full">
              <Image
                src={user.picture as string}
                alt={`${user.given_name} picture`}
                fill
                className="object-cover"
              />
            </div>
            <LogoutLink
              className={`${buttonVariants({ variant: "secondary" })}`}
              aria-label="Log out"
            >
              Logout
            </LogoutLink>
          </>
        ) : (
          <>
            <LoginLink
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
              aria-label="Sign in"
            >
              Sign in
            </LoginLink>
            <RegisterLink
              className={`cursor-pointer ${buttonVariants({
                variant: "secondary",
              })}`}
              aria-label="Sign up"
            >
              Sign up
            </RegisterLink>
          </>
        )}
      </div>
    </nav>
  );
}
