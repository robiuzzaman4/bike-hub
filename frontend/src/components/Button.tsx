import { TButtonProps } from "@/types/types";

const Button = ({ title, type, btnStyle, handleClick, iconSrc }: TButtonProps) => {
    return (
        <button
            title={title}
            type={type ? type : 'button'}
            onClick={handleClick}
            className={`px-4 py-2 rounded-full bg-bh-primary transition text-bh-neutrals-100 font-medium flex items-center justify-between gap-2 shrink-0 ${btnStyle && btnStyle}`}
        >
            <span className="flex-1">
                {title}
            </span>

            {
                iconSrc && <div className="bg-bh-neutrals-100/30 h-5 w-5 flex items-center justify-center rounded-md">
                    <i className={`${iconSrc}`}></i>
                </div>
            }
        </button>
    );
};

export default Button;