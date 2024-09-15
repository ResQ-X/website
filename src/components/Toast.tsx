export const Toast = (type: string, content: string) => {
  return (
    <div className="toast toast-center toast-middle">
      <div className={`alert alert-${type}`}>
        <span>{content}</span>
      </div>
    </div>
  );
};
