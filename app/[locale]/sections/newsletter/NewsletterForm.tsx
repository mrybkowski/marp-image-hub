'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function NewsletterForm() {
  const t = useTranslations();
  const { toast } = useToast();

  const FormSchema = z.object({
    email: z.string().email({
      message: t('form.message.invalidEmail')
    }),
    acceptNewsletter: z.boolean().refine(val => val === true, {
      message: ''
    })
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      acceptNewsletter: false
    }
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      )
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:w-2/3 w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.label.email')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('form.placeholder.email')}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t('form.description.newsletter')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

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
                />
                {t('form.label.acceptNewsletter')}
              </FormLabel>
              <FormDescription>
                {t('form.description.acceptNewsletter')}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="tertiary" type="submit">
          {t('form.action.submit')}
        </Button>
      </form>
    </Form>
  );
}
