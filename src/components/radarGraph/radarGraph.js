/*
 * File: radarGraph.js
 * Project: portfolio
 * File Created: Tuesday, 13th June 2023 10:14:44 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Tuesday, 13th June 2023 10:34:59 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import { RadarGraphContainer } from "./radarGraph.styles";
import {
    Radar,
    PolarGrid,
    PolarAngleAxis,
} from "recharts";

const data = [ //Use the formula below at line 61 to calculate the scaled radius for each category.
    {
        subject: "Software",
        A: 64,
    },
    {
        subject: "Game",
        A: 21,
    },
    {
        subject: "Web",
        A: 64,
    }
];

export default function RadarGraph() {
    return (

        <RadarGraphContainer
            cx={200}
            cy={200}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
        >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: "var(--color-text)" }} />
            <Radar
                name="CodeStyle"
                dataKey="A"
                stroke="var(--color-text)"
                fill="#8884d8"
                fillOpacity={0.4}
            />
        </RadarGraphContainer>
    );
}

/**
 * scaledRadius = (numberOfSkillsInCategory / totalNumberOfSkills) * totalRadius
 * 
 *  scaledRadius: The scaled radius to be assigned to the category.
 *  numberOfSkillsInCategory: The number of skills in the specific category.
 *  totalNumberOfSkills: The total number of skills across all categories.
 *  totalRadius: The total radius of the radar graph.
 * 
 *  Using this formula, you can calculate the scaled radius for each category based on the number of skills in that category and the total number of skills.
 *
 */