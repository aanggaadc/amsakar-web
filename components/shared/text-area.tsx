import { cn } from "@/lib/utils";
interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const TextArea = ({
  label,
  error,
  className,
  ...props
}: TextAreaProps) => {
  return (
    <div className="mb-6">
      <label className="text-base font-normal leading-6" htmlFor="message">
        {label}
      </label>
      <textarea
        className={cn(
          "w-full min-h-[224px] p-2 border rounded-[5px] border-solid border-[#383838] mt-2",
          className
        )}
        {...props}
      />
      {error && <p className="text-xs text-[red] mt-1">{error}</p>}
    </div>
  );
};
