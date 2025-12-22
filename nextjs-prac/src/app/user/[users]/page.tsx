const userDetails = async ({
  params,
}: {
  params: Promise<{ users: string }>;
}) => {
  const { users } = await params;

  return (
    <div>
      <h1>Showing Detail of #{users}</h1>
    </div>
  );
};

export default userDetails;
