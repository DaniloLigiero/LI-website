import Link from 'next/link';
import Image from 'next/image';

interface Props {
    title: string;
    image: string;
    slug: string;
    model: string;
}

const EventCard = ({ title, image, slug, model }: Props) => {
    return (
        <Link href={'/events'}>
            < Image src={image} alt={title} width={410} height={300} className="poster" />
            <div className="flex flex-row gap-2">
                <Image src="/icons/pin.svg" alt="model" width={14} height={14}></Image>
                <p>{model}</p>
            </div>
            <p className="title">{title}</p>

            <div className="datetime">
                <div>
                    <Image src="/icons/calendar.svg" alt="date" width={14} height={14}/>
                </div>

            </div>

        </Link>

    )
}
export default EventCard
