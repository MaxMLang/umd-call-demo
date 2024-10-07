var vapiInstance = null;
const assistant = "6386ae61-7903-44f6-941a-c27c564c6ccc"; // Substitute with your assistant ID
const apiKey = "218f9c11-17c4-4539-86d8-faccb717194e"; // Substitute with your Public key from Vapi Dashboard.

const buttonConfig = {
  position: "bottom", // "bottom" | "top" | "left" | "right" | "top-right" | "top-left" | "bottom-left" | "bottom-right"
  offset: "40px", // decide how far the button should be from the edge
  width: "80", // min-width of the button
  height: "80", // height of the button
  idle: { // button state when the call is not active.
    color: `rgb(160,186,158)`,
    type: "round",
    title: "Have a quick question?",
    subtitle: "Talk with our AI assistant",
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone.svg`,
  },
  loading: { // button state when the call is connecting
    color: `rgb(93, 124, 202)`,
    type: "pill",
    title: "Connecting...",
    subtitle: "Please wait",
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/loader-2.svg`,
  },
  active: { // button state when the call is in progress or active.
    color: `rgb(255, 0, 0)`,
    type: "round",
    title: "Call is in progress...",
    subtitle: "End the call.",
    icon: `https://unpkg.com/lucide-static@0.321.0/icons/phone-off.svg`,
  },
};

(function (d, t) {
  var g = document.createElement(t),
  s = d.getElementsByTagName(t)[0];
  g.src = "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g, s);

  g.onload = function () {
    vapiInstance = window.vapiSDK.run({
      apiKey: apiKey, // mandatory
      assistant: assistant, // mandatory
      config: buttonConfig, // optional
    });
  };
})(document, "script");
