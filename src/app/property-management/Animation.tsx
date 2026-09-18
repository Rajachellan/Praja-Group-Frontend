'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

interface PropertyManagementAnimationProps {
  label?: string;
  subLabel?: string;
  href?: string;
  className?: string;
  /** Speed multiplier for loop (default 1) */
  speed?: number;
}

const STAGES = [
  ['Property Onboarding & Audit', 'Boundary verification, legal title check & owner signboard erection'],
  ['Security & CCTV Setup', 'Installing 24/7 surveillance, perimeter fencing & entrance access control'],
  ['Tenant & Rent Management', 'Police background verification, digital agreements & automated rent tracking'],
  ['Facility Upkeep & Maintenance', 'Plumbing, electrical, lawn care & rapid 24/7 emergency repairs'],
  ['360° NRI Remote Owner Care', 'Digital HD video inspection reports delivered to global property owners'],
] as const;

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (v: number) => { const t = clamp(v); return t * t * (3 - 2 * t); };

/**
 * Photorealistic 3D Property Management, NRI Caretaking & Estate Maintenance Animation.
 * Built with Three.js (PBR materials, dynamic lighting, 60fps loop, responsive 4:3 aspect ratio).
 */
export default function PropertyManagementAnimation({
  label = 'Prajha Property Management',
  subLabel = '360° NRI Caretaking • Tenant Management & Estate Maintenance',
  href,
  className = '',
  speed = 1,
}: PropertyManagementAnimationProps) {
  const uid = `propertymgmt-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const host = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const speedRef = useRef(1);

  useEffect(() => {
    speedRef.current = Number.isFinite(speed) ? Math.max(0.25, Math.min(3, speed)) : 1;
  }, [speed]);

  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [phase, setPhase] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>('loading');

  useEffect(() => {
    if (!host.current) return;
    const mount = host.current;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    } catch {
      setStatus('unavailable');
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    renderer.domElement.setAttribute('aria-hidden', 'true');
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#d4e4e9');
    scene.fog = new THREE.FogExp2('#d4e4e9', 0.012);

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 140);
    const cameraBasePos = new THREE.Vector3(24, 19, 29);
    camera.position.copy(cameraBasePos);
    const target = new THREE.Vector3(0, 3.8, 0);
    camera.lookAt(target);

    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();

    const geometry = <T extends THREE.BufferGeometry>(g: T): T => { geometries.add(g); return g; };

    let seed = 38472;
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

    // Procedural textures
    const texture = (kind: 'concrete' | 'grass' | 'asphalt' | 'tile' | 'wood') => {
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 256;
      const ctx = canvas.getContext('2d')!;

      if (kind === 'concrete') {
        ctx.fillStyle = '#dbd6cb'; ctx.fillRect(0, 0, 256, 256);
        for (let i = 0; i < 9000; i++) {
          const c = Math.floor(100 + random() * 110);
          ctx.fillStyle = `rgba(${c},${c},${c},0.08)`;
          ctx.fillRect(random() * 256, random() * 256, 1.5, 1.5);
        }
      } else if (kind === 'grass') {
        ctx.fillStyle = '#54783d'; ctx.fillRect(0, 0, 256, 256);
        for (let i = 0; i < 12000; i++) {
          const g = Math.floor(100 + random() * 90);
          const r = Math.floor(60 + random() * 40);
          ctx.fillStyle = `rgba(${r},${g},45,0.25)`;
          ctx.fillRect(random() * 256, random() * 256, 2, 2);
        }
      } else if (kind === 'asphalt') {
        ctx.fillStyle = '#484f50'; ctx.fillRect(0, 0, 256, 256);
        for (let i = 0; i < 10000; i++) {
          const c = Math.floor(80 + random() * 100);
          ctx.fillStyle = `rgba(${c},${c},${c},0.12)`;
          ctx.fillRect(random() * 256, random() * 256, 1.2, 1.2);
        }
      } else if (kind === 'tile') {
        ctx.fillStyle = '#ded7c8'; ctx.fillRect(0, 0, 256, 256);
        ctx.strokeStyle = '#c4bbb0'; ctx.lineWidth = 2;
        for (let i = 0; i <= 256; i += 32) {
          ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 256); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(256, i); ctx.stroke();
        }
      } else if (kind === 'wood') {
        ctx.fillStyle = '#8c6746'; ctx.fillRect(0, 0, 256, 256);
        ctx.fillStyle = 'rgba(70, 45, 25, 0.15)';
        for (let y = 0; y < 256; y += 8) {
          ctx.fillRect(0, y, 256, 3 + random() * 3);
        }
      }

      const map = new THREE.CanvasTexture(canvas);
      map.wrapS = map.wrapT = THREE.RepeatWrapping;
      map.colorSpace = THREE.SRGBColorSpace;
      map.repeat.set(kind === 'grass' ? 8 : kind === 'asphalt' ? 10 : 2, kind === 'grass' ? 8 : kind === 'asphalt' ? 10 : 2);
      map.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
      textures.add(map);
      return map;
    };

    const createMaterial = (color: string, roughness = 0.7, metalness = 0.1, map?: THREE.Texture) => {
      const m = new THREE.MeshStandardMaterial({
        color, roughness, metalness, map, bumpMap: map, bumpScale: map ? 0.025 : 0
      });
      materials.add(m);
      return m;
    };

    // PBR Materials
    const concreteMat = createMaterial('#e2ded4', 0.9, 0.05, texture('concrete'));
    const ivoryMat = createMaterial('#ede9e0', 0.75, 0.05);
    const stoneCladdingMat = createMaterial('#c8bca8', 0.85, 0.05, texture('tile'));
    const darkSteelMat = createMaterial('#232b2b', 0.4, 0.7);
    const chromeMat = createMaterial('#d5dedd', 0.2, 0.9);
    const timberMat = createMaterial('#8c6746', 0.85, 0.05, texture('wood'));
    const glassMat = createMaterial('#497582', 0.12, 0.65);
    glassMat.transparent = true; glassMat.opacity = 0.75;
    const balconyGlassMat = createMaterial('#8db0b7', 0.15, 0.4);
    balconyGlassMat.transparent = true; balconyGlassMat.opacity = 0.45; balconyGlassMat.depthWrite = false;
    const warmWindowMat = new THREE.MeshStandardMaterial({
      color: '#658288', roughness: 0.2, metalness: 0.3, emissive: '#ffb347', emissiveIntensity: 0
    });
    materials.add(warmWindowMat);

    const lawnMat = createMaterial('#54783d', 0.95, 0.0, texture('grass'));
    const hedgeMat = createMaterial('#3b5932', 0.95, 0.0);
    const leafMats = ['#3d5c38', '#4b6e44', '#667d4b'].map(c => createMaterial(c, 0.95));
    const asphaltMat = createMaterial('#484f50', 0.95, 0.05, texture('asphalt'));
    const pavingMat = createMaterial('#d9d2c5', 0.9, 0.05, texture('tile'));
    const emeraldGreenMat = createMaterial('#166534', 0.3, 0.5);
    const orangeAccentMat = createMaterial('#f37924', 0.3, 0.4);

    const unitBox = geometry(new THREE.BoxGeometry(1, 1, 1));
    const unitSphere = geometry(new THREE.SphereGeometry(1, 12, 8));
    const unitCylinder = geometry(new THREE.CylinderGeometry(1, 1, 1, 12));

    const mesh = (g: THREE.BufferGeometry, m: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0) => {
      const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; parent.add(o); return o;
    };
    const box = (parent: THREE.Object3D, m: THREE.Material, x: number, y: number, z: number, w: number, h: number, d: number) => {
      const o = mesh(unitBox, m, parent, x, y, z); o.scale.set(w, h, d); return o;
    };
    const sphere = (parent: THREE.Object3D, m: THREE.Material, x: number, y: number, z: number, a: number, b = a, c = a) => {
      const o = mesh(unitSphere, m, parent, x, y, z); o.scale.set(a, b, c); return o;
    };
    const rod = (parent: THREE.Object3D, m: THREE.Material, a: THREE.Vector3, b: THREE.Vector3, r: number) => {
      const o = mesh(unitCylinder, m, parent); o.position.copy(a).add(b).multiplyScalar(0.5);
      o.scale.set(r, a.distanceTo(b), r); o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize()); return o;
    };
    const v = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
    const group = (parent: THREE.Object3D, x = 0, y = 0, z = 0) => { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; };

    // Environment Reflections for glass and polished surfaces
    const environmentFaces = Array.from({ length: 6 }, (_, i) => {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const ctx = c.getContext('2d')!; const grad = ctx.createLinearGradient(0, 0, 0, 64);
      grad.addColorStop(0, i === 3 ? '#99846b' : '#bad7ea'); grad.addColorStop(0.55, '#e4e8dd'); grad.addColorStop(1, '#a69279');
      ctx.fillStyle = grad; ctx.fillRect(0, 0, 64, 64); return c;
    });
    const environment = new THREE.CubeTexture(environmentFaces);
    environment.colorSpace = THREE.SRGBColorSpace; environment.needsUpdate = true;
    textures.add(environment);
    scene.environment = environment;
    scene.environmentIntensity = 0.55;
    glassMat.envMapIntensity = 1.5;

    // Lighting
    scene.add(new THREE.HemisphereLight('#eaf3fa', '#78654c', 2.2));
    const sun = new THREE.DirectionalLight('#fff2d4', 3.6);
    sun.position.set(-18, 28, 16); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -26, right: 26, top: 26, bottom: -26, near: 1, far: 75 });
    sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.025; sun.shadow.radius = 3;
    scene.add(sun);
    const fillLight = new THREE.DirectionalLight('#cce3f5', 0.8); fillLight.position.set(20, 10, -22); scene.add(fillLight);

    // Ground Base & Surrounding Lawn
    box(scene, createMaterial('#a3b8a1', 1), 0, -0.4, 0, 90, 0.5, 90);
    box(scene, lawnMat, 0, 0.01, 0, 36, 0.08, 30);

    // Avenue Road & Estate Entrance Gate
    const roadGroup = group(scene, 0, 0, 0);
    box(roadGroup, asphaltMat, 0, 0.06, 11, 38, 0.08, 4.8);
    box(roadGroup, concreteMat, 0, 0.11, 8.4, 38, 0.12, 0.4);
    box(roadGroup, concreteMat, 0, 0.11, 13.6, 38, 0.12, 0.4);
    for (let x = -18; x < 19; x += 3.5) {
      box(roadGroup, createMaterial('#eae6dc', 0.6), x, 0.12, 11, 1.5, 0.015, 0.12);
    }

    // Estate Driveway & Walkway
    box(roadGroup, pavingMat, -2, 0.07, -0.5, 30, 0.06, 13);

    // =========================================================================
    // STAGE 1: PROPERTY BOUNDARY & SIGNBOARD
    // Official Owner Warning Signboard: "PRAJHA MANAGED PROPERTY - 24/7 CCTV"
    // =========================================================================
    const boundaryGroup = group(scene, -11, 0, 7.8);
    box(boundaryGroup, concreteMat, 0, 0.2, 0, 0.4, 0.4, 0.4);
    rod(boundaryGroup, darkSteelMat, v(0, 0.2, 0), v(0, 2.2, 0), 0.04);
    
    // Canvas Signboard Texture
    const signCanvas = document.createElement('canvas'); signCanvas.width = 512; signCanvas.height = 256;
    const sctx = signCanvas.getContext('2d')!;
    sctx.fillStyle = '#0f2d24'; sctx.fillRect(0, 0, 512, 256);
    sctx.strokeStyle = '#f37924'; sctx.lineWidth = 10; sctx.strokeRect(10, 10, 492, 236);
    sctx.fillStyle = '#f37924'; sctx.font = 'bold 26px Arial'; sctx.fillText('PRAJHA PROPERTY CARE', 85, 55);
    sctx.fillStyle = '#ffffff'; sctx.font = 'bold 30px Arial'; sctx.fillText('PROTECTED & MANAGED', 70, 115);
    sctx.fillStyle = '#166534'; sctx.fillRect(30, 145, 452, 70);
    sctx.fillStyle = '#ffffff'; sctx.font = 'bold 22px Arial'; sctx.fillText('24/7 CCTV • NO TRESPASSING', 75, 190);
    const signMap = new THREE.CanvasTexture(signCanvas); signMap.colorSpace = THREE.SRGBColorSpace; textures.add(signMap);
    const signMat = new THREE.MeshStandardMaterial({ map: signMap, roughness: 0.4 }); materials.add(signMat);
    mesh(geometry(new THREE.PlaneGeometry(2.2, 1.1)), signMat, boundaryGroup, 0, 1.8, 0.03);
    box(boundaryGroup, darkSteelMat, 0, 1.8, 0, 2.25, 1.15, 0.04);

    // Boundary Fencing & Concrete Pillars
    for (let x = -16; x <= 16; x += 3.2) {
      box(scene, concreteMat, x, 0.4, 8.4, 0.35, 0.8, 0.35);
      if (x < 16) {
        rod(scene, darkSteelMat, v(x + 0.17, 0.3, 8.4), v(x + 3.03, 0.3, 8.4), 0.02);
        rod(scene, darkSteelMat, v(x + 0.17, 0.6, 8.4), v(x + 3.03, 0.6, 8.4), 0.02);
      }
    }

    // =========================================================================
    // STAGE 2: 24/7 CCTV SECURITY SURVEILLANCE POST
    // =========================================================================
    const cctvPostGroup = group(scene, 9.5, 0, 7.8);
    rod(cctvPostGroup, darkSteelMat, v(0, 0, 0), v(0, 4.2, 0), 0.05);
    // CCTV Camera Head assembly
    const cctvHead = group(cctvPostGroup, 0, 4.1, 0);
    box(cctvHead, darkSteelMat, 0, 0, 0.25, 0.18, 0.18, 0.4);
    box(cctvHead, glassMat, 0, 0, 0.45, 0.14, 0.14, 0.02);
    // Glowing Green Active Security LED
    const ledMat = new THREE.MeshBasicMaterial({ color: '#22c55e' }); materials.add(ledMat);
    sphere(cctvHead, ledMat, 0.07, 0.07, 0.44, 0.03);

    // =========================================================================
    // MANAGED REAL ESTATE (MODERN GATED RESIDENTIAL VILLA / APARTMENTS)
    // =========================================================================
    const villaGroup = group(scene, -4, 0, -3);

    // Podium & Terrace
    box(villaGroup, stoneCladdingMat, 0, 0.5, 0, 11, 0.9, 8);
    box(villaGroup, glassMat, 0, 0.5, 4.05, 10, 0.85, 0.08);

    // Villa Storeys (3 Levels)
    type FloorRef = { cols: THREE.Group; slab: THREE.Group; facade: THREE.Group; y: number };
    const villaFloors: FloorRef[] = [];
    for (let f = 0; f < 3; f++) {
      const fy = 0.95 + f * 2.3;
      const cols = group(villaGroup, 0, 0, 0);
      const slab = group(villaGroup, 0, 0, 0);
      const facade = group(villaGroup, 0, 0, 0);

      for (const cx of [-4.5, 0, 4.5]) for (const cz of [-3.2, 3.2]) {
        box(cols, concreteMat, cx, fy + 1.0, cz, 0.35, 2.1, 0.35);
      }
      box(slab, concreteMat, 0, fy + 2.15, 0, 10.2, 0.22, 7.2);

      // Recessed Windows & Balconies
      for (const cz of [-3.6, 3.6]) {
        box(facade, darkSteelMat, 0, fy + 1.05, cz * 0.92, 9.4, 1.85, 0.08);
        box(facade, f % 2 === 0 ? warmWindowMat : glassMat, 0, fy + 1.05, cz * 0.93, 9.0, 1.7, 0.04);
        box(facade, ivoryMat, 0, fy + 0.15, cz, 9.8, 0.16, 0.85);
        box(facade, balconyGlassMat, 0, fy + 0.65, cz * 1.08, 9.6, 0.8, 0.04);
      }
      villaFloors.push({ cols, slab, facade, y: fy });
    }

    // Villa Roof Garden & Pergola
    const villaRoof = group(villaGroup, 0, 0.95 + 3 * 2.3, 0);
    box(villaRoof, ivoryMat, 0, 0.15, 0, 10.2, 0.22, 7.2);
    box(villaRoof, lawnMat, 0, 0.28, 0, 9.8, 0.06, 6.8);
    for (let px = -3.8; px <= 3.8; px += 1.4) {
      rod(villaRoof, timberMat, v(px, 0.3, -2.5), v(px, 2.2, -2.5), 0.05);
      rod(villaRoof, timberMat, v(px, 0.3, 2.5), v(px, 2.2, 2.5), 0.05);
    }

    // Solar Water Heater System on Roof (Facility Care)
    const solarHeater = group(villaRoof, -2.5, 0.3, -1.2);
    box(solarHeater, chromeMat, 0, 0.4, 0, 1.8, 0.35, 0.35); // Tank
    for (let i = 0; i < 6; i++) {
      rod(solarHeater, darkSteelMat, v(-0.7 + i * 0.28, 0.1, -0.4), v(-0.7 + i * 0.28, 0.35, 0), 0.03);
    }

    // =========================================================================
    // STAGE 4: PRAJHA PROPERTY CARE SERVICE VAN & MAINTENANCE TEAM
    // =========================================================================
    const vanGroup = group(scene, 4.5, 0.16, 12.2);
    const vanBodyMat = createMaterial('#ffffff', 0.2, 0.8);
    box(vanGroup, vanBodyMat, 0, 0.65, 0, 3.8, 0.95, 1.6);
    box(vanGroup, emeraldGreenMat, 0, 0.4, 0.81, 3.78, 0.4, 0.02); // Emerald Green Livery
    box(vanGroup, orangeAccentMat, 0, 0.62, 0.81, 3.78, 0.08, 0.02); // Orange Accent Stripe
    box(vanGroup, glassMat, -0.8, 0.85, 0, 1.0, 0.45, 1.55);

    // Wheels
    const vanWheels: THREE.Mesh[] = [];
    const wheelGeo = geometry(new THREE.CylinderGeometry(0.32, 0.32, 0.2, 16));
    for (const wx of [-1.1, 1.1]) for (const wz of [-0.8, 0.8]) {
      const w = mesh(wheelGeo, darkSteelMat, vanGroup, wx, 0.32, wz);
      w.rotation.x = Math.PI / 2;
      vanWheels.push(w);
    }

    // =========================================================================
    // CHARACTERS & PERSONNEL IN THE SCENE
    // 1. Property Manager (holding HD video inspection tablet)
    // 2. Facility Care Technician (carrying tool kit)
    // =========================================================================
    const managerUniformMat = createMaterial('#166534', 0.9); // Emerald Polo
    const techUniformMat = createMaterial('#2d4d63', 0.9); // Service Jumpsuit
    const skinMat = createMaterial('#cbb29b', 0.92);
    const hairMat = createMaterial('#2b2622', 0.96);

    // Property Manager (Standing on driveway reviewing property on tablet)
    const managerGroup = group(scene, -1.8, 0.08, 4.5);
    managerGroup.rotation.y = 0.5;
    // Legs
    rod(managerGroup, darkSteelMat, v(-0.1, 0, 0), v(-0.1, 0.9, 0), 0.09);
    rod(managerGroup, darkSteelMat, v(0.1, 0, 0), v(0.1, 0.9, 0), 0.09);
    // Torso (Emerald Polo)
    box(managerGroup, managerUniformMat, 0, 1.3, 0, 0.45, 0.6, 0.26);
    // Head
    rod(managerGroup, skinMat, v(0, 1.6, 0), v(0, 1.7, 0), 0.06);
    const managerHead = group(managerGroup, 0, 1.82, 0);
    sphere(managerHead, skinMat, 0, 0, 0, 0.14, 0.16, 0.14);
    sphere(managerHead, hairMat, 0, 0.05, -0.02, 0.15, 0.11, 0.15);

    // Manager Right Arm holding Digital Inspection Tablet
    const managerArm = group(managerGroup, 0.24, 1.48, 0);
    rod(managerArm, managerUniformMat, v(0, 0, 0), v(0.1, -0.25, 0.25), 0.07);
    sphere(managerArm, skinMat, 0.1, -0.25, 0.3, 0.05);

    // HD Inspection Tablet Screen
    const tabCanvas = document.createElement('canvas'); tabCanvas.width = 256; tabCanvas.height = 180;
    const tctx = tabCanvas.getContext('2d')!;
    tctx.fillStyle = '#0f2d24'; tctx.fillRect(0, 0, 256, 180);
    tctx.fillStyle = '#22c55e'; tctx.fillRect(15, 15, 226, 35);
    tctx.fillStyle = '#ffffff'; tctx.font = 'bold 16px Arial'; tctx.fillText('STATUS: 100% SECURE', 30, 38);
    tctx.fillStyle = '#f37924'; tctx.fillRect(15, 60, 226, 40);
    tctx.fillStyle = '#ffffff'; tctx.font = 'bold 14px Arial'; tctx.fillText('RENT: PAID ON TIME', 35, 85);
    tctx.fillStyle = '#569b91'; tctx.fillRect(15, 110, 226, 55);
    tctx.fillStyle = '#ffffff'; tctx.font = '12px Arial'; tctx.fillText('HD Video Audit Sent to Owner', 25, 142);
    const tabMap = new THREE.CanvasTexture(tabCanvas); tabMap.colorSpace = THREE.SRGBColorSpace; textures.add(tabMap);
    const tabletMesh = mesh(geometry(new THREE.PlaneGeometry(0.42, 0.3)), new THREE.MeshBasicMaterial({ map: tabMap }), managerArm, 0.1, -0.25, 0.4);
    tabletMesh.rotation.x = -0.4;

    // Facility Care Technician (Standing near van with Tool Chest)
    const techGroup = group(scene, 2.2, 0.08, 10.5);
    techGroup.rotation.y = -0.6;
    rod(techGroup, techUniformMat, v(-0.1, 0, 0), v(-0.1, 0.9, 0), 0.095);
    rod(techGroup, techUniformMat, v(0.1, 0, 0), v(0.1, 0.9, 0), 0.095);
    box(techGroup, techUniformMat, 0, 1.3, 0, 0.46, 0.6, 0.28);
    rod(techGroup, skinMat, v(0, 1.6, 0), v(0, 1.7, 0), 0.06);
    sphere(techGroup, skinMat, 0, 1.82, 0, 0.14, 0.16, 0.14);
    sphere(techGroup, orangeAccentMat, 0, 1.9, 0, 0.16, 0.08, 0.16); // Hard Hat
    // Tool Box
    box(techGroup, orangeAccentMat, 0.4, 0.3, 0.1, 0.32, 0.22, 0.18);

    // Frame Loop State
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion = media.matches;
    let visible = true;
    let elapsed = 0;
    let frame = 0;
    let last = 0;
    let lastPhase = -1;
    let disposed = false;
    let staticDrawn = false;

    setReduced(reducedMotion);
    const onMedia = () => {
      staticDrawn = false; reducedMotion = media.matches; setReduced(reducedMotion); last = 0;
    };
    media.addEventListener('change', onMedia);

    const resize = () => {
      staticDrawn = false;
      const w = mount.clientWidth, h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize); observer.observe(mount); resize();
    const visibility = new IntersectionObserver(([e]) => { visible = e.isIntersecting; last = 0; }); visibility.observe(mount);

    // Interactive pointer parallax
    let pointerX = 0, pointerY = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointerX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointerY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener('pointermove', onPointerMove);

    const animate = (now: number) => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);

      if (!visible || document.hidden) { last = 0; staticDrawn = false; return; }
      const stationary = pausedRef.current || reducedMotion;
      if (stationary && staticDrawn) { last = 0; return; }
      staticDrawn = stationary;

      if (last && !stationary && now - last < 15) return; // 60fps limit
      if (last && !pausedRef.current && !reducedMotion) {
        elapsed += Math.min((now - last) / 1000, 0.06) * 1.35 * speedRef.current;
      }
      last = now;

      const cycle = 40; // 40 second loop
      const t = reducedMotion ? 35 : elapsed % cycle;
      const phaseIndex = Math.min(4, Math.floor((t / cycle) * 5));

      if (phaseIndex !== lastPhase) {
        lastPhase = phaseIndex;
        setPhase(phaseIndex);
      }

      if (progress.current) {
        progress.current.style.transform = `scaleX(${Math.min(t / (cycle - 2), 1)})`;
      }
      if (curtain.current) {
        curtain.current.style.opacity = String(t > cycle - 2 ? ease((t - (cycle - 2)) / 2) : 1 - ease(t / 1.5));
      }

      // Dynamic Element Animations
      // 1. CCTV Scanning Pan Motion
      cctvHead.rotation.y = Math.sin(t * 0.8) * 0.45;

      // 2. Property Manager Inspection arm gesture
      managerArm.rotation.x = Math.sin(t * 1.2) * 0.08;
      managerHead.rotation.y = Math.sin(t * 0.6) * 0.12;

      // 3. Van Driving in / Parking
      if (t > 24) {
        vanGroup.position.x = Math.min(4.5, -18 + (t - 24) * 4);
        vanWheels.forEach(w => { w.rotation.y += 0.2; });
      } else {
        vanGroup.position.x = -18;
      }

      // 4. Night/Day Window Glow
      warmWindowMat.emissiveIntensity = 0.5 + Math.sin(t * 1.5) * 0.2;

      // Smooth Cinematic Camera Orbit & Parallax
      const orbitAngle = Math.sin(t * 0.05) * 0.22;
      camera.position.x = cameraBasePos.x * Math.cos(orbitAngle) + cameraBasePos.z * Math.sin(orbitAngle) + pointerX * 1.4;
      camera.position.z = cameraBasePos.z * Math.cos(orbitAngle) - cameraBasePos.x * Math.sin(orbitAngle) - pointerY * 1.1;
      camera.position.y = cameraBasePos.y + Math.sin(t * 0.07) * 0.5 - pointerY * 0.6;
      camera.lookAt(target);

      renderer.render(scene, camera);
    };

    frame = requestAnimationFrame(animate);
    setStatus('ready');

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      media.removeEventListener('change', onMedia);
      mount.removeEventListener('pointermove', onPointerMove);
      geometries.forEach(g => g.dispose());
      materials.forEach(m => m.dispose());
      textures.forEach(t => t.dispose());
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement.remove();
    };
  }, []);

  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  };

  return (
    <figure className={`${uid} ${className}`} style={{ margin: 0 }}>
      <style>{`
        .${uid} {
          overflow: hidden;
          border: 1px solid #d8ded8;
          border-radius: 20px;
          background: #f5f3ec;
          color: #19362f;
          font-family: inherit;
          box-shadow: 0 14px 45px rgba(31, 52, 35, 0.1);
        }
        .${uid} * { box-sizing: border-box; }
        .${uid} .viewport {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #d4e4e9;
        }
        .${uid} .canvas { position: absolute; inset: 0; }
        .${uid} .brand {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 10px;
          letter-spacing: 0.18em;
          font-weight: 700;
          color: #34483e;
          pointer-events: none;
          background: rgba(247, 246, 239, 0.85);
          backdrop-filter: blur(4px);
          padding: 7px 11px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.6);
        }
        .${uid} .pause {
          position: absolute;
          right: 18px;
          top: 16px;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(4px);
          border-radius: 50%;
          color: #264339;
          cursor: pointer;
          display: grid;
          place-items: center;
          transition: all 0.2s ease;
        }
        .${uid} .pause:hover { background: #ffffff; transform: scale(1.05); }
        .${uid} .stage {
          padding: 22px 26px 20px;
          background: #f7f6f0;
          border-top: 1px solid #d6dcd2;
        }
        .${uid} .step-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #166534;
          margin-bottom: 8px;
        }
        .${uid} .step-title {
          font-size: clamp(20px, 2.8vw, 30px);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.18;
          margin: 0 0 8px;
          color: #0f2d24;
        }
        .${uid} .step-detail {
          font-size: 14px;
          color: #596b60;
          line-height: 1.5;
          margin: 0;
        }
        .${uid} .track {
          height: 4px;
          border-radius: 4px;
          background: #dde1d6;
          margin-top: 19px;
          overflow: hidden;
        }
        .${uid} .fill {
          height: 100%;
          background: #f37924;
          transform: scaleX(0);
          transform-origin: left;
        }
        .${uid} .caption {
          padding: 18px 26px 23px;
          border-top: 1px solid #e0e3db;
        }
        .${uid} .name {
          font-size: 17px;
          line-height: 1.3;
          font-weight: 600;
          color: inherit;
          text-decoration: none;
        }
        .${uid} .sub {
          font-size: 12px;
          line-height: 1.5;
          margin-top: 5px;
          color: #627366;
        }
        .${uid} .veil {
          position: absolute;
          inset: 0;
          background: #d4e4e9;
          pointer-events: none;
          opacity: 1;
        }
        .${uid} .message {
          position: absolute;
          inset: 0;
          display: grid;
          place-content: center;
          text-align: center;
          padding: 28px;
          color: #344b42;
          font-size: 15px;
          line-height: 1.6;
        }
      `}</style>
      <div className="viewport">
        <div ref={host} className="canvas" role="img" aria-label="3D Property Management scene showing gated estate, CCTV security post, signboard, facility care van, and digital inspection tablet." />
        <div ref={curtain} className="veil" aria-hidden="true" />
        <div className="brand">PRAJHA / PROPERTY MANAGEMENT</div>
        {status !== 'ready' && (
          <div className="message">
            {status === 'loading' ? 'Loading 3D Property Care Scene…' : 'WebGL is required for 3D rendering.'}
          </div>
        )}
        {status === 'ready' && !reduced && (
          <button type="button" className="pause" onClick={togglePause} aria-label={paused ? 'Play 3D Scene' : 'Pause 3D Scene'} aria-pressed={paused}>
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              {paused ? <path d="M4 2L12 7L4 12Z" fill="currentColor" /> : <path d="M4 2V12M10 2V12" stroke="currentColor" strokeWidth="2" />}
            </svg>
          </button>
        )}
      </div>
      <div className="stage">
        <div className="step-label">Step {String(phase + 1).padStart(2, '0')} / 05</div>
        <h3 className="step-title">{STAGES[phase][0]}</h3>
        <p className="step-detail">{STAGES[phase][1]}</p>
        <div className="track" aria-hidden="true"><div ref={progress} className="fill" /></div>
      </div>
      <figcaption className="caption">
        {href ? <a className="name" href={href}>{label} ↗</a> : <div className="name">{label}</div>}
        <div className="sub">{subLabel}</div>
      </figcaption>
    </figure>
  );
}
