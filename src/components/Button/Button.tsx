
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    children?: React.ReactNode;
    className?: string;
}
const defaultClasses = `
    text-white
    bg-primary
    hover:bg-orange-800 
    focus:ring-4 
    focus:ring-orange-300 
    font-medium 
    rounded-lg 
    text-sm
    h-[50px]
    px-5 py-2.5 
    text-center 
    mr-2 mb-2
    dark:bg-primary
    dark:hover:bg-orange-400
    dark:focus:ring-orange-800 
    min-w-[100px]
    disabled:cursor-not-allowed
    disabled:opacity-50
  `;

const Button: React.FC<ButtonProps> = ({
    text,
    children,
    className,
    type,
    ...props
}) => (
    <button type={type} className={className ?? defaultClasses} {...props}>
        {text}
    </button>

)

export default Button;
