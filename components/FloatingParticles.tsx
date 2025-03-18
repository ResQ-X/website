"use client";

import React, { useEffect, useRef } from 'react';

class Particle {
  constructor(canvas, mousePos) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.mousePos = mousePos;
    this.reset(true);
    this.twinkle = Math.random() * 0.5 + 0.5;
  }

  reset(initial = false) {
    this.x = initial ? Math.random() * this.canvas.width : -50;
    this.y = initial ? Math.random() * this.canvas.height : Math.random() * this.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * 0.2,
      y: (Math.random() - 0.5) * 0.2
    };
    this.radius = Math.pow(Math.random(), 2) * 2 + 0.5;
    this.baseRadius = this.radius;
    this.proximity = 100;
    this.trail = [];
    this.trailLength = 10;
  }

  draw() {
    // Draw star trail
    for (let i = 0; i < this.trail.length; i++) {
      const alpha = i / this.trail.length;
      this.ctx.beginPath();
      this.ctx.arc(
        this.trail[i].x, 
        this.trail[i].y, 
        this.radius * alpha, 
        0, 
        Math.PI * 2
      );
      this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.2})`;
      this.ctx.fill();
    }

    // Draw main star
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(255, 255, 255, ${this.twinkle * 0.8})`;
    this.ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
    this.ctx.shadowBlur = 15;
    this.ctx.fill();
  }

  update() {
    this.twinkle = Math.abs(Math.sin(Date.now() * 0.002)) * 0.5 + 0.5;

    this.trail.push({ x: this.x, y: this.y });
    if (this.trail.length > this.trailLength) {
      this.trail.shift();
    }

    const dx = this.mousePos.x - this.x;
    const dy = this.mousePos.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < this.proximity) {
      const angle = Math.atan2(dy, dx);
      const force = (this.proximity - distance) / this.proximity;
      this.velocity.x += Math.cos(angle) * force * 0.03;
      this.velocity.y += Math.sin(angle) * force * 0.03;
      this.radius = this.baseRadius + (1 * force);
    } else {
      this.radius = Math.max(this.baseRadius * 0.3, this.radius * 0.97);
    }

    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < -50 || this.x > this.canvas.width + 50) this.velocity.x *= -0.5;
    if (this.y < -50 || this.y > this.canvas.height + 50) this.velocity.y *= -0.5;

    this.draw();
  }
}

const DarkParticles = ({ 
  particleCount = 200,
  proximity = 150,
  baseSpeed = 0.2 
}) => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    particles.current = Array.from({ length: particleCount }, () => 
      new Particle(canvas, mousePos.current)
    );

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
      ctx.fillStyle = '#0B0805'; // Solid dark brown background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach(particle => {
        particle.proximity = proximity;
        particle.update();
      });

      // Draw subtle connection lines
      ctx.beginPath();
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const alpha = 1 - distance / 120;
            ctx.strokeStyle = `rgba(255, 133, 0, ${alpha * 0.01})`; // #FF8500 with low opacity
            ctx.lineWidth = 0.3;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
          }
        }
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, proximity, baseSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#000' }}
    />
  );
};

export default DarkParticles;