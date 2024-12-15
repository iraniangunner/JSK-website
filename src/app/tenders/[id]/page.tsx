export default async function TenderPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (
    <div className="min-h-[100vh]">
      <h1>Hello {id}</h1>
    </div>
  );
}


// import { redirect } from 'next/navigation'
 
// async function fetchTeam(id: string) {
//   const res = await fetch('https://...')
//   if (!res.ok) return undefined
//   return res.json()
// }
 
// export default async function Profile({
//   params,
// }: {
//   params: Promise<{ id: string }>
// }) {
//   const id = (await params).id
//   if (!id) {
//     redirect('/login')
//   }
 
//   const team = await fetchTeam(id)
//   if (!team) {
//     redirect('/join')
//   }
 
//   // ...
// }