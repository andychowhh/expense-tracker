import { useFormStatus } from "react-dom";

export function SubmitButton({ disabled }: { disabled?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-500 sm:ml-3 sm:w-auto"
    >
      {pending ? "Adding" : "Add"}
    </button>
  );
}
