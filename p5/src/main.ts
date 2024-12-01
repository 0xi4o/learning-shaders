import p5 from "p5";
import vertexShader from "./vert.glsl?url";
import fragmentShader from "./frag.glsl?url";
import "./style.css";

new p5((p) => {
	// @ts-ignore
	let myShader = null;

	p.preload = () => {
		myShader = p.loadShader(vertexShader, fragmentShader);
	};

	p.setup = () => {
		p.createCanvas(600, 600, p.WEBGL);
		// @ts-ignore
		p.shader(myShader);
	};

	p.draw = () => {
		p.clear();
		p.rect(20, 20, p.width, p.height);
	};
	// @ts-ignore
}, document.getElementById("container"));
