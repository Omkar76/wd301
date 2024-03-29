import "./TaskCard.css";

export interface Task {
  title?: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName?: string;
}

const TaskCard: React.FC<Task> = (props) => {
  return (
    <div className="TaskItem min-w-">
      <h2 className="text-xl font-bold">{props.title}</h2>
      {props.completedAtDate && <p>Completed on: {props.completedAtDate}</p>}
      {!props.completedAtDate && props.dueDate && (
        <p>Due on: {props.dueDate}</p>
      )}
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
