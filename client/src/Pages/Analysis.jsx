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
import axios from 'axios';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { branches, categories, colleges } from '../assets/data.js';
import BarChart from '../Components/ui/Custom/BarChart.jsx';

function Analysis() {
  const [openCollege, setOpenCollege] = useState(false);
  const [openBranch, setOpenBranch] = useState(false);
  const [openSeatBranch, setOpenSeatBranch] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(
    'Rajasthan Institute of Technology',
  );
  const [selectedBranch, setSelectedBranch] = useState('Computer Science');
  const [selectedSeatBranch, setSelectedSeatBranch] =
    useState('Computer Science');
  const [selectedSeat, setSelectedSeat] = useState('Computer Science');
  const [collegeData, setCollegeData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/v1/college/${selectedCollege}/branch/${selectedBranch}`,
        { withCredentials: true },
      );
      setCollegeData(response.data);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  }, [selectedCollege, selectedBranch]);

  const fetchSeatData = useCallback(async () => {
    try {
      const response = await axios.get(
        `/api/v1/college/seats/${selectedCollege}/branch/${selectedSeatBranch}`,
        { withCredentials: true },
      );
      setSelectedSeat(response.data);
      console.log(selectedSeat);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  }, [selectedCollege, selectedSeatBranch]);

  useEffect(() => {
    fetchData();
    fetchSeatData();
  }, [fetchData, fetchSeatData]);

  const getDataset = (dataKey, labels, backgroundColors) => ({
    labels,
    datasets: categories.map((category, index) => ({
      label: category,
      data: collegeData?.branchData?.[category]?.[dataKey] || [],
      backgroundColor: backgroundColors[index],
      borderColor: backgroundColors[index],
      borderWidth: 1,
    })),
  });

  const chartColors = [
    'rgb(26, 0, 102)',
    'rgba(54, 162, 235, 0.7)',
    'rgba(255, 99, 132, 0.7)',
  ];

  const data = getDataset(
    'cutoff',
    ['2020', '2021', '2022', '2023'],
    chartColors,
  );
  const seatData = {
    labels: categories,
    datasets: [
      {
        label: 'Available Seats',
        data: categories.map((category) => selectedSeat?.[category] || 0),
        backgroundColor: chartColors,
        borderColor: chartColors,
        borderWidth: 1,
      },
    ],
  };

  const placementData = {
    labels: Object.keys(collegeData?.placement || {}),
    datasets: [
      {
        data: Object.values(collegeData?.placement || {}).map((value) =>
          parseFloat(value.replace('%', '')),
        ), // Extract placement percentages
        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-8 mx-auto max-w-screen">
      <h1 className="mb-6 text-2xl font-bold text-center">
        Details of {selectedCollege}
      </h1>

      <div className="flex flex-wrap gap-4">
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
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col w-full max-w-[700px] p-6 rounded-md bg-white">
          <div className="flex justify-between w-full">
            <h3 className="mb-4 text-lg font-bold text-center">
              Cutoff Marks Data of {selectedBranch}
            </h3>
            <Popover
              open={openBranch}
              onOpenChange={setOpenBranch}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openBranch}
                  className="w-[200px] justify-between bg-gray-100 text-gray-800 border-gray-300 hover:border-gray-400"
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
                              currentValue === selectedBranch ? '' : (
                                currentValue
                              ),
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

          <BarChart
            data={data}
            height={400}
            width={800}
          />
        </div>

        <div className="flex flex-col w-full max-w-[400px] p-4 rounded-md bg-white items-center">
          <h3 className="mb-4 text-lg font-bold text-center">Placement Data</h3>
          <PieChart data={placementData} />
        </div>
      </div>

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col w-full max-w-[700px] p-6 rounded-md bg-white">
          <div className="flex justify-between w-full">
            <h3 className="mb-4 text-lg font-bold text-center">
              Available Seats Data of {selectedSeatBranch}
            </h3>
            <Popover
              open={openSeatBranch}
              onOpenChange={setOpenSeatBranch}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openSeatBranch}
                  className="w-[200px] justify-between bg-gray-100 text-gray-800 border-gray-300 hover:border-gray-400"
                >
                  {selectedSeatBranch || 'Select Branch...'}
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
                            setSelectedSeatBranch(
                              currentValue === selectedSeatBranch ? '' : (
                                currentValue
                              ),
                            );
                            setOpenSeatBranch(false);
                          }}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-5 w-5',
                              selectedSeatBranch === branch ? 'opacity-100' : (
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

          <BarChart
            data={seatData}
            height={400}
            width={800}
          />
        </div>
      </div>
    </div>
  );
}

export default Analysis;
