import { FC } from "react";
import "./TableHeader.scss";

interface TodoHeaderTitle {
  title: string;
}

const TableHeader: FC<TodoHeaderTitle> = ({ title }) => {
  return (
    <div className="table-header">
      <h2 className="table-title">{title}</h2>
      <div className="table-columns">
        <ul>
          <li>Name</li>
          <li>Created</li>
          <li>Category</li>
          <li>Content</li>
          <li>Dates</li>
        </ul>
      </div>
    </div>
  );
};
export default TableHeader;
