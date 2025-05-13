import notFound from "@/app/not-found";
import { prisma } from "@/app/utils/db";
import EditForm from "@/components/general/EditForm";

interface Props {
  params: { id: string };
}

export default async function editPost({ params }: Props) {
  const { id } = await params;
  const data = await prisma.blogPost.findFirst({
    where: {
      id,
    },
  });

  if (!data) notFound();

  return <EditForm data={data!} />;
}
