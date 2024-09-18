'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const t = useTranslations();
  const { toast } = useToast();

  const FormSchema = z.object({
    email: z.string().email({
      message: t('form.message.invalidEmail')
    }),
    name: z
      .string({
        message: t('form.message.invalidName')
      })
      .max(20, {
        message: t('form.message.tooLong')
      }),
    surname: z
      .string({
        message: t('form.message.invalidSurname')
      })
      .max(20, {
        message: t('form.message.tooLong')
      }),
    message: z
      .string({
        message: t('form.message.invalidMessage')
      })
      .max(50, {
        message: t('form.message.tooLong')
      })
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      name: '',
      surname: '',
      message: ''
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
        className="lg:w-2/3 w-full space-y-5">
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
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-5 lg:flex-row flex-col">
          <div className="lg:w-1/2 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.label.name')}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('form.placeholder.name')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="lg:w-1/2 w-full">
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('form.label.surname')}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={t('form.placeholder.surname')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.label.message')}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder={t('form.placeholder.message')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">{t('form.action.submit')}</Button>
      </form>
    </Form>
  );
}
