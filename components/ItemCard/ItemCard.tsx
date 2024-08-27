import Image from "next/image"
import { thousandText, tumanText } from "../locales"

interface Props {
    title: string
    caption: string
    price: string
    imageUrl: string
}

const ItemCard = ({ title, caption, price, imageUrl }: Props) => {
    return (
        <div className="text-white p-1 md:p-3 flex flex-row md:flex-col">
            <div>
                <Image src={imageUrl} alt={title} />
            </div>
            <div>
                <h6>{title}</h6>
                <p className="hidden md:block">{caption}</p>
                <div className="flex justify-end items-center">
                    <span>{price}</span>
                    <div className="flex flex-col">
                        <span>{thousandText}</span>
                        <span>{tumanText}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
