export interface BlogCard {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorImage: string;
    authorId: string;
    authorName: string;
    createdAt: Date;
    changedAt: Date;
  };
}