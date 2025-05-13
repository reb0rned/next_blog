"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { BlogCard } from "@/types/BlogCard";
import { MainPageCardProps } from "@/types/MainPageCard";

export default function EditForm({ data }: MainPageCardProps) {
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const [imageUrl, setImageUrl] = useState(data.imageUrl);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/editPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: data.id,
          title,
          content,
          imageUrl,
        }),
      });

      if (res.ok) {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.warn("failed to update post", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="bg-gray-100 text-white rounded-xl p-4">
        <div className="flex flex-col gap-1 pl-6 pt-4">
          <CardTitle className="text-gray-500 text-2xl">
            Your post is almost done . . .
          </CardTitle>
        </div>
        <CardContent className="flex flex-col gap-5 text-gray-500 tracking-[1px]">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title:</Label>
            <Input
              required
              type="text"
              name="title"
              placeholder="input title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="content">Post text:</Label>
            <Textarea
              required
              name="content"
              placeholder="input post text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="img">Image link:</Label>
            <Input
              required
              type="url"
              name="img"
              placeholder="input img url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
            variant="secondary"
          >
            Update post
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
