'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  ring: number;
  orbitRadius: number;
  angle: number;
  angularSpeed: number;
  size: number;
  color: string;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
}

export const InteractiveDotVortex: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      speed: 0,
    };

    let prevMouseX = width / 2;
    let prevMouseY = height / 2;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Brand color palette for the stars (matching logo and reference)
    const starColors = [
      '#2F4A9F', // Deep Blue
      '#4A7DB8', // Mid Blue
      '#72D0E3', // Sky Cyan
      '#3B82F6', // Vibrant Blue
      '#72D0E3', // Cyan
      '#F59E0B', // Warm Gold Accent
      '#2F4A9F',
      '#4A7DB8',
    ];

    // Group stars in a defined circular vortex in the center
    const stars: Star[] = [];
    const totalRings = 22;

    // Minimum and maximum radius to create a distinct, centered circular formation
    const minRadius = Math.min(width, height) * 0.12; // ~90px - 110px inner core
    const maxRadius = Math.min(width, height) * 0.44; // ~340px - 440px outer perimeter

    for (let r = 0; r < totalRings; r++) {
      const progress = r / (totalRings - 1);
      // Concentric circles grouped tightly from inner to outer boundary
      const orbitRadius = minRadius + progress * (maxRadius - minRadius);
      
      // Star density increases with circumference to form a solid circular ring
      const count = Math.floor(16 + progress * 40);

      for (let i = 0; i < count; i++) {
        // Equal spacing around the circular perimeter with small natural variance
        const baseAngle = (i / count) * Math.PI * 2;
        const angle = baseAngle + (r % 2 === 0 ? 0.08 : -0.08);

        // Circular orbital rotation speed (alternating subtle counter-twist)
        const angularSpeed = (0.0012 + (1 - progress) * 0.0014) * (r % 2 === 0 ? 1 : -0.85);

        // Micro star size: 1.8px to 3.8px
        const size = 1.6 + Math.random() * 2.2;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const baseAlpha = 0.45 + (1 - progress * 0.3) * 0.5;

        stars.push({
          ring: r,
          orbitRadius,
          angle,
          angularSpeed,
          size,
          color,
          baseAlpha,
          twinkleSpeed: 1.5 + Math.random() * 2,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    // Draw delicate 4-pointed sparkle micro star: ✦
    const drawMicroStar = (
      cx: number,
      cy: number,
      size: number,
      color: string,
      alpha: number
    ) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.fillStyle = color;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(0, 0, size, 0);
      ctx.quadraticCurveTo(0, 0, 0, size);
      ctx.quadraticCurveTo(0, 0, -size, 0);
      ctx.quadraticCurveTo(0, 0, 0, -size);
      ctx.fill();

      // Tiny crisp center point
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();

      ctx.restore();
    };

    let time = 0;
    let globalRotation = 0;

    const render = () => {
      time += 0.025;

      // Mouse speed calculation
      const dxMouse = mouse.targetX - prevMouseX;
      const dyMouse = mouse.targetY - prevMouseY;
      const currentSpeed = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      mouse.speed += (currentSpeed - mouse.speed) * 0.1;
      prevMouseX = mouse.targetX;
      prevMouseY = mouse.targetY;

      // Smooth cursor lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      ctx.clearRect(0, 0, width, height);

      // The circular star formation is grouped right in the center!
      // Its center dynamically shifts according to cursor movement
      const centerX = width * 0.5 + (mouse.x - width * 0.5) * 0.14;
      const centerY = height * 0.48 + (mouse.y - height * 0.48) * 0.14;

      // Dynamic rotation accelerates slightly when moving the cursor
      const rotBoost = Math.min(mouse.speed * 0.0003, 0.003);
      globalRotation += 0.001 + rotBoost;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.angle += star.angularSpeed;

        const currentAngle = star.angle + globalRotation;
        
        // Exact concentric circle position
        let sx = centerX + Math.cos(currentAngle) * star.orbitRadius;
        let sy = centerY + Math.sin(currentAngle) * star.orbitRadius;

        // Interaction: nearby stars deflect and follow cursor flow
        const dx = mouse.x - sx;
        const dy = mouse.y - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist && dist > 1) {
          const factor = 1 - dist / maxDist;
          const push = factor * 26;
          sx -= (dx / dist) * push;
          sy -= (dy / dist) * push;
        }

        // Smooth twinkling
        const twinkle = 0.7 + 0.3 * Math.sin(time * star.twinkleSpeed + star.phase);
        const currentAlpha = star.baseAlpha * twinkle;

        drawMicroStar(sx, sy, star.size, star.color, currentAlpha);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${className}`}
    />
  );
};
