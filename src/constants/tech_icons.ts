import { createElement } from "react";
import * as SimpleIcons from "simple-icons";

type SimpleIcon = {
    path: string;
    hex: string;
};

const getIcon = (icon: SimpleIcon) =>
    createElement("svg", {
        role: "img",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "w-4 h-4",
        children: createElement("path", {
            d: icon.path,
        }),
    });

export const TECH_ICONS: Record<
    string,
    { icon: React.ReactNode; color: string }
> = {
    HTML: {
        icon: getIcon(SimpleIcons.siHtml5),
        color: `#${SimpleIcons.siHtml5.hex}`,
    },
    CSS: {
        icon: getIcon(SimpleIcons.siCss),
        color: `#${SimpleIcons.siCss.hex}`,
    },
    JavaScript: {
        icon: getIcon(SimpleIcons.siJavascript),
        color: `#${SimpleIcons.siJavascript.hex}`,
    },
    TypeScript: {
        icon: getIcon(SimpleIcons.siTypescript),
        color: `#${SimpleIcons.siTypescript.hex}`,
    },

    React: {
        icon: getIcon(SimpleIcons.siReact),
        color: `#${SimpleIcons.siReact.hex}`,
    },
    "Tailwind CSS": {
        icon: getIcon(SimpleIcons.siTailwindcss),
        color: `#${SimpleIcons.siTailwindcss.hex}`,
    },
    "Framer Motion": {
        icon: getIcon(SimpleIcons.siFramer),
        color: `#${SimpleIcons.siFramer.hex}`,
    },

    Figma: {
        icon: getIcon(SimpleIcons.siFigma),
        color: `#${SimpleIcons.siFigma.hex}`,
    },
    Sass: {
        icon: getIcon(SimpleIcons.siSass),
        color: `#${SimpleIcons.siSass.hex}`,
    },

    GitHub: {
        icon: getIcon(SimpleIcons.siGithub),
        color: `#${SimpleIcons.siGithub.hex}`,
    },
    "Node.js": {
        icon: getIcon(SimpleIcons.siNodedotjs),
        color: `#${SimpleIcons.siNodedotjs.hex}`,
    },
    Redux: {
        icon: getIcon(SimpleIcons.siRedux),
        color: `#${SimpleIcons.siRedux.hex}`,
    },
    "React Query": {
        icon: getIcon(SimpleIcons.siReactquery),
        color: `#FF4154`, // not in Simple Icons color set consistently
    },
    Storybook: {
        icon: getIcon(SimpleIcons.siStorybook),
        color: `#${SimpleIcons.siStorybook.hex}`,
    },
};