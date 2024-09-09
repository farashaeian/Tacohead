import Image from "next/image"
import { thousandText, tumanText } from "../../locales"
import { PizzaImage, PizzaMobileImage } from "@/public/images"

interface Props {
    title: string
    caption: string
    price: string
    imageUrl?: string
}

const ItemCard = ({ title, caption, price, imageUrl }: Props) => {
    return (
        <div className="text-white p-1.5 md:p-3 flex flex-row items-center justify-start md:flex-col md:justify-center md:items-center gap-2.5 md:gap-3 bg-secondary-200 max-w-[394px] rounded-xl">
            <div className="rounded-lg w-[84px] h-[84px] md:w-full md:h-[200px]">
                {imageUrl ? <Image src={imageUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
                    : <PizzaMobileImage className="w-full h-full object-cover rounded-lg"/>}
            </div>
            <div className="flex-1">
                <h6 className="mb-1">{title}</h6>
                <p className="mb-1 text-white-state-100 font-light text-[10px] md:text-xs leading-[14px] overflow-hidden text-ellipsis line-clamp-[1] md:overflow-visible md:line-clamp-none">{caption}</p>
                <div className="flex justify-end items-end gap-0.5 md:gap-2.5">
                    <span className="font-normal text-[21px] md:text-[23px] leading-[21px]">{price}</span>
                    <div className="flex flex-col gap-0">
                        <span className="font-normal text-[8px] leading-[9.5px] md:text-[10px]">{thousandText}</span>
                        <span className="font-bold text-[8px] leading-[9.5px] md:text-[10px]">{tumanText}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
