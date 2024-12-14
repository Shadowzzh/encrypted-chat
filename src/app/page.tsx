'use client';

import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField, Form, FormItem, FormControl } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  message: z.string().min(2).max(50)
});

/** 聊天表单 */
const ChatForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: ''
    }
  });

  /** 提交表单 */
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  /** 处理回车事件 */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn('flex gap-2')}>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='请输入您要发送的信息。'
                  className='resize-none'
                  onKeyDown={onKeyDown}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type='submit'>发送</Button>
      </form>
    </Form>
  );
};

export default function Home() {
  return (
    <div className={cn('w-screen h-screen', 'flex justify-center')}>
      <main className={cn('max-w-4xl', 'p-10')}>
        <ChatForm />
      </main>
    </div>
  );
}
