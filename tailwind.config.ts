import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10212B",
        mist: "#EDF3F1",
        tide: "#7BC5AE",
        reef: "#1C6B63",
        coral: "#E67E5F",
        sand: "#F7E8D0"
      },
      boxShadow: {
        panel: "0 20px 60px rgba(16, 33, 43, 0.14)"
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
