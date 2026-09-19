import type { ProjectContent } from "@/lib/projects"

export const angus: ProjectContent = {
    slug: "angus",
    title: "Angus - Self-Balancing Robot",
    category: "robotics",
    description:
        "A two-wheel balancing robot built to learn embedded control from the sensor all the way to the motors.",
    image: {
        src: "/images/projects/angus1.jpg",
        alt: "Angus self-balancing robot with its chassis, electronics, motors, and wheels visible",
        width: 2880,
        height: 2160,
        displayAspectRatio: "16 / 9",
    },
    tags: ["C++", "PID", "CAD", "ESP32"],
    metric: "Working self-balancing prototype",
    span: "md:col-span-7",
    eyebrow: "Robotics",
    caseStudyTags: [
        "Featured build",
        "C++",
        "ESP32-C3",
        "PID control",
        "Encoders",
    ],
    meta: [
        ["Role", "Independent build"],
        ["Status", "Working prototype"],
        ["Focus", "Controls + embedded"],
    ],
    toc: [
        { id: "overview", title: "Overview" },
        { id: "how-it-works", title: "How it works" },
        { id: "development", title: "Development" },
        { id: "results", title: "Results" },
    ],
    Body: () => (
        <>
            <h2 id="overview">Overview</h2>
            <p>
                Angus is a two-wheeled robot that continuously measures its
                angle and drives its wheels to keep itself upright. I designed
                and built the project to learn how mechanical design,
                electronics, sensing, and embedded control work together in one
                system.
            </p>

            <h2 id="how-it-works">How it works</h2>
            <p>
                An ESP32 reads tilt data from an IMU and compares the measured
                angle with the target upright position. A PID controller turns
                that error into motor commands, correcting the robot before it
                falls too far to recover. Wheel encoders measure movement, and a
                WebSocket server allows driving and steering commands to be sent
                from a phone.
            </p>
            <ul>
                <li>ESP32 microcontroller running embedded C++</li>
                <li>IMU for real-time orientation data</li>
                <li>Two DC motors with encoder feedback</li>
                <li>PID control for balancing</li>
            </ul>

            <h2 id="development">Development</h2>
            <p>
                I modelled the chassis, assembled the electronics, wrote the
                control software, and tuned the response on the physical robot.
                When the system failed, I tested each subsystem separately with
                a digital multimeter instead of assuming every problem came from
                the controller.
            </p>

            <h2 id="results">Results</h2>
            <p>
                The finished prototype can balance and accept wireless movement
                commands. The project showed me that reliable control depends on
                the complete system: clean sensor data, predictable timing,
                solid wiring, responsive motors, and a stiff mechanical frame.
            </p>
        </>
    ),
}
