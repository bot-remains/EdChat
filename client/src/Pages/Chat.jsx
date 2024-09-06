/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from '@/Components/ui/Button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Link, NavLink } from 'react-router-dom';

function Chat() {
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  const form = useForm({
    defaultValues: {
      statement: '',
    },
  });
  const { isSubmitting } = form.formState;

  function onSubmit(data) {
    if (data.statement === '') return;

    setConversationHistory((history) => [
      ...history,
      { chat: data.statement, role: 'user' },
    ]);
    form.reset({ statement: '' });
    setLoading(true);

    axios
      .post('http://localhost:4000/api/v1/response', {
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
  }

  return (
    <div className="h-screen overflow-hidden bg-extend-primary">
      <PanelGroup direction="horizontal">
        <Panel
          className="flex flex-col gap-3 overflow-y-auto bg-[#dce0e8] p-5"
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
          <Link className="rounded-md bg-extend-secondary p-2 text-extend-primary">
            History 1
          </Link>
          <Link className="rounded-md bg-extend-secondary p-2 text-extend-primary">
            History 2
          </Link>
          <Link className="rounded-md bg-extend-secondary p-2 text-extend-primary">
            History 3
          </Link>
        </Panel>

        <PanelResizeHandle className="cursor-col-resize" />

        <Panel className="flex flex-col items-center bg-extend-primary p-8 px-24 pb-4">
          {/* Chat Section */}
          <div className="mb-4 w-[85%] grow overflow-y-auto">
            <div className="flex flex-col gap-4 overflow-y-auto">
              {conversationHistory.map((message, idx) => (
                <div
                  key={idx}
                  className={`max-w-[70%] p-4 shadow-2xl  ${
                    message.role === 'user' ?
                      'self-end rounded-l-xl rounded-br-none rounded-tr-xl bg-extend-secondary text-white'
                    : 'self-start rounded-r-xl rounded-bl-none rounded-tl-xl bg-extend-primary text-gray-800'
                  }`}
                >
                  {message.chat}
                </div>
              ))}
              {loading && (
                <div className="max-w-[70%] self-start rounded-r-xl rounded-bl-none rounded-tl-xl bg-extend-primary p-4 shadow-md">
                  <p>Loading...</p>
                </div>
              )}
            </div>
          </div>

          <Form
            {...form}
            className="sticky"
          >
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex w-full items-center justify-center space-x-4">
                <FormField
                  control={form.control}
                  name="statement"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-y-0">
                      <FormControl>
                        <textarea
                          name="input"
                          rows={1}
                          className="w-[600px] resize-none overflow-hidden rounded-md border-2 border-gray-200 px-4 py-3 focus:border-gray-200 focus:outline-none"
                          style={{ height: '48px' }}
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
                              form.handleSubmit(onSubmit)();
                            } else if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault(); // Disable Enter key when loading
                            }
                          }}
                          placeholder="Ask EduChat..."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  disabled={isSubmitting || loading} // Disable the button when loading
                  className={`rounded-md p-6 text-extend-primary transition-colors duration-300 ${
                    loading ? 'bg-gray-400' : (
                      'bg-extend-secondary hover:bg-extend-hoverSecondary'
                    )
                  }`}
                >
                  <i className="fa-solid fa-arrow-up-long"></i>
                </Button>
              </div>
            </form>
          </Form>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default Chat;
