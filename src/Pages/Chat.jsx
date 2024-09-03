/* eslint-disable tailwindcss/no-custom-classname */
import { Button } from '@/Components/ui/Button';
import { Input } from '@/Components/ui/Input';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { Link } from 'react-router-dom';

function Chat() {
  return (
    <div className="flex h-screen">
      <PanelGroup
        direction="horizontal"
        className="w-full"
      >
        <Panel
          className="bg-gray-200 p-5"
          maxSize={20}
          defaultSize={15}
          minSize={12}
        >
          <div className="relative flex h-full flex-col justify-between">
            <div>
              <h2 className="mb-4 text-xl font-bold">EdChat</h2>
              <div className="flex flex-col gap-3">
                <Link className="rounded-md bg-[#604CC3] p-2 text-white">
                  Heading
                </Link>
              </div>
            </div>
          </div>
        </Panel>
        <PanelResizeHandle className="cursor-col-resize" />
        <Panel className="flex grow flex-col justify-end bg-extend-grayscale-50 p-16 pb-4">
          <div className="mb-4 flex flex-col gap-3 overflow-auto">
            <div className="rounded-lb-none max-w-xs self-start rounded-r-xl rounded-tl-xl bg-white p-3 shadow-md">
              <p className="text-gray-800">Hello! How are you?</p>
            </div>
            <div className="rounded-lb-none max-w-xs self-start rounded-r-xl rounded-tl-xl bg-white p-3 shadow-md">
              <p>doing well. What are you up to?</p>
            </div>
            <div className="max-w-xs self-end rounded-l-xl rounded-br-none rounded-tr-xl bg-[#604CC3] p-3 text-white shadow-md">
              <p>Just working on a project.</p>
            </div>
          </div>
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
