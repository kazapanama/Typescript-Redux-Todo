import { FC } from "react";

interface TodoHeaderTitle {
  title: string;
}

const TableHeader: FC<TodoHeaderTitle> = ({ title }) => {
  return (
    <div className="bg-stone-800 flex flex-col p-2 mt-5 gap-3 rounded-t-xl">
      <h2 className="text-center text-white text-2xl font-bold py-4 border-b-2 border-white border-opacity-10">{title}</h2>
     
        <ul className="text-white flex w-10/12 justify-start items-center gap-24  text-lg pl-3 pb-2 font-light">
          <li className="mr-12">Name</li>
          <li className="ml-6 mr-5">Created</li>
          <li className="mr-12">Category</li>
          <li className="mr-10">Content</li>
          <li className="ml-16">Dates</li>
        </ul>
      
    </div>
  );
};
export default TableHeader;
