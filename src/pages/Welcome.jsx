import { Link } from "react-router-dom";

import cityImg from "../assets/city.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WelcomePage() {
  const { scrollY } = useScroll();

  const cityOpacity = useTransform(
    scrollY,
    [0, 200, 300, 500],
    [1, 0.5, 0.5, 0]
  );
  const cityPosition = useTransform(scrollY, [0, 200], [0, -100]);
  const textScale = useTransform(scrollY, [0, 300], [1, 1.5]);
  const textY = useTransform(scrollY, [0, 200, 300, 500], [0, 50, 50, 300]);

  return (
    <>
      <header id="welcome-header">
        <motion.div
          id="welcome-header-content"
          style={{ scale: textScale, y: textY }}
        >
          <h1>Ready for a challenge?</h1>
          <Link id="cta-link" to="/challenges">
            Get Started
          </Link>
        </motion.div>
        <motion.img
          style={{ opacity: cityOpacity, y: cityPosition }}
          src={cityImg}
          alt="Night city"
          id="city-image"
        />
      </header>
      <main id="welcome-content">
        <section>
          <h2>Why Should You Challenge Yourself?</h2>
          <p>
            Challenges help you discover things about yourself that you never
            really knew.
          </p>
        </section>

        <section>
          <h2>If You&apos;re Ready to Challenge Yourself...</h2>
          <p>Click the get started button above.</p>
        </section>

        <section>
          <h2>Application Features</h2>
          <ul>
            <li>Add new challenges</li>
            <li>Mark challenges as completed or failed</li>
            <li>
              Awesome animations from Framer Motion that make challenges fun!
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
