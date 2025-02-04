/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

'use client';

import Link from 'next/link';
import { useEffect } from 'react';
/* eslint-disable @typescript-eslint/no-use-before-define */
// import { useEffect } from 'react';

const initPage = () => {
  class Circle {
    pos: { x: number; y: number };

    alpha: number;

    scale: number;

    velocity: number;

    constructor() {
      this.pos = {
        x: Math.random() * width,
        y: height + Math.random() * 100,
      };
      this.alpha = 0.1 + Math.random() * 0.3;
      this.scale = 0.1 + Math.random() * 0.3;
      this.velocity = Math.random();
    }

    draw() {
      if (this.alpha <= 0) {
        this.init();
      }
      this.pos.y -= this.velocity;
      this.alpha -= 0.0005;
      if (ctx) {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.fill();
      }
    }

    private init() {
      this.pos.x = Math.random() * width;
      this.pos.y = height + Math.random() * 100;
      this.alpha = 0.1 + Math.random() * 0.3;
      this.scale = 0.1 + Math.random() * 0.3;
      this.velocity = Math.random();
    }
  }

  let lastTime = 0;
  let width = window.innerWidth;
  let height = window.innerHeight - 250;
  const largeHeader: HTMLElement | null =
    document.getElementById('large-header');
  const canvas: HTMLCanvasElement | null = document.getElementById(
    'demo-canvas',
  ) as HTMLCanvasElement | null;
  const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d') || null;
  let circles: Circle[] = [];
  let animateHeader = true;

  // Polyfill for requestAnimationFrame and cancelAnimationFrame
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback: FrameRequestCallback) => {
      const currTime = new Date().getTime();
      const timeToCall = Math.max(0, 16 - (currTime - lastTime));
      const id = window.setTimeout(() => {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (id: number) => {
      clearTimeout(id);
    };
  }

  // Main initialization
  initHeader();
  addListeners();

  function initHeader() {
    if (largeHeader) {
      largeHeader.style.height = `${height}px`;
    }

    if (canvas && ctx) {
      canvas.width = width;
      canvas.height = height;

      // Create circles
      circles = [];
      for (let x = 0; x < width * 0.5; x++) {
        circles.push(new Circle());
      }

      animate();
    }
  }

  function addListeners() {
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
  }

  function scrollCheck() {
    animateHeader = document.body.scrollTop <= height;
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight - 200;

    if (largeHeader && canvas) {
      largeHeader.style.height = `${height}px`;
      canvas.width = width;
      canvas.height = height;
    }
  }

  function animate() {
    if (animateHeader && ctx) {
      ctx.clearRect(0, 0, width, height);
      circles.forEach((circle) => circle.draw());
    }
    requestAnimationFrame(animate);
  }
};

const Header: React.FC = () => {
  useEffect(() => {
    initPage();
  }, []);
  return (
    <div
      id="large-header"
      className="position-relative"
      style={{
        backgroundImage:
          'linear-gradient(-135deg, rgb(14 12 27) 0%, rgb(48 48 66) 92%)',
        background: '#363256 rgba(94,110,220,0.50)',
        overflow: 'hidden',
      }}
    >
      <canvas id="demo-canvas" />
      <div
        className="header-main position-absolute"
        style={{
          paddingTop: '5.5rem',
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          alignItems: 'center',
          top: '25%',
          bottom: 0,
          height: '180px',
          width: '100%',
        }}
      >
        <div className="header-text" style={{ justifySelf: 'center' }}>
          <div className="header-text-box px-3">
            <h1 className="heading-1">Let Us Lunch Your Online Business!</h1>
            <br />
            <h4
              className="heading-4"
              style={{ fontSize: 'medium', lineHeight: 1.5 }}
            >
              Let us help you with our Learning & Experiences, We love to help
              others to built their Online Web Paradigm.
            </h4>
            <br />
            <div className="header-btn py-4">
              <button>
                <Link className="custom-btn-nav" href="#Browse">
                  Get Started
                </Link>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- <img width="" height="" src="{% static 'images/hero.webp' %}" alt="hero img"> --> */}
      </div>
    </div>
  );
};

export default Header;
