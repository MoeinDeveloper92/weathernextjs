import React from 'react';
import { IoSearch } from 'react-icons/io5';
import { cn } from '@/utils/cn';
import Form from 'next/form';
type Props = {
  // Maybe sometimes we need a conditional className, therfore we should create a prop structure lioke this
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

function SearchBox() {
  return (
    <Form
      action={'/search'}
      className={cn(
        'relative flex items-center justify-center h-10 max-sm:h-8'
      )}
    >
      <input
        type="text"
        name="query"
        placeholder="Search location..."
        className="px-4 py-2 w-[230px] max-sm:w-[150px] border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 h-full"
      />
      <button
        type="submit"
        className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md focus:outline-none hover:bg-blue-600  h-full"
      >
        <IoSearch />
      </button>
    </Form>
  );
}

export default SearchBox;
