import { FC } from "react";
import "./SummaryTableItem.scss";

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
    <div className="summary-item">
      <span>{category}</span>
      <div>
        <span>{active}</span>
        <span>{archive}</span>
      </div>
    </div>
  );
};

export default SummaryTableItem;
