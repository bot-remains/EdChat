/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
import { Button } from '@/Components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/Components/ui/command';
import PieChart from '@/Components/ui/Custom/PieChart.jsx';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { branches, categories, colleges } from '../assets/data.js';
import BarChart from '../Components/ui/Custom/BarChart.jsx';

function Analysis() {
  const [openCollege, setOpenCollege] = React.useState(false);
  const [openBranch, setOpenBranch] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState(false);
  const [selectedCollege, setSelectedCollege] = React.useState(
    'Rajasthan Institute of Technology',
  );
  const [selectedBranch, setSelectedBranch] =
    React.useState('Computer Science');
  const [selectedCategory, setSelectedCategory] = React.useState('General');

  const data = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: categories.map((category) => ({
      label: category,
      data: colleges[selectedCollege]?.[selectedBranch]?.[category] || [],
      backgroundColor:
        category === 'General' ? 'rgb(26, 0, 102)'
        : category === 'OBC' ? 'rgba(54, 162, 235, 0.7)'
        : 'rgba(255, 99, 132, 0.7)',
      borderColor:
        category === 'General' ? 'rgba(54, 162, 235, 1)'
        : category === 'OBC' ? 'rgba(54, 162, 235, 1)'
        : 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    })),
  };

  const placementData = {
    labels: Object.keys(colleges[selectedCollege]),
    datasets: [
      {
        data: Object.keys(colleges[selectedCollege]).map((branch) => {
          const placement = colleges[selectedCollege][branch]?.Placement?.[0];
          return placement ? parseFloat(placement.replace('%', '%')) : 0;
        }),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {};

  return (
    <div className="p-6 mx-auto w-full">
      <div className="flex flex-wrap gap-4 justify-between p-4">
        {/* College Selection Popover */}
        <Popover
          open={openCollege}
          onOpenChange={setOpenCollege}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openCollege}
              className="w-[300px] justify-between bg-gray-100 text-gray-800 border-gray-300 hover:border-gray-400"
            >
              {selectedCollege || 'Select College...'}
              <ChevronsUpDown className="ml-2 w-5 h-5 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0 border border-gray-300 rounded-md">
            <Command>
              <CommandInput placeholder="Search college..." />
              <CommandList>
                <CommandEmpty>No college found.</CommandEmpty>
                <CommandGroup>
                  {Object.keys(colleges).map((college) => (
                    <CommandItem
                      key={college}
                      value={college}
                      onSelect={(currentValue) => {
                        setSelectedCollege(
                          currentValue === selectedCollege ? '' : currentValue,
                        );
                        setOpenCollege(false);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-5 w-5',
                          selectedCollege === college ? 'opacity-100' : (
                            'opacity-0'
                          ),
                        )}
                      />
                      {college}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>

        {/* Branch Selection Popover */}
        <Popover
          open={openBranch}
          onOpenChange={setOpenBranch}
        >
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openBranch}
              className="w-[300px] justify-between bg-gray-100 text-gray-800 border-gray-300 hover:border-gray-400"
            >
              {selectedBranch || 'Select Branch...'}
              <ChevronsUpDown className="ml-2 w-5 h-5 opacity-50 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0 border border-gray-300 rounded-md">
            <Command>
              <CommandInput placeholder="Search branch..." />
              <CommandList>
                <CommandEmpty>No branch found.</CommandEmpty>
                <CommandGroup>
                  {branches.map((branch) => (
                    <CommandItem
                      key={branch}
                      value={branch}
                      onSelect={(currentValue) => {
                        setSelectedBranch(
                          currentValue === selectedBranch ? '' : currentValue,
                        );
                        setOpenBranch(false);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-5 w-5',
                          selectedBranch === branch ? 'opacity-100' : (
                            'opacity-0'
                          ),
                        )}
                      />
                      {branch}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      {/* Charts Section */}
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col w-full max-w-[700px] p-6 rounded-md bg-white shadow-md">
          <h3 className="mb-4 text-lg font-bold text-center">
            Cutoff Marks Data - {selectedBranch} at {selectedCollege}
          </h3>
          <BarChart
            data={data}
            options={options}
            height={400} // Increased height for better visibility
            width={700} // Increased width to make it prominent
          />
        </div>

        <div className="flex flex-col w-full max-w-[400px] p-6 rounded-md bg-white shadow-md">
          <h3 className="mb-4 text-lg font-bold text-center">
            Placement Data of {selectedCollege}
          </h3>
          <PieChart data={placementData} />
        </div>
      </div>
    </div>
  );
}

export default Analysis;
