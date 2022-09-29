import { FC } from "react";


interface SummaryTableItemProps {
  category: string;
  active: number;
  archive: number;
}

const SummaryTableItem: FC<SummaryTableItemProps> = ({
  category,
  active,
  archive,
}) => {
  return (
    <div className="flex justify-between p-5 bg-white last-of-type:rounded-b-xl border-b-2 last-of-type:mb-5 last-of-type:shadow-lg">
      <span className="font-bold">{category}</span>
      <div className="flex gap-20 mr-6">
        <span className="mr-2">{active}</span>
        <span>{archive}</span>
      </div>
    </div>
  );
};

export default SummaryTableItem;
