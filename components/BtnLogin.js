import { useSession, signIn, signOut } from "next-auth/react";

export default function BtnLogin() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    return (
      <>
        <img src={session.user.image} alt={session.user.name} />
        Sesion iniciada {session.user.email} 
        <button onClick={() => signOut()}>Salir de la sesion</button>
      </>
    );
  }

  return (
    <>
 
      <button onClick={() => signIn()}>Inicia Sesion</button>
    </>
  );
}