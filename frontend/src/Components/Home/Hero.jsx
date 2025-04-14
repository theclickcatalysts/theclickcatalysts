import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../../assets/Home/banner.png";
import { Link } from "react-router-dom";

// Fly-in Animation for the image
const flyIn = {
  hidden: { opacity: 0, x: -100, y: 100 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Fade-in animation for text
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Landing() {
  const canvasRef = useRef(null);
  let particles = [];
  let animationFrame;
  let mouse = { x: null, y: null };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1;
    };

    const getLimitedRandom = (min, max) => Math.random() * (max - min) + min;

    class Particle {
      constructor(x, y) {
        this.x = x || Math.random() * canvas.width;
        this.y = y || Math.random() * canvas.height;
        this.radius = getLimitedRandom(1.5, 2.5);
        this.opacity = 0.8;
        this.velocity = {
          x: (Math.random() - 0.5) * 2.5,
          y: (Math.random() - 0.5) * 2.5,
        };
        this.particleColor = "#61ead6";
      }

      update() {
        if (this.opacity < 1) this.opacity += 0.01;
        if (this.x > canvas.width || this.x < 0) this.velocity.x *= -1;
        if (this.y > canvas.height || this.y < 0) this.velocity.y *= -1;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.particleColor;
        ctx.globalAlpha = this.opacity;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    const createParticles = () => {
      particles = [];
      const quantity = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle());
      }
    };
    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          let p1 = particles[i],
            p2 = particles[j];
          let distance = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (distance > 200) continue;
          ctx.beginPath();
          ctx.strokeStyle = "#66c4ff";
          ctx.globalAlpha = ((200 - distance) / 200) * p1.opacity * p2.opacity;
          ctx.lineWidth = 1;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    };
    const drawMouseConnections = () => {
      particles.forEach((particle) => {
        let distance = Math.hypot(mouse.x - particle.x, mouse.y - particle.y);
        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = "#b3e2ff";
          ctx.globalAlpha = (150 - distance) / 150;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawConnections();
      drawMouseConnections();
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrame = requestAnimationFrame(animate);
    };

    const spawnParticles = (x, y) => {
      for (let i = 0; i < 5; i++) {
        particles.push(new Particle(x, y));
      }
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);
    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    });
    canvas.addEventListener("click", (event) => {
      spawnParticles(event.clientX, event.clientY);
    });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", () => {});
      canvas.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <section className=" relative w-full bg-gradient-to-r from-grSt to-grEnd py-20 px-4 md:px-10 flex justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full cursor-white" />
      <div className="cursor-white relative w-full max-w-7xl flex flex-col-reverse lg:flex-row justify-between items-center gap-12">
        <motion.div
          className="w-full lg:w-1/2 text-white text-center lg:text-left space-y-6 cursor-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeInLeft}
        >
          <h3 className="text-sm sm:text-base lg:text-lg tracking-wide font-primary">
            Welcome to{" "}
            <span className="font-semibold font-primary">CLICK CATALYSTS</span>
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-black leading-snug font-headingFont">
            Drive Your Business to New Heights
          </h1>
          <p className="text-white/90 text-base sm:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0 font-primary">
            Elevate your brand with powerful digital strategies. From creative
            campaigns to data-driven results — let’s grow together.
          </p>
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <Link to="/contact">
              <button className="text-base bg-secoundary hover:bg-white hover:text-secoundary text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-secoundary/40 flex items-center justify-center gap-2 transition-all duration-300">
                Get in Touch <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 flex justify-center cursor-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={flyIn}
        >
          <img
            src={heroImg}
            alt="Digital marketing strategies"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
