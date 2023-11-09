import Button from "./button";
import TextInput from "./text-input";

interface TodoFormProps {
  onSubmit: (data: FormData) => void;
}

export default function TodoForm(props: TodoFormProps) {
  return (
    <form action={props.onSubmit} className="flex flex-row gap-2 w-full mt-4">
      <TextInput required name="text" placeholder="Add a todo" className="flex-1" />
      <Button type="submit">Save</Button>
    </form>
  );
}
