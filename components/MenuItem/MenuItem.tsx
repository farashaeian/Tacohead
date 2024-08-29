interface Props {
    icon: React.ElementType
    title: string
}
const MenuItem = ({
    icon: Icon,
    title
}: Props) => {
    return (
        <div className="p-1.5 md:p-3 bg-primary-100 md:bg-primary-200 w-16 h-16 md:w-[52px] md:h-12 flex flex-col md:flex-row justify-center md:justify-start items-center gap-1.5 md:gap-3 rounded-md">
            <Icon className="max-h-full max-w-full" />
            <span className="text-black font-normal text-[10px] leading-[10px] md:text-sm md:leading-[14px]">
                {title}
            </span>
        </div>
    )
}

export default MenuItem
