import { useSession, signIn, signOut } from "next-auth/react";

export default function BtnLogin() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        <div className="flex items-center">
          <img src={session.user.image} alt={session.user.name} className="w-10 h-10 rounded-full mr-2" />
          <span>Sesión iniciada {session.user.email}</span>
          <button onClick={() => signOut()}>Salir de la sesión</button>
        </div>
      </>
    );
  }

  return (
    <>
      <button onClick={() => signIn()}>Iniciar Sesión</button>
    </>
  );
}
