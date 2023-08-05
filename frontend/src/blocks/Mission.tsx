import MissionCard from "@/components/MissionCard";
import { missionInfo } from "@/constants";

const Mission = () => {
    return (
        <section className="bh-container py-20 grid gap-8" id="mission">
            {/* title */}
            <div className="flex flex-col items-center mb-4">
                <h2 className="bh-text-h2 text-center">
                    Our Mission
                </h2>
                <p className="bh-text-small text-center">
                    Know our revolutionizing biking mission & culture.
                </p>
            </div>
            {/* mission card */}
            <div className="grid md:grid-cols-2 gap-8">
                {
                    missionInfo.map((mission) => (
                        <MissionCard key={mission.id} {...mission}/>
                    ))
                }
            </div>
        </section>
    );
};

export default Mission;