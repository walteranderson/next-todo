type IconButtonProps = {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
};

export default function IconButton(props: IconButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`rounded p-1 text-xl ${props.className || ''}`}>
      {props.children}
    </button>
  );
}
