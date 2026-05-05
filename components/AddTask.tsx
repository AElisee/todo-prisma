"use client";

import { useRef } from "react";
import { createTodo } from "@/app/actions/todo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AddTask = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    await createTodo(formData);
    formRef.current?.reset(); // reset form
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Ajouter une tâche
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Nouvelle tâche</DialogTitle>
          <DialogDescription>
            Ajoute une nouvelle tâche à ta liste
          </DialogDescription>
        </DialogHeader>

        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <FieldGroup>
            <Field>
              <Label htmlFor="title">Tâche</Label>
              <Input
                id="title"
                name="title"
                placeholder="Ex: Faire les courses"
                required
              />
            </Field>

            <Field>
              <Label htmlFor="desc">Description</Label>
              <Input
                id="desc"
                name="desc"
                placeholder="Détails..."
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Annuler
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button type="submit">
                Sauvegarder
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;