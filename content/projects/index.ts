import type { ProjectContent } from "@/lib/projects"

import { angus } from "./angus"
import { imageProcessor } from "./image-processor"
import { wearableObstacleDetector } from "./wearable-obstacle-detector"

// Order drives both the projects grid and each project's navigation links.
export const projects: ProjectContent[] = [
    angus,
    wearableObstacleDetector,
    imageProcessor,
]
