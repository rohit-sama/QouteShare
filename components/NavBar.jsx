"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavBar = () => {
  const {data: session} = useSession();
  const [providers, setProviders] = useState(null);
  const [toggle, setToogle] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  },[]);

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
        {session?.user? (
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
            {providers &&
              Object.values(
                providers).map((Provider) => (
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
                )
              )}
          </div>
        )}
      </div>

    

      {/* mobile navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
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
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className='black_btn'
                >
                  Sign in
                </button>
              ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
