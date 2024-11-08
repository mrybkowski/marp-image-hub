"use client";

import { useTranslations } from "next-intl";
import { Container } from "../_components";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const t = useTranslations();

  const FormSchema = z.object({
    email: z.string().email(),
    acceptNewsletter: z.boolean(),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      acceptNewsletter: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("data:", data);
  }

  return (
    <section className="bg-orange-500 py-10 relative">
      <Container className="flex flex-col items-center gap-3">
        <p className="font-medium lg:text-3xl md:text-2xl text-xl text-center text-zinc-800">
          {t("marketing.newsletter.description")}
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 flex flex-col items-center"
          >
            <div className="flex flex-row items-center w-full justify-center gap-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={t("form.placeholder.email")}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button variant="secondary" type="submit">
                {t("form.action.submit")}
              </Button>
            </div>
            <FormField
              control={form.control}
              name="acceptNewsletter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      ref={field.ref}
                      aria-label="newsletterRules"
                    />
                    {t("form.label.acceptNewsletter")}
                  </FormLabel>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </Container>
    </section>
  );
}
