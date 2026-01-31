import ExploreBtn from "@/components/ExploreBtn";
import EventCard from "@/components/EventCard";
import {events} from "@/lib/constants";

const Page = () => {
    return (
        <section>
            <h1 className="text-center">Welcome to Ligiero Industries! <br /> Lego Gun Designs for enthusiasts</h1>
            <p className="text-center mt-5">Lego CADs, Building Instructions and Guns Designs</p>

            <ExploreBtn />

            <div className="mt-20 space-y-7">
                <h3>Featured Designs</h3>

                <ul className="events">
                    {events.map((event) => (
                        <li key={event.title}>
                            <EventCard { ... event} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Page;