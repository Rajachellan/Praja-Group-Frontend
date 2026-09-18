'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

interface RealEstateDeveloperAnimationProps {
    label?: string;
    subLabel?: string;
    href?: string;
    className?: string;
    /** Speed multiplier for loop (default 1) */
    speed?: number;
}

const STAGES = [
    ['Site Acquisition & Feasibility', 'Surveying topography, boundary verification & land zoning'],
    ['Master-Plan Infrastructure', 'Avenue roads, underground utilities, drainage & green corridors'],
    ['Architectural Erection', 'Structural columns, floor slabs & high-performance glass facades'],
    ['Amenities & Landscaping', 'Infinity pool, luxury clubhouse, solar panels & lush parks'],
    ['Completed Gated Township', 'Turnkey master-planned community ready for occupancy'],
] as const;

const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (v: number) => { const t = clamp(v); return t * t * (3 - 2 * t); };

/**
 * Ultra-realistic 3D Real Estate Master-Plan Development Walkthrough & Time-Lapse.
 * Built with Three.js (Procedural geometries, realistic PBR materials, dynamic lighting & shadows).
 */
export default function RealEstateDeveloperAnimation({
    label = 'Prajha Real Estate Developers',
    subLabel = 'Master-Planned Communities • Luxury Villas & Townships',
    href,
    className = '',
    speed = 1,
}: RealEstateDeveloperAnimationProps) {
    const uid = `realestate-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
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
        const cameraBasePos = new THREE.Vector3(25, 20, 30);
        camera.position.copy(cameraBasePos);
        const target = new THREE.Vector3(0, 4.2, 0);
        camera.lookAt(target);

        const geometries = new Set<THREE.BufferGeometry>();
        const materials = new Set<THREE.Material>();
        const textures = new Set<THREE.Texture>();

        const geometry = <T extends THREE.BufferGeometry>(g: T): T => { geometries.add(g); return g; };

        let seed = 48291;
        const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };

        // Procedural textures for realistic asphalt, grass, concrete, and stone
        const texture = (kind: 'concrete' | 'grass' | 'asphalt' | 'wood' | 'tile') => {
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
                ctx.fillStyle = '#567a3e'; ctx.fillRect(0, 0, 256, 256);
                for (let i = 0; i < 12000; i++) {
                    const g = Math.floor(100 + random() * 90);
                    const r = Math.floor(60 + random() * 40);
                    ctx.fillStyle = `rgba(${r},${g},45,0.25)`;
                    ctx.fillRect(random() * 256, random() * 256, 2, 2);
                }
            } else if (kind === 'asphalt') {
                ctx.fillStyle = '#424848'; ctx.fillRect(0, 0, 256, 256);
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
                ctx.fillStyle = '#8a6543'; ctx.fillRect(0, 0, 256, 256);
                ctx.fillStyle = 'rgba(70, 45, 25, 0.15)';
                for (let y = 0; y < 256; y += 8) {
                    ctx.fillRect(0, y, 256, 3 + random() * 3);
                }
            }

            const map = new THREE.CanvasTexture(canvas);
            map.wrapS = map.wrapT = THREE.RepeatWrapping;
            map.colorSpace = THREE.SRGBColorSpace;
            map.repeat.set(kind === 'grass' ? 8 : kind === 'asphalt' ? 12 : 2, kind === 'grass' ? 8 : kind === 'asphalt' ? 12 : 2);
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
        const poolWaterMat = createMaterial('#29a3b5', 0.1, 0.6);
        poolWaterMat.transparent = true; poolWaterMat.opacity = 0.85;
        const solarPanelMat = createMaterial('#192536', 0.2, 0.85);

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

        // Cube Map Environment for photorealistic reflections on glass and polished surfaces
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

        // Ground & Terrain
        box(scene, createMaterial('#a3b8a1', 1), 0, -0.4, 0, 90, 0.5, 90);

        // Site Grid & Feasibility Markers (Phase 1)
        const siteGridGroup = group(scene, 0, 0.02, 0);
        const gridLineMat = new THREE.LineBasicMaterial({ color: '#f37924', transparent: true, opacity: 0.65 });
        materials.add(gridLineMat);
        for (let x = -16; x <= 16; x += 4) {
            const g = geometry(new THREE.BufferGeometry().setFromPoints([v(x, 0.1, -16), v(x, 0.1, 16)]));
            siteGridGroup.add(new THREE.Line(g, gridLineMat));
        }
        for (let z = -16; z <= 16; z += 4) {
            const g = geometry(new THREE.BufferGeometry().setFromPoints([v(-16, 0.1, z), v(16, 0.1, z)]));
            siteGridGroup.add(new THREE.Line(g, gridLineMat));
        }

        // Boundary Beacons
        const beacons: THREE.Group[] = [];
        for (const [bx, bz] of [[-16, -16], [16, -16], [16, 16], [-16, 16]]) {
            const b = group(siteGridGroup, bx, 0, bz);
            rod(b, createMaterial('#f37924', 0.3, 0.8), v(0, 0, 0), v(0, 2.5, 0), 0.06);
            sphere(b, createMaterial('#ffb347', 0.2, 0.1), 0, 2.5, 0, 0.18);
            beacons.push(b);
        }

        // Phase 2: Master-Plan Roads & Infrastructure
        const infraGroup = group(scene, 0, 0, 0);
        // Main Avenue Road
        box(infraGroup, asphaltMat, 0, 0.06, 11, 46, 0.08, 4.8);
        box(infraGroup, concreteMat, 0, 0.11, 8.4, 46, 0.12, 0.4);
        box(infraGroup, concreteMat, 0, 0.11, 13.6, 46, 0.12, 0.4);
        // White Lane Markings
        for (let x = -20; x < 21; x += 3.5) {
            box(infraGroup, createMaterial('#eae6dc', 0.6), x, 0.12, 11, 1.5, 0.015, 0.12);
        }

        // Street Lamps
        const streetLamps: THREE.PointLight[] = [];
        for (const x of [-16, -8, 0, 8, 16]) {
            const post = group(infraGroup, x, 0.12, 8.2);
            rod(post, darkSteelMat, v(0, 0, 0), v(0, 3.2, 0), 0.045);
            rod(post, darkSteelMat, v(0, 3.2, 0), v(0.5, 3.2, 0), 0.035);
            box(post, darkSteelMat, 0.5, 3.15, 0, 0.25, 0.06, 0.14);
            const l = new THREE.PointLight('#ffdb99', 0, 8, 2);
            l.position.set(x + 0.5, 3.1, 8.2);
            infraGroup.add(l);
            streetLamps.push(l);
        }

        // Internal Paved Pathways
        box(infraGroup, pavingMat, -2, 0.07, -1, 32, 0.06, 14);
        box(infraGroup, lawnMat, -2, 0.08, -1, 31.4, 0.05, 13.4);

        // Phase 3: Architectural Construction - Luxury Twin Towers & Villas
        const buildingGroup = group(scene, 0, 0, 0);

        // Podium Base
        box(buildingGroup, stoneCladdingMat, -5, 0.6, -3, 11, 1.1, 8);
        box(buildingGroup, glassMat, -5, 0.6, 1.05, 9.8, 1.05, 0.1); // Double height grand lobby glass

        // Tower A (Main Luxury Residential Tower - 5 Floors)
        type FloorGroup = { cols: THREE.Group; slab: THREE.Group; facade: THREE.Group; y: number };
        const towerAFloors: FloorGroup[] = [];
        const towerAX = -5, towerAZ = -3;
        const towerAW = 9.8, towerAD = 7.2;

        for (let f = 0; f < 5; f++) {
            const fy = 1.15 + f * 2.2;
            const cols = group(buildingGroup, towerAX, 0, towerAZ);
            const slab = group(buildingGroup, towerAX, 0, towerAZ);
            const facade = group(buildingGroup, towerAX, 0, towerAZ);

            // Columns
            for (const cx of [-4.2, 0, 4.2]) for (const cz of [-3, 3]) {
                box(cols, concreteMat, cx, fy + 1.0, cz, 0.35, 2.0, 0.35);
            }
            // Floor Slab
            box(slab, concreteMat, 0, fy + 2.05, 0, towerAW, 0.25, towerAD);

            // Facade Glass & Balconies
            for (const cz of [-3.6, 3.6]) {
                // Deep Recessed Glazing
                box(facade, darkSteelMat, 0, fy + 1.0, cz * 0.92, towerAW - 0.6, 1.8, 0.08);
                box(facade, f % 2 === 0 ? warmWindowMat : glassMat, 0, fy + 1.0, cz * 0.93, towerAW - 0.8, 1.65, 0.04);

                // Cantilevered Glass Balcony
                box(facade, ivoryMat, 0, fy + 0.15, cz, towerAW + 0.4, 0.16, 0.9);
                box(facade, balconyGlassMat, 0, fy + 0.65, cz * 1.08, towerAW + 0.2, 0.8, 0.04);
                rod(facade, darkSteelMat, v(-towerAW / 2, fy + 1.05, cz * 1.08), v(towerAW / 2, fy + 1.05, cz * 1.08), 0.022);
            }

            // Vertical Timber Architectural Louvers
            for (const lx of [-4.0, -3.8, 3.8, 4.0]) {
                box(facade, timberMat, lx, fy + 1.0, 0, 0.08, 1.9, towerAD + 0.2);
            }

            towerAFloors.push({ cols, slab, facade, y: fy });
        }

        // Tower A Roof & Sky Garden
        const towerARoof = group(buildingGroup, towerAX, 1.15 + 5 * 2.2, towerAZ);
        box(towerARoof, ivoryMat, 0, 0.15, 0, towerAW, 0.25, towerAD);
        box(towerARoof, glassMat, 0, 0.65, 0, towerAW - 0.4, 0.8, towerAD - 0.4);
        // Roof Pergola
        for (let px = -3.5; px <= 3.5; px += 1.2) {
            rod(towerARoof, timberMat, v(px, 0.2, -2.5), v(px, 2.2, -2.5), 0.05);
            rod(towerARoof, timberMat, v(px, 0.2, 2.5), v(px, 2.2, 2.5), 0.05);
        }
        for (let pz = -2.5; pz <= 2.5; pz += 0.4) {
            box(towerARoof, timberMat, 0, 2.25, pz, 7.5, 0.08, 0.12);
        }

        // Tower B (East Executive Block - 4 Floors)
        const towerBFloors: FloorGroup[] = [];
        const towerBX = 6.5, towerBZ = -4;
        const towerBW = 7.5, towerBD = 6.0;

        for (let f = 0; f < 4; f++) {
            const fy = f * 2.2;
            const cols = group(buildingGroup, towerBX, 0, towerBZ);
            const slab = group(buildingGroup, towerBX, 0, towerBZ);
            const facade = group(buildingGroup, towerBX, 0, towerBZ);

            for (const cx of [-3, 3]) for (const cz of [-2.4, 2.4]) {
                box(cols, concreteMat, cx, fy + 1.0, cz, 0.3, 2.0, 0.3);
            }
            box(slab, concreteMat, 0, fy + 2.05, 0, towerBW, 0.22, towerBD);
            box(facade, darkSteelMat, 0, fy + 1.0, 0, towerBW - 0.4, 1.8, towerBD - 0.4);
            box(facade, glassMat, 0, fy + 1.0, 0, towerBW - 0.2, 1.7, towerBD - 0.2);

            towerBFloors.push({ cols, slab, facade, y: fy });
        }

        // Solar Panels on Tower B Roof (Sustainable Real Estate infrastructure)
        const solarGroup = group(buildingGroup, towerBX, 4 * 2.2 + 0.2, towerBZ);
        for (let sx = -2.5; sx <= 2.5; sx += 2.2) {
            for (let sz = -1.8; sz <= 1.8; sz += 1.8) {
                const panel = box(solarGroup, solarPanelMat, sx, 0.2, sz, 1.8, 0.06, 1.2);
                panel.rotation.x = -0.2;
                rod(solarGroup, chromeMat, v(sx, 0, sz - 0.4), v(sx, 0.3, sz - 0.4), 0.02);
            }
        }

        // Phase 4: Amenities (Infinity Pool, Deck, Clubhouse, Trees, Landscaping)
        const amenitiesGroup = group(scene, 0, 0, 0);

        // Resort Infinity Swimming Pool
        const poolX = 5.5, poolZ = 3.5;
        box(amenitiesGroup, stoneCladdingMat, poolX, 0.25, poolZ, 7.5, 0.32, 5.5);
        box(amenitiesGroup, poolWaterMat, poolX, 0.42, poolZ, 7.0, 0.04, 5.0);

        // Water Ripples
        const rippleMat = new THREE.MeshBasicMaterial({ color: '#bcebf2', transparent: true, opacity: 0.2, side: THREE.DoubleSide });
        materials.add(rippleMat);
        const ripples: THREE.Mesh[] = [];
        for (let i = 0; i < 4; i++) {
            const ring = mesh(geometry(new THREE.RingGeometry(0.5, 0.55, 32)), rippleMat, amenitiesGroup, poolX - 1.5 + i * 1.2, 0.45, poolZ);
            ring.rotation.x = -Math.PI / 2;
            ripples.push(ring);
        }

        // Pool Deck Sun Loungers & Umbrellas
        for (const lz of [1.8, 3.2, 4.6]) {
            box(amenitiesGroup, timberMat, poolX - 4.4, 0.38, lz, 0.6, 0.12, 1.2);
            box(amenitiesGroup, createMaterial('#f5f3ec', 0.8), poolX - 4.4, 0.46, lz, 0.55, 0.06, 1.1);
        }
        // Umbrella
        rod(amenitiesGroup, chromeMat, v(poolX - 4.4, 0.4, 0.8), v(poolX - 4.4, 2.2, 0.8), 0.025);
        mesh(geometry(new THREE.ConeGeometry(1.1, 0.35, 12)), createMaterial('#f37924', 0.5), amenitiesGroup, poolX - 4.4, 2.2, 0.8);

        // Clubhouse
        const clubX = -12, clubZ = 3.5;
        box(amenitiesGroup, ivoryMat, clubX, 1.1, clubZ, 5.5, 2.0, 4.5);
        box(amenitiesGroup, glassMat, clubX + 0.1, 1.1, clubZ + 2.3, 4.8, 1.8, 0.05);
        box(amenitiesGroup, lawnMat, clubX, 2.15, clubZ, 5.3, 0.08, 4.3); // Green Roof

        // Detailed Trees & Landscaping
        const trees: THREE.Group[] = [];
        const createTree = (x: number, z: number, scale = 1.0) => {
            const t = group(amenitiesGroup, x, 0.1, z);
            t.scale.setScalar(scale);
            rod(t, timberMat, v(0, 0, 0), v(0, 2.6, 0), 0.1);
            for (let i = 0; i < 6; i++) {
                const angle = i * 1.05;
                const radius = 0.4 + (i % 2) * 0.2;
                const tx = Math.cos(angle) * radius;
                const tz = Math.sin(angle) * radius;
                const ty = 2.4 + (i % 3) * 0.35;
                sphere(t, leafMats[i % 3], tx, ty, tz, 0.75, 0.85, 0.75);
            }
            trees.push(t);
        };

        // Plant trees around the central park and boundary
        for (const [tx, tz, ts] of [
            [-13, -7, 1.1], [-13, -2, 0.9], [-13, 8, 1.0],
            [-2, 7.8, 1.2], [2, 7.8, 1.0], [11, 8.0, 1.15],
            [12, -7, 0.95], [12, -1, 1.05]
        ]) {
            createTree(tx, tz, ts);
        }

        // Manicured Hedges
        for (let hx = -10; hx <= 0; hx += 1.2) {
            box(amenitiesGroup, hedgeMat, hx, 0.35, 6.2, 1.1, 0.45, 0.45);
        }

        // Phase 5: Live Community Elements (EV Luxury Sedan driving on road)
        const carGroup = group(scene, -18, 0.18, 12.2);
        const carPaintMat = createMaterial('#1d4e56', 0.25, 0.7);
        box(carGroup, carPaintMat, 0, 0.42, 0, 3.2, 0.45, 1.4);
        box(carGroup, carPaintMat, 0.1, 0.8, 0, 1.7, 0.48, 1.25);
        box(carGroup, glassMat, 0.1, 0.88, 0, 1.6, 0.4, 1.28);
        const carWheels: THREE.Mesh[] = [];
        const carWheelGeo = geometry(new THREE.CylinderGeometry(0.28, 0.28, 0.18, 16));
        for (const wx of [-0.95, 1.0]) for (const wz of [-0.68, 0.68]) {
            const w = mesh(carWheelGeo, darkSteelMat, carGroup, wx, 0.28, wz);
            w.rotation.x = Math.PI / 2;
            carWheels.push(w);
        }

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

            if (last && !stationary && now - last < 15) return; // Smooth 60fps limit
            if (last && !pausedRef.current && !reducedMotion) {
                elapsed += Math.min((now - last) / 1000, 0.06) * 1.35 * speedRef.current;
            }
            last = now;

            const cycle = 45; // 45 second loop total
            const t = reducedMotion ? 40 : elapsed % cycle;
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

            // Phase 0: Site Feasibility (t 0..9)
            siteGridGroup.visible = t < 18;
            beacons.forEach((b, i) => {
                b.position.y = Math.sin(t * 3 + i) * 0.15;
            });

            // Phase 1: Infrastructure (t 9..18)
            infraGroup.visible = t > 6;
            streetLamps.forEach((l) => {
                l.intensity = t > 12 ? 1.8 : 0;
            });

            // Phase 2: Architectural Construction (t 18..27)
            buildingGroup.visible = t > 14;
            towerAFloors.forEach((fl, i) => {
                const buildStart = 15 + i * 2.2;
                fl.cols.visible = t > buildStart;
                fl.slab.visible = t > buildStart + 0.8;
                fl.facade.visible = t > buildStart + 1.4;
            });
            towerARoof.visible = t > 26;

            towerBFloors.forEach((fl, i) => {
                const buildStart = 17 + i * 2.0;
                fl.cols.visible = t > buildStart;
                fl.slab.visible = t > buildStart + 0.7;
                fl.facade.visible = t > buildStart + 1.2;
            });
            solarGroup.visible = t > 25;

            // Phase 3: Amenities & Landscaping (t 27..36)
            amenitiesGroup.visible = t > 26;
            // Animate Pool Ripples
            ripples.forEach((ring, i) => {
                const scale = 1.0 + ((t * 1.5 + i * 0.8) % 2.5);
                ring.scale.set(scale, scale, 1);
                (ring.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.4 - scale * 0.15);
            });

            // Phase 4: Completed Community & Live Atmosphere (t 36..45)
            if (t > 34) {
                carGroup.position.x = -18 + ((t - 34) * 4.5) % 36;
                carWheels.forEach((w) => { w.rotation.y += 0.2; });
                warmWindowMat.emissiveIntensity = 0.6 + Math.sin(t * 2) * 0.15;
            } else {
                carGroup.position.x = -18;
                warmWindowMat.emissiveIntensity = 0;
            }

            // Smooth Cinematic Camera Orbit & Parallax
            const orbitAngle = Math.sin(t * 0.05) * 0.25;
            camera.position.x = cameraBasePos.x * Math.cos(orbitAngle) + cameraBasePos.z * Math.sin(orbitAngle) + pointerX * 1.5;
            camera.position.z = cameraBasePos.z * Math.cos(orbitAngle) - cameraBasePos.x * Math.sin(orbitAngle) - pointerY * 1.2;
            camera.position.y = cameraBasePos.y + Math.sin(t * 0.08) * 0.8 - pointerY * 0.8;
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
                <div ref={host} className="canvas" role="img" aria-label="3D Real Estate Developer master-plan walkthrough showing luxury residential towers, infinity pool, solar amenities, gated township layout, and live traffic." />
                <div ref={curtain} className="veil" aria-hidden="true" />
                <div className="brand">PRAJHA / REAL ESTATE DEVELOPERS</div>
                {status !== 'ready' && (
                    <div className="message">
                        {status === 'loading' ? 'Building 3D Real Estate Master-Plan…' : 'WebGL is required for 3D walkthrough rendering.'}
                    </div>
                )}
                {status === 'ready' && !reduced && (
                    <button type="button" className="pause" onClick={togglePause} aria-label={paused ? 'Play 3D Walkthrough' : 'Pause 3D Walkthrough'} aria-pressed={paused}>
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
