"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "lucide-react";
import { ComboBox } from "@/components/combobox-pembimbing";

const formSchema = z.object({
  nim: z.string().min(4, {
    message: "Panjang NIM minimal 4 angka.",
  }),
  nama: z.string().min(5, {
    message: "Nama mahasiswa minimal 5 karakter.",
  }),
  prodi: z.string({ required_error: "Mohon mengisi Program Studi." }),
  "pembimbing-1": z.string({ required_error: "Mohon mengisi Pembimbing 1." }),
  "pembimbing-2": z.string({ required_error: "Mohon mengisi Pembimbing 2." }),
});

export function FormKartuBimbingan() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full px-4 lg:px-12 pt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="nim"
            render={({ field }) => (
              <FormItem>
                <FormLabel>NIM</FormLabel>
                <FormControl>
                  <Input
                    placeholder="NIM Mahasiswa/i"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nama"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Nama Mahasiswa/i" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prodi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Program Studi Mahasiswa/i" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Akuntansi">Akuntansi</SelectItem>
                    <SelectItem value="Manajemen">Manajemen</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pembimbing-1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pembimbing 1</FormLabel>
                <FormControl>
                  <ComboBox></ComboBox>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
