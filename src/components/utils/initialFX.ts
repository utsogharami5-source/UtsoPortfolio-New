import gsap from "gsap";
import { smoother } from "../Navbar";

let isInitialized = false;

export async function initialFX() {
  if (isInitialized) return;
  isInitialized = true;

  // Ensure fonts are loaded
  if (document.fonts) {
    try {
      await Promise.race([
        document.fonts.load("1em Geist"),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Font timeout")), 3000)),
      ]);
    } catch (e) {
      console.warn("initialFX: font issues", e);
    }
  }

  document.body.style.overflowY = "auto";
  if (smoother) smoother.paused(false);
  
  const main = document.getElementsByTagName("main")[0];
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  // Manual split text implementation for license-free use
  const splitElements = document.querySelectorAll(".landing-info h3, .landing-intro h2, .landing-intro h1");
  const allChars: HTMLElement[] = [];

  splitElements.forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      el.appendChild(span);
      allChars.push(span);
    });
  });

  gsap.fromTo(
    allChars,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      duration: 1.2,
      filter: "blur(0px)",
      ease: "power3.inOut",
      y: 0,
      stagger: 0.02,
      delay: 0.3,
    }
  );

  // Use Custom Scramble for the looping words on a single element
  LoopText("#looping-text");
}

/**
 * Custom scramble effect function to replace ScrambleTextPlugin for production.
 */
function scrambleTo(el: HTMLElement, targetText: string, duration: number) {
  const chars = "01#%&@*XO<>[]$!+";
  const originalText = el.innerText;
  const maxLength = Math.max(originalText.length, targetText.length);
  const obj = { progress: 0 };

  return gsap.to(obj, {
    progress: 1,
    duration: duration,
    ease: "none",
    onStart: () => el.classList.add("scramble-active"),
    onComplete: () => {
      el.innerText = targetText;
      el.classList.remove("scramble-active");
    },
    onUpdate: () => {
      let result = "";
      const p = obj.progress;
      
      for (let i = 0; i < maxLength; i++) {
        const threshold = i / maxLength;
        if (p > threshold + (0.1 * Math.random())) {
          result += targetText[i] || "";
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      el.innerText = result;
    }
  });
}

function LoopText(selector: string) {
  const el = document.querySelector(selector) as HTMLElement;
  if (!el) return;

  const tl = gsap.timeline({ repeat: -1 });
  const duration = 1.0;
  const pause = 3.5;

  // Manual loop using custom scrambleTo
  tl.add(scrambleTo(el, "DEVELOPER", duration), `+=${pause}`)
    .add(scrambleTo(el, "AUTOMATION", duration), `+=${pause + duration + 1}`);
}
