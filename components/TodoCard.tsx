import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Todo } from "@/app/types/todo";
import { SquarePen, Trash } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { updateTodo } from "@/app/actions/todo";

type Props = {
  todo: Todo;
};

const TodoCard = ({ todo }: Props) => {
  return (
    <Card className="w-100">
      <CardHeader>
        <CardTitle>{todo?.title}</CardTitle>
        <CardDescription>{todo?.desc}</CardDescription>
        <CardAction className="flex gap-2 cursor-pointer">
          {/*  */}

          <Sheet>
            <SheetTrigger asChild>
              <SquarePen width={16} height={16} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Modifier la tâche</SheetTitle>
                {/* <SheetDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </SheetDescription> */}
              </SheetHeader>
              <form action={updateTodo}>
                <input type="hidden" name="id" value={todo.id} />
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                  <div className="grid gap-3">
                    <Label htmlFor="title">Tâche</Label>
                    <Input id="title" name="title" defaultValue={todo.title} />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="desc">Description</Label>
                    <Input id="desc" name="desc" defaultValue={todo.desc} />
                  </div>
                </div>
                <SheetFooter>
                  <Button type="submit">Modifier</Button>
                  <SheetClose asChild>
                    <Button variant="outline">Annuler</Button>
                  </SheetClose>
                </SheetFooter>
              </form>
            </SheetContent>
          </Sheet>

          {/*  */}
          <Trash width={16} height={16} />
        </CardAction>
      </CardHeader>
    </Card>
  );
};

export default TodoCard;
