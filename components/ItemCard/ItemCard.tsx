import Image from "next/image"
import { thousandText, tumanText } from "../locales"
import { PizzaImage, PizzaMobileImage } from "@/public/images"

interface Props {
    title: string
    caption: string
    price: string
    imageUrl?: string
}

const ItemCard = ({ title, caption, price, imageUrl }: Props) => {
    return (
        <div className="text-white p-1.5 md:p-3 flex flex-row md:flex-col gap-2.5 md:gap-3 bg-secondary-200 max-w-[394px] rounded-xl">
            <div className="rounded-lg md:w-full md:max-h-52">
                <Image src={imageUrl ?? PizzaImage} alt={title} className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div>
                <h6 className="mb-1">{title}</h6>
                <p className="mb-1 text-white-state-100 font-light text-[10px] md:text-xs leading-[14px]">{caption}</p>
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
