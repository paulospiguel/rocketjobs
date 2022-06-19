import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { signOut } from "@services/auth";

export const EVENTS = {
  PASSWORD_RECOVERY: "PASSWORD_RECOVERY",
  SIGNED_OUT: "SIGNED_OUT",
  USER_UPDATED: "USER_UPDATED",
};

export const VIEWS = {
  SIGN_IN: "sign_in",
  SIGN_UP: "sign_up",
  FORGOTTEN_PASSWORD: "forgotten_password",
  MAGIC_LINK: "magic_link",
  UPDATE_PASSWORD: "update_password",
};

type User = {
  id: string;
  name: any;
  email: string | undefined;
  avatar: any;
  lastSignInAt: string;
};

interface AuthContext {
  session: any;
  user: User | null;
  //signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<any>;
}

export const AuthContext = createContext({} as AuthContext);

interface AuthProviderProps {
  supabase: any;
  children: React.ReactNode;
}

export const AuthProvider = ({
  supabase,
  children,
  ...props
}: AuthProviderProps) => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState(VIEWS.SIGN_IN);

  const router = useRouter();

  useEffect(() => {
    const activeSession = supabase.auth.session();

    setSession(activeSession);
    setUser(
      activeSession?.user
        ? {
            id: activeSession.user.id,
            name: activeSession?.user?.user_metadata.name,
            email: activeSession?.user?.user_metadata.email,
            avatar: activeSession?.user?.user_metadata.avatar_url,
            lastSignInAt: activeSession?.user?.last_sign_in_at,
          }
        : null
    );

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event: any, currentSession: any) => {
        setSession(currentSession);
        setUser(
          currentSession?.user
            ? {
                id: currentSession.user.id,
                name: currentSession?.user?.user_metadata.name,
                email: currentSession?.user?.user_metadata.email,
                avatar: currentSession?.user?.user_metadata.avatar,
                lastSignInAt: activeSession?.user?.last_sign_in_at,
              }
            : null
        );

        switch (event) {
          case EVENTS.PASSWORD_RECOVERY:
            setView(VIEWS.UPDATE_PASSWORD);
            break;
          case EVENTS.SIGNED_OUT:
          case EVENTS.USER_UPDATED:
            setView(VIEWS.SIGN_IN);
            break;
          default:
        }

        // This is needed to set the cookie for SSR
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session: currentSession }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, [supabase.auth]);

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        signOut: () => signOut(router.push),
      }}
      {...props}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
