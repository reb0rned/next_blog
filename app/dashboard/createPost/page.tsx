import { formSubmition } from "@/app/(api-actions)/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function createPost() {
  return (
    <>
      <div className="flex items-center justify-center px-4 mb-6">
        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="flex items-center justify-center text-2xl">
            <h1>CREATE POST </h1>
          </div>
        </div>
      </div>

      <form action={formSubmition}>
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
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="content">Post text:</Label>
              <Textarea required name="content" placeholder="input post text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="img">Image link:</Label>
              <Input
                required
                type="url"
                name="img"
                placeholder="input img url"
              />
            </div>

            <Button
              className="cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
              variant="secondary"
            >
              Create post
            </Button>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
