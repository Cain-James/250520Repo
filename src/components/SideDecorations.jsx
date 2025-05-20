import { useEffect, useState } from 'react';

const Heart = ({ style }) => (
    <div
        className="absolute text-pink-500 animate-float"
        style={{
            ...style,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.6,
            filter: 'blur(1px)',
        }}
    >
        ❤
    </div>
);

const Sparkle = ({ style }) => (
    <div
        className="absolute w-1 h-1 bg-white rounded-full animate-glow"
        style={{
            ...style,
            animationDelay: `${Math.random() * 2}s`,
            opacity: 0.8,
        }}
    />
);

export default function SideDecorations() {
    const [hearts, setHearts] = useState([]);
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        // 生成心形
        const newHearts = Array.from({ length: 10 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() * 20 + 10,
        }));

        // 生成闪光点
        const newSparkles = Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));

        setHearts(newHearts);
        setSparkles(newSparkles);
    }, []);

    return (
        <>
            {/* 左侧装饰 */}
            <div className="fixed left-0 top-0 w-32 h-full pointer-events-none">
                {hearts.map((heart) => (
                    <Heart
                        key={`left-heart-${heart.id}`}
                        style={{
                            left: `${heart.left}%`,
                            top: `${heart.top}%`,
                            fontSize: `${heart.size}px`,
                        }}
                    />
                ))}
                {sparkles.map((sparkle) => (
                    <Sparkle
                        key={`left-sparkle-${sparkle.id}`}
                        style={{
                            left: `${sparkle.left}%`,
                            top: `${sparkle.top}%`,
                        }}
                    />
                ))}
            </div>

            {/* 右侧装饰 */}
            <div className="fixed right-0 top-0 w-32 h-full pointer-events-none">
                {hearts.map((heart) => (
                    <Heart
                        key={`right-heart-${heart.id}`}
                        style={{
                            left: `${heart.left}%`,
                            top: `${heart.top}%`,
                            fontSize: `${heart.size}px`,
                        }}
                    />
                ))}
                {sparkles.map((sparkle) => (
                    <Sparkle
                        key={`right-sparkle-${sparkle.id}`}
                        style={{
                            left: `${sparkle.left}%`,
                            top: `${sparkle.top}%`,
                        }}
                    />
                ))}
            </div>
        </>
    );
} 