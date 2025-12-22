

const Review = async ({
  params,
}: {
  params: Promise<{ userid: string; reviews: string }>;
}) => {
  const { userid, reviews } =await params;
  console.log(userid,reviews);
  
  return <div>User with userid{userid} and review:{reviews}</div>;
};

export default Review;
