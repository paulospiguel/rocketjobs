import React, { ReactElement } from "react";

import Link from "next/link";

import { Header } from "@components/Header";
import HorizontalLayout from "@components/Layouts/Horizontal";
import enforceAuthenticated from "@helpers/enforceAuthenticated";
import { useAuth } from "@hooks/auth";

export default function FeedPage() {
  const { user, signOut } = useAuth();

  return (
    <HorizontalLayout>
      <Header />
      <h2>User Profile</h2>
      <code className="highlight">{user?.email}</code>
      <div className="heading">Last Signed In:</div>
      <code className="highlight">
        {new Date(user?.lastSignInAt || "").toLocaleString()}
      </code>
      <br />
      <Link href="/">
        <a className="button">Go Home</a>
      </Link>
    </HorizontalLayout>
  );
}

export const getServerSideProps = enforceAuthenticated();
