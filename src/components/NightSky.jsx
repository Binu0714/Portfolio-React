import React, { useEffect, useRef } from 'react';

const NightSky = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // 1. Setup Canvas Size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 2. Your Original Classes
    class Star {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random();
        this.speed = 0.2 + Math.random() * 0.2;
      }
      update() {
        this.y += this.speed;
        if (this.y > canvas.height) { this.reset(); this.y = 0; }
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    class ShootingStar {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height / 2;
        this.len = Math.random() * 80 + 20;
        this.speed = 6 + Math.random() * 4;
        this.angle = Math.PI / 4;
        this.alpha = 1;
        this.life = 0;
      }
      update() {
        this.life++;
        this.x += this.speed * Math.cos(this.angle);
        this.y += this.speed * Math.sin(this.angle);
        this.alpha -= 0.015;
        if (this.alpha <= 0 || this.life > 80) this.reset();
      }
      draw() {
        const xEnd = this.x + this.len * Math.cos(this.angle);
        const yEnd = this.y + this.len * Math.sin(this.angle);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();
      }
    }

    // 3. Your Original Logic
    const stars = Array.from({ length: 200 }, () => new Star());
    const shootingStars = [];
    const interval = setInterval(() => {
      if (shootingStars.length < 4) shootingStars.push(new ShootingStar());
    }, 10000);

    let animationFrameId;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => { star.update(); star.draw(); });
      shootingStars.forEach((shootingStar, index) => {
        shootingStar.update();
        shootingStar.draw();
        if (shootingStar.alpha <= 0) shootingStars.splice(index, 1);
      });
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    // 4. Cleanup
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 bg-black" />;
};

export default NightSky;