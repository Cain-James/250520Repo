import { useState } from 'react';
import ParticleFireworks from './components/ParticleFireworks';
import SideDecorations from './components/SideDecorations';

export default function App() {
    const [message] = useState(`碧荷初涨护晚槐，蝉唱曦光透朱槐。
忆昔戊戌梅初回，尺素沈水鸿归回。
四载流年心未裁，北寒南露共相裁。
壬寅隔雾思常在，笑泪春风绕指才。

玄柳烟笼洗玉回，桐阴映院锁朱回。
不怨银河隔云哉，但凭灵犀透翠哉。
春归破雾连荷载，并蒂初开共剪载。
尾生抱柱传旧谐，刘纲举俎效长谐。

甲辰晨曦拂素怀，六朝烟水定良怀。
此情澄澈非徒霭，潮生涌影印纤霭。
三生石畔早刻载，天海为盟共此载。
`);

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-pinkLight to-pinkDark flex flex-col items-center justify-center p-4 overflow-hidden">
            <SideDecorations />
            <div className="z-10 text-center max-w-3xl mx-auto animate-fade-in">
                <h1 className="text-6xl font-bold mb-12 text-white drop-shadow-lg animate-bounce">
                    宝宝，520快乐
                </h1>
                <div
                    className="relative w-full h-[500px] cursor-pointer"
                    style={{ perspective: '1000px' }}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    <div
                        className={`absolute w-full h-full transition-transform duration-1000`}
                        style={{
                            transformStyle: 'preserve-3d',
                            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
                        }}
                    >
                        {/* 正面 */}
                        <div
                            className="absolute w-full h-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl"
                            style={{ backfaceVisibility: 'hidden' }}
                        >
                            <div className="space-y-4">
                                {message.split('\n\n').map((paragraph, index) => (
                                    <div
                                        key={index}
                                        className="text-xl leading-loose text-pinkDark font-serif animate-fade-in"
                                        style={{
                                            animationDelay: `${index * 0.5}s`,
                                            textShadow: '0 0 10px rgba(255, 105, 180, 0.2)'
                                        }}
                                    >
                                        {paragraph.split('\n').map((line, lineIndex) => (
                                            <div
                                                key={lineIndex}
                                                className="hover:text-pink-600 transition-colors duration-300"
                                            >
                                                {line}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 背面 */}
                        <div
                            className="absolute w-full h-full bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl"
                            style={{
                                backfaceVisibility: 'hidden',
                                transform: 'rotateY(180deg)'
                            }}
                        >
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="text-8xl mb-8 animate-float">❤</div>
                                <p className="text-3xl font-serif text-pinkDark animate-fade-in">
                                    2025520
                                </p>
                                <p className="text-2xl font-serif text-pinkDark mt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                                    三生有幸 同行七载
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white/80 text-sm font-mono mt-4 animate-fade-in" style={{ animationDelay: '2s' }}>
                    <p className="mb-2">© 2024 YYH Digital Studio. All Rights Reserved.</p>
                    <p className="text-xs opacity-60">Powered by React • Tailwind CSS • tsParticles</p>
                    <p className="text-xs opacity-40 mt-1">Version 1.0.0 • Built with ❤️</p>
                </div>
            </div>
            <ParticleFireworks />
        </div>
    );
} 