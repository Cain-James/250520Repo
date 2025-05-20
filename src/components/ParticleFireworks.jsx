import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { fireworks } from '@tsparticles/fireworks';

export default function ParticleFireworks() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
        await engine.addPreset('fireworks', fireworks);
    }, []);

    const options = {
        preset: 'fireworks',
        detectRetina: true,
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 0
            },
            color: {
                value: ['#ff69b4', '#ff1493', '#ff69b4', '#ff69b4']
            },
            shape: {
                type: 'heart',
                options: {
                    heart: {
                        fill: true,
                        close: true
                    }
                }
            },
            opacity: {
                value: 1
            },
            size: {
                value: { min: 1, max: 3 }
            },
            move: {
                enable: true,
                gravity: {
                    enable: true,
                    acceleration: 9.81
                },
                speed: 10,
                direction: 'none',
                random: true,
                straight: false,
                outModes: {
                    default: 'destroy',
                    bottom: 'destroy'
                }
            }
        },
        emitters: {
            direction: 'top',
            life: {
                count: 0,
                duration: 0.1
            },
            position: {
                x: 50,
                y: 100
            },
            rate: {
                delay: 0.1,
                quantity: 1
            }
        },
        background: {
            color: 'transparent'
        }
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={options}
            className="absolute inset-0 pointer-events-none"
        />
    );
} 