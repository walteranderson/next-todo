interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  //
}

export default function TextInput(props: TextInputProps) {
  return (
    <input
      type="text"
      {...props}
      className={`border border-gray-300 rounded py-2 px-4 ${props.className || ''}`}
    />
  );
}
