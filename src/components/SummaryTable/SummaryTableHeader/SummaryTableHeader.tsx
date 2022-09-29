import { FC } from "react";

interface TodoHeaderTitle {
  title: string;
}

const SummaryTableHeader: FC<TodoHeaderTitle> = ({ title }) => {
  return (
    <div className="bg-stone-800 flex flex-col p-2 mt-5 gap-3 rounded-t-xl">
      <h2 className="text-center text-white text-2xl font-bold py-4 border-b-2 border-white border-opacity-10">
        {title}
      </h2>
      <div className="text-white flex  justify-between items-center gap-24  text-lg px-3 pb-2 font-light">
        <span>List of categories</span>

        <div className="flex gap-12">
          <span>Active</span>
          <span>Archive</span>
        </div>
      </div>
    </div>
  );
};
export default SummaryTableHeader;
