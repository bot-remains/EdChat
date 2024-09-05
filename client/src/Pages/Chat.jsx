/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from '@/Components/ui/Button';
// import { MarkdownRenderer } from '@/Components/ui/Custom/MarkDown';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Link } from 'react-router-dom';
import '../assets/css/chat.css';

function Chat() {
  const [loading, setLoading] = useState(false);
  const [conversationHistory, setConversationHistory] = useState([]);

  const getUserCookie = () => {
    const cookie = Cookies.get('userCookie');
    console.log(cookie);
  };

  const form = useForm({
    defaultValues: {
      statement: '',
    },
  });
  const { isSubmitting } = form.formState;

  function onSubmit(data) {
    // setConversationHistory((history) => [...history, data.statement]);
    // form.reset({ statement: '' });
    // setLoading(true);
    // axios
    //   .post('http://localhost:3000/api/v1/auth/sign-in', {
    //     statement: data.statement,
    //     conversationHistory,
    //   })
    //   .then((response) => {
    //     setLoading(false);
    //     setConversationHistory((history) => [
    //       ...history,
    //       response.data.message,
    //     ]);
    //   })
    //   .catch((error) => {
    //     setLoading(false);
    //     console.log(error);
    //   });
    getUserCookie();
  }

  return (
    <wrapper>
      <div className="no-scroll flex h-screen overflow-y-hidden">
        <PanelGroup
          direction="horizontal"
          className="w-full"
        >
          <Panel
            className="h-[calc(100%-64px)]  overflow-y-hidden bg-gray-200 p-5"
            defaultSize={20}
            minSize={12}
            maxSize={20}
          >
            <div className="flex  flex-col">
              <div className="flex flex-col gap-3 overflow-y-auto pr-1">
                <Link className="rounded-md bg-[#604CC3] p-2 text-white">
                  Heading
                </Link>
              </div>
            </div>
          </Panel>

          <PanelResizeHandle className="cursor-col-resize" />

          {/* Right-side Panel - Chat Section and Input Field */}
          <Panel className="flex h-[calc(100%-64px)] flex-col items-center bg-extend-grayscale-50 p-8 px-24 pb-4">
            {/* Chat Section - Scrollable */}
            <div className="mb-4 w-[85%] grow overflow-y-auto">
              <div className="flex flex-col gap-4 overflow-y-auto">
                {conversationHistory.map((message, idx) => (
                  <div
                    key={idx}
                    className={`max-w-[70%] p-4 shadow-md ${
                      idx % 2 === 0 ?
                        'mt-4 self-end rounded-l-xl rounded-br-none rounded-tr-xl bg-[#604CC3] text-white'
                      : 'self-start rounded-r-xl rounded-bl-none rounded-tl-xl bg-white'
                    }`}
                  >
                    {/* <MarkdownRenderer markdown={message} /> */}
                  </div>
                ))}
                {loading && (
                  <div className="max-w-[70%] self-start rounded-r-xl rounded-bl-none rounded-tl-xl bg-white p-4 shadow-md">
                    <p>Loading...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Input and Send Button */}
            <Form {...form}>
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
                              e.target.style.height = `${Math.min(e.target.scrollHeight, 72)}px`;
                            }}
                            placeholder="Ask EduChat..."
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    disabled={isSubmitting}
                    className="rounded-lg bg-[#604CC3] p-6 text-white transition-colors duration-300 hover:bg-[#5035b1]"
                  >
                    <i className="fa-solid fa-arrow-up-long"></i>
                  </Button>
                </div>
              </form>
            </Form>
          </Panel>
        </PanelGroup>
      </div>
    </wrapper>
  );
}

export default Chat;
