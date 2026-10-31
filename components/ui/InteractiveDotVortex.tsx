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
  hasGlint: boolean;
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

    // Luminous Brand Colors for Bright Shining Stars
    const starColors = [
      '#2F4A9F', // Deep Brand Blue
      '#0284C7', // Sky Blue
      '#72D0E3', // Signature Sky Cyan
      '#38BDF8', // Luminous Cyan
      '#00C8FF', // Radiant Electric Cyan
      '#4A7DB8', // Mid Brand Blue
      '#2563EB', // Electric Royal Blue
      '#F59E0B', // Radiant Gold Sparkle
      '#FFFFFF', // Pure Brilliant White
      '#60A5FA', // Light Neon Blue
    ];

    // Group stars in a prominent circular galaxy vortex in the center
    const stars: Star[] = [];
    const totalRings = 24;

    const minRadius = Math.min(width, height) * 0.12; // ~95px - 115px
    const maxRadius = Math.min(width, height) * 0.44; // ~340px - 440px

    for (let r = 0; r < totalRings; r++) {
      const progress = r / (totalRings - 1);
      const orbitRadius = minRadius + progress * (maxRadius - minRadius);
      const count = Math.floor(18 + progress * 42);

      for (let i = 0; i < count; i++) {
        const baseAngle = (i / count) * Math.PI * 2;
        const angle = baseAngle + (r % 2 === 0 ? 0.08 : -0.08);
        const angularSpeed = (0.0012 + (1 - progress) * 0.0014) * (r % 2 === 0 ? 1 : -0.85);

        // Increased size for bright shining visibility: 3.4px to 7.2px
        const size = 3.4 + Math.random() * 3.8;
        const color = starColors[Math.floor(Math.random() * starColors.length)];
        const baseAlpha = 0.82 + (1 - progress * 0.2) * 0.18;
        const hasGlint = Math.random() > 0.3; // 70% of stars have extended shining glint rays

        stars.push({
          ring: r,
          orbitRadius,
          angle,
          angularSpeed,
          size,
          color,
          baseAlpha,
          twinkleSpeed: 1.8 + Math.random() * 2.6,
          phase: Math.random() * Math.PI * 2,
          hasGlint,
        });
      }
    }

    // Draw bright shining 4-pointed sparkle star with luminous halo, glint & core: ✦
    const drawShiningStar = (
      cx: number,
      cy: number,
      size: number,
      color: string,
      alpha: number,
      hasGlint: boolean
    ) => {
      ctx.save();
      ctx.translate(cx, cy);

      const effectiveAlpha = Math.max(0, Math.min(1, alpha));

      // 1. Soft Ambient Luminous Halo (Bright radiant glow around star)
      ctx.beginPath();
      ctx.arc(0, 0, size * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.globalAlpha = effectiveAlpha * 0.35;
      ctx.fill();

      // 2. Extended Shining Glint Rays for prominent sparkles
      if (hasGlint) {
        ctx.beginPath();
        const rayLength = size * 2.2;
        const rayWidth = size * 0.28;
        // Vertical flare
        ctx.moveTo(0, -rayLength);
        ctx.lineTo(rayWidth, 0);
        ctx.lineTo(0, rayLength);
        ctx.lineTo(-rayWidth, 0);
        ctx.closePath();
        // Horizontal flare
        ctx.moveTo(-rayLength, 0);
        ctx.lineTo(0, rayWidth);
        ctx.lineTo(rayLength, 0);
        ctx.lineTo(0, -rayWidth);
        ctx.closePath();
        ctx.fillStyle = color === '#FFFFFF' ? '#72D0E3' : color;
        ctx.globalAlpha = effectiveAlpha * 0.65;
        ctx.fill();

        // Diagonal soft micro-flares for extra sparkle
        const diagLength = size * 1.1;
        const diagWidth = size * 0.18;
        ctx.beginPath();
        ctx.moveTo(-diagLength, -diagLength);
        ctx.lineTo(0, -diagWidth);
        ctx.lineTo(diagLength, -diagLength);
        ctx.lineTo(diagWidth, 0);
        ctx.lineTo(diagLength, diagLength);
        ctx.lineTo(0, diagWidth);
        ctx.lineTo(-diagLength, diagLength);
        ctx.lineTo(-diagWidth, 0);
        ctx.closePath();
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = effectiveAlpha * 0.45;
        ctx.fill();
      }

      // 3. Sharp 4-Pointed Sparkle Star Body
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(0, 0, size, 0);
      ctx.quadraticCurveTo(0, 0, 0, size);
      ctx.quadraticCurveTo(0, 0, -size, 0);
      ctx.quadraticCurveTo(0, 0, 0, -size);
      ctx.fillStyle = color;
      ctx.globalAlpha = effectiveAlpha;
      ctx.fill();

      // 4. Bright Luminous White Core
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.38, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.globalAlpha = Math.min(1, effectiveAlpha * 1.1);
      ctx.fill();

      ctx.restore();
    };

    let time = 0;
    let globalRotation = 0;

    const render = () => {
      time += 0.028;

      const dxMouse = mouse.targetX - prevMouseX;
      const dyMouse = mouse.targetY - prevMouseY;
      const currentSpeed = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
      mouse.speed += (currentSpeed - mouse.speed) * 0.1;
      prevMouseX = mouse.targetX;
      prevMouseY = mouse.targetY;

      mouse.x += (mouse.targetX - mouse.x) * 0.07;
      mouse.y += (mouse.targetY - mouse.y) * 0.07;

      ctx.clearRect(0, 0, width, height);

      // Centered circular vortex coordinates tracking cursor
      const centerX = width * 0.5 + (mouse.x - width * 0.5) * 0.14;
      const centerY = height * 0.48 + (mouse.y - height * 0.48) * 0.14;

      const rotBoost = Math.min(mouse.speed * 0.0003, 0.0035);
      globalRotation += 0.0011 + rotBoost;

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.angle += star.angularSpeed;

        const currentAngle = star.angle + globalRotation;
        let sx = centerX + Math.cos(currentAngle) * star.orbitRadius;
        let sy = centerY + Math.sin(currentAngle) * star.orbitRadius;

        const dx = mouse.x - sx;
        const dy = mouse.y - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist && dist > 1) {
          const factor = 1 - dist / maxDist;
          const push = factor * 28;
          sx -= (dx / dist) * push;
          sy -= (dy / dist) * push;
        }

        // Shining twinkle wave with high floor so stars remain bright
        const twinkle = 0.78 + 0.32 * Math.sin(time * star.twinkleSpeed + star.phase);
        const currentAlpha = star.baseAlpha * twinkle;

        drawShiningStar(sx, sy, star.size, star.color, currentAlpha, star.hasGlint);
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
