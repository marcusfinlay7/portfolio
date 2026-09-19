import type { ProjectContent } from "@/lib/projects"

export const imageProcessor: ProjectContent = {
    slug: "image-processor",
    title: "Image Processor",
    category: "software",
    description:
        "A C++ image processor built to explore filtering algorithms and object-oriented software design.",
    comparisonImages: {
        left: {
            src: "/images/projects/image-processor-apple.jpg",
            alt: "Original full-colour photograph of a red apple",
            width: 1280,
            height: 1160,
        },
        right: {
            src: "/images/projects/image-processor-dithered-apple.png",
            alt: "Dithered purple output produced from the apple image",
            width: 160,
            height: 145,
        },
    },
    tags: ["C++", "OOP", "Image processing"],
    metric: "Reusable filter architecture",
    span: "md:col-span-5",
    eyebrow: "Software",
    caseStudyTags: ["C++", "Object-oriented programming", "Image processing"],
    meta: [
        ["Type", "Independent project"],
        ["Language", "C++"],
        ["Focus", "Filters + file handling"],
    ],
    toc: [
        { id: "overview", title: "Overview" },
        { id: "how-it-works", title: "How it works" },
        { id: "software-design", title: "Software design" },
        { id: "next-steps", title: "Next steps" },
    ],
    Body: () => (
        <>
            <h2 id="overview">Overview</h2>
            <p>
                This project is a C++ image processor created to explore image
                filtering algorithms and strengthen my object-oriented
                programming skills. It provides a foundation for loading an
                image, changing its pixel data, and saving the processed result.
            </p>

            <h2 id="how-it-works">How it works</h2>
            <p>
                The program reads image data into memory, applies a selected
                filter, and writes the modified image back to a file. Each
                filter performs a focused transformation, making it easier to
                test how individual algorithms affect the final image.
            </p>
            <p>
                The apple example uses 4×4 Bayer ordered dithering. For each
                pixel, the program uses a repeating Bayer threshold matrix to
                choose between four available display colours. The resulting
                pattern creates the appearance of additional shades even though
                the processed image is limited to a four-colour palette.
            </p>

            <h2 id="software-design">Software design</h2>
            <p>
                Image storage and file handling are organized into reusable C++
                classes. Keeping those responsibilities separate from the
                filtering logic makes the code easier to understand and allows
                new filters to be added without rewriting the rest of the
                program.
            </p>

            <h2 id="next-steps">Next steps</h2>
            <p>
                Development is continuing with additional filters and further
                improvements to the class structure. More technical details and
                visuals can be added once the final project examples are ready.
            </p>
        </>
    ),
}
