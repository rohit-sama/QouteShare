"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Provider from "./Provider";

const NavBar = () => {
  const IsUserLoggedIn = true;
  const [Providers, setProviders] = useState(null);
  const [toggle, setToogle] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  });

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="image"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">QoutesShare</p>
      </Link>

      {/* desktop navigation */}
      <div className="sm:flex hidden">
        {IsUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-qoutes" className="black_btn">
              Create Qoute
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/logo.svg"
                alt="profile"
                width={37}
                height={37}
                className="profile"
              />
            </Link>
          </div>
        ) : (
          <div>
            {Providers &&
              Object.values(
                Providers.map((Provider) => (
                  <button
                    className="black_btn"
                    type="button"
                    key={Provider.name}
                    onClick={() => {
                      signIn(Provider.id);
                    }}
                  >
                    Sign IN
                  </button>
                ))
              )}
          </div>
        )}
      </div>

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {IsUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={37}
              height={37}
              className="profile"
              onClick={() => setToogle((prev) => !prev)}
            />

            {toggle && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToogle(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-qoutes"
                  className="dropdown_link"
                  onClick={() => setToogle(false)}
                >
                  Post Qoutes
                </Link>
                <button className="mt-5 w-full black_btn"
                type="button"
                onClick={()=> {
                  setToogle(false);
                  signOut();
                }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            {Providers &&
              Object.values(
                Providers.map((Provider) => (
                  <button
                    className="black_btn"
                    type="button"
                    key={Provider.name}
                    onClick={() => {
                      signIn(Provider.id);
                    }}
                  >
                    Sign IN
                  </button>
                ))
              )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
