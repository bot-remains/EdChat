/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from '@/Components/ui/Button';
import { Input } from '@/Components/ui/Input';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Link } from 'react-router-dom';
import '../assets/css/chat.css';

function Chat() {
  return (
    <div className="flex h-screen overflow-hidden">
      <PanelGroup
        direction="horizontal"
        className="w-full"
      >
        <Panel
          className="overflow-y-auto bg-gray-200 p-5"
          defaultSize={15}
          minSize={12}
          maxSize={20}
        >
          <div className="flex h-full flex-col">
            <h2 className="mb-4 text-xl font-bold">EdChat</h2>
            <div className="flex flex-col gap-3 overflow-y-auto pr-1">
              <Link className="rounded-md bg-[#604CC3] p-2  text-white">
                Heading
              </Link>
            </div>
          </div>
        </Panel>

        <PanelResizeHandle className="cursor-col-resize" />

        {/* Right-side Panel - Chat Section and Input Field */}
        <Panel className="flex h-[calc(100%-64px)] flex-col bg-extend-grayscale-50  p-4 px-16">
          {/* Chat Section - Scrollable */}
          <div className="mb-4 grow overflow-y-auto">
            <div className="flex flex-col gap-3 overflow-y-auto">
              <div className="rounded-lb-none max-w-xs self-start rounded-r-xl rounded-tl-xl bg-white p-3 shadow-md">
                <p className="text-gray-800">Hello! How are you?</p>
              </div>
              <div className="rounded-lb-none max-w-xs self-start rounded-r-xl rounded-tl-xl bg-white p-3 shadow-md">
                <p>Doing well. What are you up to?</p>
              </div>
              <div className="max-w-xs self-end rounded-l-xl rounded-br-none rounded-tr-xl bg-[#604CC3] p-3 text-white shadow-md">
                <p>Just working on a project.</p>
              </div>
              <div className="rounded-lb-none max-w-xs self-start rounded-r-xl rounded-tl-xl bg-white p-3 shadow-md">
                <p>Doing well. What are you up to?</p>
              </div>
            </div>
          </div>

          {/* Input and Send Button */}
          <div className="flex items-center">
            <Input
              type="text"
              name="input"
              placeholder="Enter a chat"
              className="mr-2 grow rounded-lg border border-gray-300 p-4 focus:outline-none"
            />
            <Button className="shrink-0 rounded-lg bg-[#604CC3] p-4 text-white transition-colors duration-300 hover:bg-[#5035b1]">
              <i className="fa-solid fa-arrow-up"></i>
            </Button>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default Chat;
