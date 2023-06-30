/*
 * File: particleBG.js
 * Project: portfolio
 * File Created: Tuesday, 27th June 2023 2:59:41 pm
 * Author: Paul Adrian Reyes (paulreyes74@yahoo.com)
 * GitHub: https://github.com/alcoranpaul
 * -----
 * Last Modified: Friday, 30th June 2023 2:56:30 pm
 * Modified By: PR (paulreyes74@yahoo.com>)
 * -----
 * -----
 * Description:
 */

import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
import { useMemo, useCallback } from "react"


const ParticleBG = () => {
    const options = useMemo(() => {
        return {
            autoPlay: true,
            fullScreen: {
                enable: true,
                zIndex: -99,
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    repulse: {
                        distance: 100,
                        duration: 1,
                    },
                },
            },
            particles: {
                color: {
                    value: "#902923",
                },
                links: {
                    color: "#d6d5c9",
                    distance: 200,
                    enable: true,
                    opacity: 0.1,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: true,
                    speed: { min: 0.5, max: 1 },
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.4,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 0.5, max: 5 },
                },
            },
            detectRetina: true,
        }
    }, [])

    const particlesInit = useCallback(engine => {
        loadSlim(engine)
    }, [])

    return (
        <Particles id="tsparticles" init={particlesInit} options={options} />
    )
}

export default ParticleBG;