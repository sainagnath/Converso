import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({id,name,topic,subject,duration,color} : CompanionCardProps) => {
    return ( 
        <article className="companion-card" style={{backgroundColor : color}}>
            <div className="flex justify-between items-center">
                <div className="subject-badge">{subject}</div>
                <button className="companion-bookmark">
                    <img src="/icons/bookmark.svg" alt="" width={12.5} height={15} />
                </button>
            </div>
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-sm">Topic : {topic}</p>
            <div className="flex items-center gap-2">
                <img src="/icons/clock.svg" alt="clock icon" width={13.5} height={13.5} />
                <span className="text-sm">{duration} minutes</span>
            </div>
            <Link href={`/companion/${id}`} className="w-full">
            <button className="justify-center btn-primary w-full">Launch Lesson</button>
            </Link>
        </article>
     );
}
 
export default CompanionCard;