import React, { useState } from "react";

import { FaPlay } from "react-icons/fa";


export default function ModalVideo() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="flex items-center justify-center gap-8" >

            <div className="relative flex items-center justify-center">
                {/* الهالة المتوهجة */}
                <span className="absolute w-32 h-32 rounded-full bg-white/25 opacity-20 animate-pulse"></span>

                {/* الزر نفسه */}
                <button
                    onClick={openModal}
                    className="relative z-10 bg-white text-gray-500 text-2xl px-8 py-8 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition transform"
                >
                    <FaPlay />
                </button>
            </div>
            <p className="text-2xl font-bold">watch video intro</p>

            {/* الـ Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-5xl h-[70vh] bg-black rounded-lg overflow-hidden">
                        {/* زر الإغلاق */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-500 z-10"
                        >
                            &times;
                        </button>

                        {/* iframe الفيديو */}
                        <div className="relative w-full max-w-5xl h-[60vh] bg-black rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/668nUCeBHyY?autoplay=1"
                                title="Nature Beautiful short video 720p HD"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// 