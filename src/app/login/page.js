"use client";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 dark:bg-base-300">
      {!session?.user ? (
        <div className="bg-base-100 dark:bg-base-200 p-8 rounded-xl shadow-xl w-full max-w-sm text-center">
          <h1 className="text-3xl font-bold mb-4 text-primary dark:text-secondary">
            Welcome Back
          </h1>
          <p className="mb-6 text-base-content/80">
            Login to access your products and dashboard
          </p>

          <button
            onClick={() => signIn("google", { callbackUrl: "/products" })}
            className="flex items-center justify-center gap-3 w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer text-black"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      ) : (
        <div className="bg-base-100 dark:bg-base-200 p-8 rounded-xl shadow-xl w-full max-w-sm text-center flex flex-col items-center gap-4">
          {session.user.image && (
            <img
              src={session.user.image}
              alt={session.user.name}
              className="w-20 h-20 rounded-full ring-2 ring-primary"
            />
          )}
          <h2 className="text-2xl font-semibold text-primary dark:text-secondary">
            Welcome, {session.user.name}!
          </h2>
          <p className="text-base-content/80">
            You are already signed in. Explore your products now.
          </p>
          <div className="flex gap-4 mt-4">
            <Link href="/products" className="btn btn-primary">
              Go to Products
            </Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn btn-outline btn-accent"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
