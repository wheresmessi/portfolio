import { About } from "./pages/about";
import { ContactMe } from "./pages/contactme";
import { Hero } from "./pages/hero";
import { Stack } from "./pages/stack";

export default function App() {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="stack">
        <Stack />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
    </>
  );
}