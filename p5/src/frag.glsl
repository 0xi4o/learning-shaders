precision mediump float;

varying vec2 pos;

void main() {
    vec4 c1 = vec4(0.5, 0.1, 0.9, 1.);
    vec4 c2 = vec4(0.1, 0.8, 0.7, 1.);
    vec4 c = mix(c1, c2, pos.x);

    gl_FragColor = c;
    // gl_FragColor = vec4(pos, 1., 1.);
}
