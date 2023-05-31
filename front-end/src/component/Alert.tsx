interface Props {
  message: string;
}
const Alert = ({ message }: Props) => {
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};
export default Alert;
