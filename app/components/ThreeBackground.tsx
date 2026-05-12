'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 500;

    // ── PARTICLE SYSTEMS ──
    function makeParticles(count: number, spread: number, color: number, size: number) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * spread;
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color, size, transparent: true, opacity: 0.55, sizeAttenuation: true });
      return new THREE.Points(geo, mat);
    }

    const p1 = makeParticles(350, 1400, 0xFF8C6B, 3.5);
    const p2 = makeParticles(200, 1000, 0x8B7EC8, 4.5);
    const p3 = makeParticles(150, 800, 0x5B8C73, 3.2);
    const p4 = makeParticles(100, 600, 0xE8A838, 2.8);
    scene.add(p1, p2, p3, p4);

    // ── WIREFRAME RINGS ──
    function makeRing(radius: number, tube: number, color: number, x: number, y: number, z: number) {
      const geo = new THREE.TorusGeometry(radius, tube, 10, 80);
      const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.07 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, z);
      scene.add(mesh);
      return mesh;
    }

    const ring1 = makeRing(160, 1.2, 0xFF6B47, 300, -100, -120);
    const ring2 = makeRing(110, 0.9, 0x8B7EC8, -280, 130, -160);
    const ring3 = makeRing(75, 0.7, 0x5B8C73, 60, 260, -90);
    const ring4 = makeRing(50, 0.6, 0xE8A838, -150, -220, -80);

    // ── ICOSAHEDRON ──
    const icosaGeo = new THREE.IcosahedronGeometry(55, 1);
    const icosaMat = new THREE.MeshBasicMaterial({ color: 0xFF8C6B, wireframe: true, transparent: true, opacity: 0.06 });
    const icosa = new THREE.Mesh(icosaGeo, icosaMat);
    icosa.position.set(-320, 80, -180);
    scene.add(icosa);

    // ── OCTAHEDRON ──
    const octaGeo = new THREE.OctahedronGeometry(40, 0);
    const octaMat = new THREE.MeshBasicMaterial({ color: 0x8B7EC8, wireframe: true, transparent: true, opacity: 0.08 });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    octa.position.set(280, 200, -100);
    scene.add(octa);

    // ── MOUSE PARALLAX ──
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 1.8;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.8;
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Particles slow rotation
      p1.rotation.y = t * 0.012; p1.rotation.x = t * 0.007;
      p2.rotation.y = -t * 0.018; p2.rotation.z = t * 0.009;
      p3.rotation.z = t * 0.011; p3.rotation.x = -t * 0.006;
      p4.rotation.y = t * 0.014; p4.rotation.z = -t * 0.008;

      // Rings
      ring1.rotation.x = t * 0.28; ring1.rotation.y = t * 0.18;
      ring2.rotation.y = -t * 0.22; ring2.rotation.z = t * 0.15;
      ring3.rotation.x = -t * 0.19; ring3.rotation.z = t * 0.24;
      ring4.rotation.y = t * 0.32; ring4.rotation.x = -t * 0.14;

      // Shapes
      icosa.rotation.x = t * 0.22; icosa.rotation.z = t * 0.16;
      octa.rotation.y = t * 0.28; octa.rotation.x = t * 0.2;

      // Camera follow mouse
      camera.position.x += (mouseX * 45 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 32 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="three-canvas" />;
}
