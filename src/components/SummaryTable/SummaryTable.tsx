import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Task, TodoReducerState } from "../../types/task";
import SummaryTableHeader from "./SummaryTableHeader/SummaryTableHeader";
import SummaryTableItem from "./SummaryTableItem/SummaryTableItem";
import { formatCategory, getSummaryInfo } from "../../utils/utils";

const SummaryTable = () => {
  const tasks = useTypedSelector((state: TodoReducerState) => state.tasks);

  const render = (tasks: Task[]) => {
    let tree = getSummaryInfo(tasks);
    let result = [];

    for (let key in tree) {
      result.push(
        <SummaryTableItem
          category={formatCategory(key)}
          active={tree[key]["active"]}
          archive={tree[key]["archive"]}
          key={key}
        />
      );
    }

    return result;
  };

  return (
    <>
      <SummaryTableHeader title="Summary" />
      {render(tasks)}
    </>
  );
};

export default SummaryTable;
