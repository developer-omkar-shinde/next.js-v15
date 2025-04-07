export default async function UserDetails({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Full Page View of User: {params?.id}</h1>
    </div>
  );
}
