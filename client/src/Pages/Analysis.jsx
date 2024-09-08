/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/classnames-order */
'use client';

import { Button } from '@/Components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/Components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/Components/ui/popover';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';
import { branches, categories, colleges } from '../assets/data.js'; // Import the data
import BarChart from './BarChart';

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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#333',
        },
      },
      title: {
        display: true,
        text: `Cutoff Marks for ${selectedBranch} - ${selectedCollege} (2020 - 2023)`,
        font: {
          size: 18,
        },
        color: '#333',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#4B5563',
          font: {
            size: 12,
          },
        },
      },
      x: {
        ticks: {
          color: '#4B5563',
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="p-6 mx-auto mt-2 max-w-5xl bg-white">
      <div className="flex justify-between mb-4">
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

        {/* Dropdown for selecting Branch */}
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

        {/* Dropdown for selecting Category */}
      </div>

      {/* Bar Chart */}
      <div className="p-6 rounded-md bg-extend-primary">
        <BarChart
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default Analysis;
