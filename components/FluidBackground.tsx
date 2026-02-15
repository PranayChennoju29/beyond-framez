"use client";

import { useEffect, useRef } from "react";

export default function FluidBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let cleanup: any;

        import("webgl-fluid").then((Fluid) => {
            cleanup = Fluid.default({
                el: containerRef.current,
                transparency: true,
            });
        });

        return () => {
            if (cleanup) cleanup.destroy?.();
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 -z-10"
            suppressHydrationWarning
        />
    );
}
