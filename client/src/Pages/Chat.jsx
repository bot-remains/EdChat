/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from '@/Components/ui/button';
import { MarkdownRenderer } from '@/Components/ui/Custom/MarkDown';
import { Form, FormControl, FormField, FormItem } from '@/Components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Link, NavLink } from 'react-router-dom';
import { useDebounce } from 'use-debounce'; // Install use-debounce package if not already
import { z } from 'zod';

const schema = z.object({
  statement: z.string().min(1, 'Message cannot be empty'),
});

function Chat() {
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [input, setInput] = useState('');
  const [debouncedInput] = useDebounce(input, 300);
  const messagesEndRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      statement: '',
    },
  });
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = form;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversationHistory]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (data) => {
    if (data.statement === '') return;

    setConversationHistory((history) => [
      ...history,
      { chat: data.statement, role: 'user' },
    ]);
    form.reset({ statement: '' });
    setInput('');
    setLoading(true);

    axios
      .post('https://educhatbot.onrender.com/api/v1/response', {
        statement: data.statement,
        conversationHistory,
      })
      .then((response) => {
        setLoading(false);
        setConversationHistory((history) => [
          ...history,
          { chat: response.data.message, role: 'bot' },
        ]);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="overflow-hidden h-screen bg-extend-primary">
      <PanelGroup direction="horizontal">
        <Panel
          className="flex overflow-y-auto flex-col gap-3 p-5 bg-extend-secondaryBase"
          defaultSize={20}
          minSize={12}
          maxSize={20}
        >
          <NavLink
            to="/"
            className="mb-2 text-2xl font-bold"
          >
            EduChat
          </NavLink>
          <Link className="p-2 rounded-md bg-extend-secondary text-extend-primary">
            History 1
          </Link>
        </Panel>

        <PanelResizeHandle className="cursor-col-resize" />

        <Panel className="flex flex-col items-center p-8 px-24 pb-2 bg-extend-primary">
          <div className="mb-4 w-[85%] grow overflow-y-auto">
            <div
              className="flex overflow-y-auto flex-col gap-4"
              aria-live="polite"
            >
              {conversationHistory.map((message, idx) => (
                <div
                  key={idx}
                  className={`max-w-[70%] p-4 shadow-2xl ${
                    message.role === 'user' ?
                      'self-end rounded-l-xl rounded-br-none rounded-tr-xl bg-extend-secondary text-extend-primary'
                    : 'self-start rounded-r-xl rounded-bl-none rounded-tl-xl bg-extend-secondaryBase text-gray-800'
                  }`}
                >
                  <MarkdownRenderer markdown={message.chat} />
                </div>
              ))}
              {loading && (
                <div className="max-w-[70%] self-start rounded-r-xl rounded-bl-none rounded-tl-xl bg-extend-secondaryBase p-4 shadow-md">
                  <p>Loading...</p>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <Form
            {...form}
            className="sticky bottom-0 bg-extend-primary"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-center items-center space-x-4 w-full">
                <FormField
                  control={control}
                  name="statement"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <textarea
                          name="input"
                          rows={1}
                          className="w-[600px] resize-none overflow-hidden rounded-md border-2 border-extend-border px-4 py-3 focus:border-gray-200 focus:outline-none"
                          style={{ height: '48px' }}
                          value={input}
                          onChange={handleInputChange}
                          onInput={(e) => {
                            e.target.style.height = 'auto';
                            e.target.style.height = `${Math.min(
                              e.target.scrollHeight,
                              72,
                            )}px`;
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey && !loading) {
                              e.preventDefault();
                              handleSubmit(onSubmit)();
                            } else if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                            }
                          }}
                          placeholder="Ask EduChat..."
                          {...field}
                        />
                      </FormControl>
                      {errors.statement && (
                        <p className="text-red-500">
                          {errors.statement.message}
                        </p>
                      )}
                    </FormItem>
                  )}
                />
                <Button
                  disabled={isSubmitting || loading}
                  className={`rounded-md p-6 text-extend-primary transition-colors duration-300 ${
                    loading ? 'bg-gray-400' : (
                      'bg-extend-secondary hover:bg-extend-hoverSecondary'
                    )
                  } ${isSubmitting ? 'opacity-70' : ''}`}
                >
                  <i className="fa-solid fa-arrow-up-long"></i>
                </Button>
              </div>
            </form>
          </Form>
          <p className="p-0 mt-2 text-sm text-center text-gray-400">
            Educhat is in highly development phase, So Please check important
            information.
          </p>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default Chat;
