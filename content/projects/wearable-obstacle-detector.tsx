import type { ProjectContent } from "@/lib/projects"

export const wearableObstacleDetector: ProjectContent = {
    slug: "wearable-obstacle-detector",
    title: "Wearable Obstacle Detector",
    category: "robotics",
    description:
        "A haptic wearable concept that uses angled distance sensors to warn the user about obstacles ahead.",
    image: {
        src: "/images/projects/wearable-obstacle-detector.jpg",
        alt: "Wearable obstacle detector prototype with shoulder strap and two front-facing distance sensors",
        width: 2880,
        height: 2160,
    },
    tags: ["Distance sensors", "Haptics", "Prototyping"],
    metric: "Accessible wearable prototype",
    span: "md:col-span-5",
    eyebrow: "Human-centred design",
    caseStudyTags: [
        "Human-centred design",
        "Distance sensing",
        "Haptics",
        "Prototype",
    ],
    meta: [
        ["Type", "Team design project"],
        ["Output", "Working prototype"],
        ["Focus", "Sensing + haptics"],
    ],
    toc: [
        { id: "overview", title: "Overview" },
        { id: "how-it-works", title: "How it works" },
        { id: "design-process", title: "Design process" },
        { id: "outcome", title: "Outcome" },
    ],
    Body: () => (
        <>
            <h2 id="overview">Overview</h2>
            <p>
                This team project explored a wearable navigation aid for a
                client with hearing and peripheral vision loss. The goal was to
                detect nearby obstacles and communicate them through touch,
                without depending on visual or auditory alerts.
            </p>

            <h2 id="how-it-works">How it works</h2>
            <p>
                Angled distance sensors monitor the area ahead of the wearer.
                When an obstacle enters the detection range, vibration motors
                create a haptic warning. The sensor angles and vibration pattern
                were adjusted so the feedback would arrive early enough to be
                useful without becoming distracting.
            </p>

            <h2 id="design-process">Design process</h2>
            <p>
                I led the team by delegating tasks, coordinating timelines, and
                communicating progress. We compared sensing options, tested
                different sensor placements, and refined the prototype based on
                how it behaved when worn rather than only testing it on a bench.
            </p>
            <ul>
                <li>Compared distance-sensing technologies</li>
                <li>Adjusted sensor placement to improve coverage</li>
                <li>Tuned haptic feedback for clear obstacle alerts</li>
            </ul>

            <h2 id="outcome">Outcome</h2>
            <p>
                The working prototype was presented through a live
                demonstration. It showed how sensing and haptic feedback could
                support the client&apos;s needs while reinforcing the importance
                of comfort, placement, and user context in accessible design.
            </p>
        </>
    ),
}
