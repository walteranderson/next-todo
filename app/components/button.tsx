interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  //
}

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-green-700 text-white border border-green-700 rounded py-2 px-4 transition-colors hover:bg-green-600 ${props.className || ''}`}>
      {props.children}
    </button>
  );
}
