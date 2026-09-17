'use client';

import React, { useEffect, useId, useRef, useState } from 'react';
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

interface ConstructionAnimationProps {
  label?: string;
  subLabel?: string;
  href?: string;
  className?: string;
}

const STAGES = [
  ['Site preparation', 'Excavation, levelling & material delivery'],
  ['Foundation & rebar', 'Footings, reinforcement & concrete work'],
  ['Structural construction', 'Columns, beams & floor slabs'],
  ['Masonry & facade', 'Blockwork, glazing & external finishes'],
  ['Project completion', 'Final structure & finishing inspection'],
] as const;
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const ease = (v: number) => { const t = clamp(v); return t * t * (3 - 2 * t); };
const lerp = (a: number, b: number, t: number) => a + (b - a) * ease(t);

/**
 * Procedural 3D construction time-lapse. No remote models, images or fonts.
 * Requires: npm install three; npm install -D @types/three
 * All measurements are illustrative, not a construction/engineering simulation.
 */
export default function ConstructionAnimation({
  label = 'Prajha Civil Engineering',
  subLabel = 'Turnkey Structural Execution • 15+ Yrs',
  href,
  className = '',
}: ConstructionAnimationProps) {
  const uid = `construction-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const host = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [phase, setPhase] = useState(0);
  const [status, setStatus] = useState<'loading' | 'ready' | 'unavailable'>('loading');

  useEffect(() => {
    if (!host.current) return;
    const mount = host.current;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
    } catch {
      setStatus('unavailable');
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.12;
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    renderer.domElement.setAttribute('aria-hidden', 'true');
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#cadbe0');
    scene.fog = new THREE.Fog('#cadbe0', 42, 88);
    const camera = new THREE.PerspectiveCamera(37, 1, .1, 130);
    camera.position.set(25, 20, 31);
    const target = new THREE.Vector3(0, 5, 0);
    camera.lookAt(target);
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();
    const geometry = <T extends THREE.BufferGeometry>(g: T): T => { geometries.add(g); return g; };
    let seed = 72831;
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const texture = (kind: 'soil' | 'concrete' | 'brick') => {
      const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = kind === 'soil' ? '#ae9475' : kind === 'brick' ? '#b6a18a' : '#b8b7ae';
      ctx.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 11000; i++) {
        const c = Math.floor(60 + random() * 150);
        ctx.fillStyle = `rgba(${c},${c},${c},${kind === 'soil' ? .20 : .09})`;
        const r = kind === 'soil' ? .5 + random() * 2 : .4 + random();
        ctx.fillRect(random() * 256, random() * 256, r, r);
      }
      if (kind === 'brick') {
        ctx.strokeStyle = '#dad1bf'; ctx.lineWidth = 2;
        for (let y = 0; y < 256; y += 32) {
          ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(256, y); ctx.stroke();
          for (let x = (y / 32 % 2) * 32; x < 256; x += 64) {
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 32); ctx.stroke();
          }
        }
      }
      const map = new THREE.CanvasTexture(canvas);
      map.wrapS = map.wrapT = THREE.RepeatWrapping;
      map.colorSpace = THREE.SRGBColorSpace;
      map.repeat.set(kind === 'soil' ? 10 : 1.5, kind === 'soil' ? 10 : 1.5);
      map.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 4);
      textures.add(map); return map;
    };
    const material = (colour: string, roughness = .8, metalness = 0, map?: THREE.Texture) => {
      const m = new THREE.MeshStandardMaterial({ color: colour, roughness, metalness, map, bumpMap: map, bumpScale: map ? .035 : 0 });
      materials.add(m); return m;
    };
    const concrete = material('#e4e0d6', .96, 0, texture('concrete'));
    const soil = material('#dfc3a0', 1, 0, texture('soil'));
    const sand = material('#cbb188', 1, 0, texture('soil'));
    const masonry = material('#e2d9c8', .94, 0, texture('brick'));
    const yellow = material('#c68b2f', .4, .25);
    const yellowLight = material('#e5b855', .36, .18);
    const dark = material('#273332', .67, .28);
    const steel = material('#667576', .48, .7);
    const chrome = material('#c9d1cd', .28, .85);
    const rubber = material('#23282a', .99);
    const glass = material('#536f78', .17, .55);
    const timber = material('#8d6945', .95);
    const orange = material('#c87735', .85);
    const helmet = material('#eee5c6', .6);
    const skin = material('#9d7357', .92);
    const clothing = material('#53606a', .97);
    const white = material('#ece7d8', .5);
    const gravelMaterials = ['#777d7c','#8c918a','#a2a397','#626c6b'].map(c => material(c, 1));
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
      const o = mesh(unitCylinder, m, parent); o.position.copy(a).add(b).multiplyScalar(.5);
      o.scale.set(r, a.distanceTo(b), r); o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize()); return o;
    };
    const v = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
    const group = (parent: THREE.Object3D, x = 0, y = 0, z = 0) => { const g = new THREE.Group(); g.position.set(x,y,z); parent.add(g); return g; };

    // A local sky cubemap gives glass and painted metal genuine environment reflections.
    const environmentFaces = Array.from({length:6},(_,i)=>{
      const c=document.createElement('canvas');c.width=c.height=64;
      const ctx=c.getContext('2d')!;const grad=ctx.createLinearGradient(0,0,0,64);
      grad.addColorStop(0,i===3?'#a38d71':'#c9e0ed');grad.addColorStop(.55,'#e6e8df');grad.addColorStop(1,'#aa967a');
      ctx.fillStyle=grad;ctx.fillRect(0,0,64,64);return c;
    });
    const environment=new THREE.CubeTexture(environmentFaces);environment.colorSpace=THREE.SRGBColorSpace;environment.needsUpdate=true;
    textures.add(environment);scene.environment=environment;scene.environmentIntensity=.45;
    glass.envMapIntensity=1.35;
    scene.add(new THREE.HemisphereLight('#e8f2fa', '#7f694c', 2.1));
    const sun = new THREE.DirectionalLight('#fff1d3', 3.5);
    sun.position.set(-15, 27, 13); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left: -24, right: 24, top: 24, bottom: -24, near: 1, far: 70 });
    sun.shadow.bias = -.0003; sun.shadow.normalBias = .025; sun.shadow.radius = 3;
    scene.add(sun);
    const fill = new THREE.DirectionalLight('#cce5f5', .7); fill.position.set(18, 9, -20); scene.add(fill);
    box(scene, soil, 0, -.25, 0, 90, .5, 90);
    const roadMat = material('#927d67', 1);
    box(scene, roadMat, 0, .01, 10, 52, .035, 4.2);
    for (const z of [8.9, 10.8]) {
      box(scene, material('#7f6e5c', 1), 0, .035, z, 45, .012, .13);
      for (let i = 0; i < 80; i++) box(scene, roadMat, -23 + i*.6, .049, z, .08, .008, .5).rotation.y = .42;
    }
    // Distant buildings establish scale and atmospheric depth.
    const distant = material('#a6b5b4', 1);
    for (let i = 0; i < 15; i++) {
      const h = 3 + random()*7;
      const o = box(scene, distant, -32+i*4.6, h/2, -30-random()*10, 2+random()*2, h, 3);
      o.castShadow = false;
    }
    // Actual volume for sand heaps; a distorted cone provides irregular slopes.
    const heap = (x: number, z: number, radius: number, h: number, m: THREE.Material) => {
      const g = geometry(new THREE.ConeGeometry(radius, h, 28, 5));
      const a = g.attributes.position;
      for (let i = 0; i < a.count; i++) {
        const px = a.getX(i), pz = a.getZ(i);
        const f = 1 + .06*Math.sin(px*3.7+pz*2.1);
        a.setXYZ(i, px*f, a.getY(i), pz*f*.8);
      }
      g.computeVertexNormals(); mesh(g,m,scene,x,h/2,z);
    };
    heap(-9, 7.3, 2.9, 1.8, sand); heap(-11, 5.2, 1.5, .8, sand);
    heap(9, 5.5, 2.25, 1.2, gravelMaterials[0]);
    const rock = geometry(new THREE.DodecahedronGeometry(1, 0));
    // Instancing keeps hundreds of stones inexpensive to draw.
    for (let c = 0; c < 4; c++) {
      const rocks = new THREE.InstancedMesh(rock, gravelMaterials[c], 65);
      const dummy = new THREE.Object3D();
      for (let i = 0; i < 65; i++) {
        const angle = random()*Math.PI*2, r = Math.sqrt(random())*2.35;
        const size = .075+random()*.13;
        dummy.position.set(9+Math.cos(angle)*r, Math.max(.08,(1-r/2.5)*1.25)+random()*.12, 5.5+Math.sin(angle)*r*.8);
        dummy.rotation.set(random()*3,random()*3,random()*3); dummy.scale.set(size,size*.7,size*1.2); dummy.updateMatrix(); rocks.setMatrixAt(i,dummy.matrix);
      }
      rocks.castShadow = true; rocks.receiveShadow = true; scene.add(rocks);
    }
    // Stored blocks, timber, reinforcement bars and cement bags.
    for (let row = 0; row < 3; row++) for (let col = 0; col < 5; col++) {
      box(scene, orange, -2.5+col*.48, .16+row*.3, 5.8, .43, .28, .65);
    }
    for (let i = 0; i < 7; i++) box(scene,timber,2.3,.08+i*.13,5.4,2.6,.11,.42);
    for (let i = 0; i < 8; i++) rod(scene,steel,v(3,.12+i%3*.055,3.5+i*.12),v(5.6,.12+i%3*.055,3.5+i*.12),.026);
    for (let i = 0; i < 5; i++) sphere(scene,white,-5.5+i*.38,.2+(i%2)*.12,5,.36,.17,.26);

    const pit = group(scene,0,0,-2);
    box(pit,material('#6e5946',1),0,.015,0,10.8,.04,7.8);
    for (const x of [-5.45,5.45]) box(pit,soil,x,.17,0,.4,.35,8);
    for (const z of [-4,4]) box(pit,soil,0,.17,z,11,.35,.4);
    const foundation = group(scene,0,0,-2);
    const building = group(scene,0,.28,-2);
    box(foundation,concrete,0,.16,0,10,.32,7);
    const rebar = group(scene,0,0,-2);
    for (let x=-4.5;x<=4.5;x+=.6) rod(rebar,steel,v(x,.42,-3.2),v(x,.42,3.2),.019);
    for (let z=-3.2;z<=3.2;z+=.6) rod(rebar,steel,v(-4.7,.44,z),v(4.7,.44,z),.019);
    const floors: { columns: THREE.Group; slab: THREE.Group; walls: THREE.Group }[] = [];
    const columns = [-4.65,-1.55,1.55,4.65];
    for (let level=0;level<4;level++) {
      const y=level*2.65;
      const cols=group(building), slab=group(building), walls=group(building);
      for (const x of columns) for (const z of [-3.15,3.15]) {
        box(cols,concrete,x,y+1.23,z,.34,2.46,.34);
        for (const dx of [-.085,.085]) for (const dz of [-.085,.085]) rod(cols,steel,v(x+dx,y+2.45,z+dz),v(x+dx,y+2.95,z+dz),.014);
      }
      box(slab,concrete,0,y+2.5,0,10,.3,7);
      for (const z of [-3.12,3.12]) box(slab,concrete,0,y+2.25,z,9.8,.3,.3);
      // Window openings are real gaps between wall pieces, with recessed glazing.
      for (const z of [-3.27,3.27]) for (let bay=0;bay<3;bay++) {
        const x=-3.1+bay*3.1;
        box(walls,masonry,x,y+.38,z,2.78,.7,.19);
        box(walls,masonry,x,y+2.04,z,2.78,.57,.19);
        for(const dx of [-1.12,1.12]) box(walls,masonry,x+dx,y+1.25,z,.55,1.04,.19);
        box(walls,glass,x,y+1.27,z*.991,1.69,1.03,.055);
        for(const dx of [-.85,0,.85]) box(walls,dark,x+dx,y+1.27,z*1.012,.045,1.08,.05);
        for(const dy of [-.54,.54]) box(walls,white,x,y+1.27+dy,z*1.014,1.8,.05,.16);
      }
      for (const x of [-4.82,4.82]) {
        box(walls,masonry,x,y+1.17,0,.18,2.3,6.3);
        for(const z of [-1.8,1.8]) {
          box(walls,dark,x*1.024,y+1.3,z,.06,1.22,1.7);
          box(walls,glass,x*1.032,y+1.3,z,.035,1.1,1.57);
          box(walls,white,x*1.04,y+.72,z,.16,.07,1.8);
        }
      }
      floors.push({columns:cols,slab,walls});
    }
    const parapet = group(building);
    for (const z of [-3.35,3.35]) box(parapet,concrete,0,10.98,z,10,.55,.18);
    for (const x of [-4.9,4.9]) box(parapet,concrete,x,10.98,0,.18,.55,6.7);
    const scaffold = group(scene,-5.45,0,-2);
    for (const z of [-3.5,0,3.5]) for (const x of [-.6,.6]) rod(scaffold,steel,v(x,0,z),v(x,11.2,z),.035);
    for(let y=1;y<11;y+=1.8) {
      for(const z of [-3.5,0,3.5]) rod(scaffold,steel,v(-.6,y,z),v(.6,y,z),.03);
      for(const x of [-.6,.6]) {
        for(const z of [-3.5,0]) rod(scaffold,steel,v(x,y,z),v(x,y+1.8,z+3.5),.022);
      }
      box(scaffold,timber,0,y,0,1.1,.055,7);
    }
    // Tower crane, counterweight and trussed horizontal jib.
    const crane=group(scene,8,0,-6);
    box(crane,concrete,0,.24,0,2.3,.48,2.3);
    for(const x of [-.42,.42]) for(const z of [-.42,.42]) rod(crane,yellow,v(x,.4,z),v(x,16,z),.055);
    for(let y=.5;y<15.5;y+=1.15) {
      for(const z of [-.42,.42]) { rod(crane,yellow,v(-.42,y,z),v(.42,y+1.15,z),.035); rod(crane,yellow,v(-.42,y,z),v(.42,y,z),.035); }
      for(const x of [-.42,.42]) rod(crane,yellow,v(x,y,-.42),v(x,y+1.15,.42),.035);
    }
    const jib=group(crane,0,16,0);
    for(const z of [-.36,.36]) {
      for(const y of [0,.65]) rod(jib,yellow,v(-12,y,z),v(3,y,z),.05);
      for(let x=-12;x<3;x+=.75) rod(jib,yellow,v(x,0,z),v(x+.75,.65,z),.027);
    }
    box(jib,concrete,2,.05,0,1.6,1.2,1.35);
    box(jib,yellowLight,-.6,-.55,.6,1.2,.9,1);
    box(jib,glass,-.62,-.52,1.11,.85,.56,.04);
    rod(jib,yellow,v(0,0,0),v(0,2.3,0),.08);
    rod(jib,steel,v(0,2.3,0),v(-10,.65,0),.023);
    rod(jib,steel,v(0,2.3,0),v(3,.65,0),.023);
    const carriage=group(crane,-2,15.9,0);
    box(carriage,dark,0,0,0,.5,.2,.75);
    const cable=mesh(unitCylinder,dark,carriage); cable.scale.set(.015,5,.015);
    const skip=group(carriage,0,-5,0);
    rod(skip,steel,v(0,0,0),v(-.45,-.6,0),.025); rod(skip,steel,v(0,0,0),v(.45,-.6,0),.025);
    const skipGeo=geometry(new THREE.CylinderGeometry(.53,.28,.8,12));
    mesh(skipGeo,yellow,skip,0,-.98,0); box(skip,dark,0,-1.45,0,.22,.15,.22);

    // Mixer truck: separate chassis, suspension, mudguards, drum and rotating wheels.
    const truck=group(scene,23,0,10);
    box(truck,dark,0,.65,0,5.8,.24,1.5);
    box(truck,yellow,-1.95,1.3,0,1.65,1.5,1.62);
    box(truck,yellowLight,-2.1,2.08,0,1.4,.12,1.68);
    box(truck,glass,-2.785,1.68,0,.04,.65,1.34);
    for(const z of [-.831,.831]) {
      box(truck,glass,-2.05,1.69,z,1.04,.65,.035);
      box(truck,dark,-1.8,1.1,z*1.02,.23,.055,.04);
      rod(truck,dark,v(-2.57,1.65,z),v(-2.62,1.7,z*1.4),.025);
      box(truck,dark,-2.63,1.72,z*1.4,.15,.28,.09);
    }
    box(truck,steel,-2.87,.73,0,.16,.2,1.7);
    box(truck,dark,-2.8,1.09,0,.08,.5,.85);
    for(let i=0;i<5;i++) box(truck,steel,-2.85,.89+i*.085,0,.035,.025,.78);
    for(const z of [-.58,.58]) box(truck,white,-2.86,1.08,z,.05,.21,.25);
    const tyres: THREE.Group[]=[];
    const wheelGeo=geometry(new THREE.CylinderGeometry(.47,.47,.26,20));
    for(const x of [-1.93,1.17,2.13]) for(const z of [-.9,.9]) {
      const wheel=group(truck,x,.48,z); tyres.push(wheel);
      mesh(wheelGeo,rubber,wheel).rotation.x=Math.PI/2;
      const hub=mesh(unitCylinder,steel,wheel,0,0,z<0?-.15:.15); hub.scale.set(.24,.045,.24); hub.rotation.x=Math.PI/2;
      for(let k=0;k<6;k++) sphere(wheel,chrome,Math.cos(k*Math.PI/3)*.13,Math.sin(k*Math.PI/3)*.13,z<0?-.185:.185,.025);
      box(truck,yellow,x,1.03,z,.99,.08,.38);
    }
    const drumMount=group(truck,.65,1.63,0); drumMount.rotation.z=-.16;
    const drumAxis=group(drumMount); drumAxis.rotation.z=Math.PI/2;
    const drum=group(drumAxis);
    const drumGeo=geometry(new THREE.LatheGeometry([
      new THREE.Vector2(.35,-1.45),new THREE.Vector2(.74,-1),new THREE.Vector2(.91,-.55),
      new THREE.Vector2(.91,.45),new THREE.Vector2(.58,1.25),new THREE.Vector2(.33,1.5)
    ],28));
    mesh(drumGeo,white,drum);
    for(const y of [-.72,.15,.84]) {
      const band=mesh(geometry(new THREE.TorusGeometry(y>.5?.72:.92,.075,6,28)),yellow,drum,0,y,0); band.rotation.x=Math.PI/2;
    }
    // Offset steel ribs make the axial drum rotation visible.
    for(let i=0;i<3;i++) {
      const r=group(drum); r.rotation.y=i*Math.PI*2/3;
      rod(r,yellow,v(.85,-.6,0),v(.82,.45,.12),.04);
    }
    rod(truck,steel,v(2.45,1.6,0),v(3.15,.95,.3),.12);
    for(const z of [-.56,.56]) rod(truck,steel,v(2.75,.7,z),v(2.45,2.45,z),.035);
    for(let y=.9;y<2.4;y+=.28) rod(truck,steel,v(2.72-(y-.9)*.16,y,-.56),v(2.72-(y-.9)*.16,y,.56),.025);

    // Tracked excavator with linked boom/stick and independent bucket curl.
    const excavator=group(scene,-9.4,0,2.5);
    for(const z of [-.82,.82]) {
      box(excavator,dark,0,.35,z,3.4,.5,.48);
      for(let x=-1.35;x<=1.35;x+=.45) {
        const w=mesh(wheelGeo,steel,excavator,x,.36,z); w.scale.set(.6,.75,.6); w.rotation.x=Math.PI/2;
      }
      for(let x=-1.55;x<1.6;x+=.19) { box(excavator,rubber,x,.61,z,.13,.08,.55); box(excavator,rubber,x,.09,z,.13,.08,.55); }
    }
    box(excavator,yellow,0,.92,0,2.8,.55,1.85);
    box(excavator,yellowLight,-.7,1.77,-.05,1.3,1.25,1.5);
    box(excavator,glass,-.7,1.85,.72,1.04,.89,.04);
    box(excavator,glass,-.025,1.85,0,.04,.89,1.22);
    box(excavator,dark,-.7,2.43,0,1.45,.11,1.6);
    for(let x=-1.24;x<-.5;x+=.13) box(excavator,dark,x,.99,.945,.065,.23,.025);
    const boom=group(excavator,.6,1.15,0);
    box(boom,yellow,1.35,0,0,2.7,.36,.35);
    rod(boom,chrome,v(.25,.23,0),v(2.25,.23,0),.065);
    rod(boom,dark,v(.25,.23,0),v(1.1,.23,0),.09);
    const stick=group(boom,2.7,0,0);
    box(stick,yellow,1.1,0,0,2.2,.29,.31);
    rod(stick,chrome,v(.1,.22,0),v(1.9,.22,0),.05);
    const bucketPivot=group(stick,2.2,0,0);
    const bucketShape=new THREE.Shape(); bucketShape.moveTo(0,0); bucketShape.lineTo(.15,-.6); bucketShape.quadraticCurveTo(.5,-.95,1,-.55); bucketShape.lineTo(.72,-.1); bucketShape.closePath();
    const scoop=geometry(new THREE.ExtrudeGeometry(bucketShape,{depth:.85,bevelEnabled:true,bevelSize:.04,bevelThickness:.04,bevelSegments:1,steps:1}));
    mesh(scoop,dark,bucketPivot,0,0,-.425);
    for(const z of [-.32,-.1,.1,.32]) box(bucketPivot,steel,.9,-.59,z,.29,.08,.09).rotation.z=.4;

    // Human proportions: boots, trousers, sleeves, gloves, vest and hard hat.
    const workers: {root:THREE.Group;arm:THREE.Group;legs:THREE.Group[]}[]=[];
    const human=(parent:THREE.Object3D,x:number,z:number) => {
      const root=group(parent,x,0,z); const legs:THREE.Group[]=[];
      for(const side of [-1,1]) {
        const leg=group(root,side*.12,.77,0); legs.push(leg);
        rod(leg,clothing,v(0,0,0),v(0,-.61,.035),.095);
        box(leg,dark,0,-.66,.08,.19,.16,.33);
      }
      sphere(root,clothing,0,1.03,0,.25,.34,.145);
      box(root,orange,0,1.08,.03,.45,.45,.29);
      for(const x of [-.12,.12]) box(root,helmet,x,1.08,.183,.035,.44,.017);
      box(root,helmet,0,.99,.185,.45,.035,.019);
      sphere(root,skin,0,1.49,0,.145,.18,.14);
      sphere(root,helmet,0,1.63,0,.185,.13,.18);
      box(root,helmet,0,1.59,.02,.41,.025,.38);
      const arm=group(root,.27,1.23,0);
      rod(arm,clothing,v(0,0,0),v(.1,-.22,.04),.077);
      rod(arm,skin,v(.1,-.22,.04),v(.13,-.33,.21),.057);
      sphere(arm,helmet,.13,-.33,.21,.066);
      rod(root,clothing,v(-.27,1.23,0),v(-.31,.87,.15),.07);
      workers.push({root,arm,legs}); return workers[workers.length-1];
    };
    const mason=human(scene,-1,2.6);
    rod(mason.arm,timber,v(.13,-.33,.21),v(.13,-.12,.4),.025);
    box(mason.arm,steel,.13,-.1,.41,.19,.07,.075);
    const surveyor=human(scene,5.9,3); surveyor.root.rotation.y=-.6;
    box(surveyor.arm,dark,.13,-.33,.28,.25,.03,.35);
    const rooftop=human(building,2.2,1.8);
    const barrow=group(scene,-1,0,6.4);
    const walking=human(barrow,-.1,-.85); walking.root.rotation.y=0;
    box(barrow,orange,0,.58,.65,.72,.12,.85);
    for(const x of [-.38,.38]) box(barrow,orange,x,.75,.65,.06,.36,.85).rotation.z=x>0?-.18:.18;
    for(const z of [.2,1.08]) box(barrow,orange,0,.75,z,.75,.35,.06);
    for(const x of [-.3,.3]) rod(barrow,steel,v(x,.8,-.48),v(x,.36,1.19),.028);
    const barrowWheel=mesh(wheelGeo,rubber,barrow,0,.25,1.17); barrowWheel.scale.set(.52,.7,.52); barrowWheel.rotation.z=Math.PI/2;
    for(let i=0;i<4;i++) box(barrow,masonry,(i%2)*.26-.13,.86+Math.floor(i/2)*.12,.6,.24,.1,.34);
    // Small site cones anchor the equipment to its service lane.
    for(const x of [-13,-5,6,12]) {
      box(scene,dark,x,.04,7.5,.5,.08,.5);
      mesh(geometry(new THREE.ConeGeometry(.19,.65,12)),orange,scene,x,.39,7.5);
      mesh(geometry(new THREE.CylinderGeometry(.105,.14,.12,12)),white,scene,x,.4,7.5);
    }

    // Batch static parts by material inside each assembly. Animated joints remain separate.
    const assemblies:THREE.Object3D[]=[];scene.traverse(o=>assemblies.push(o));
    for(const parent of assemblies) {
      const batches=new Map<THREE.Material,THREE.Mesh[]>();
      for(const child of parent.children) {
        if(!(child instanceof THREE.Mesh) || child instanceof THREE.InstancedMesh || child===cable || Array.isArray(child.material)) continue;
        const items=batches.get(child.material) || [];items.push(child);batches.set(child.material,items);
      }
      for(const [mat,items] of batches) {
        if(items.length<2) continue;
        const parts=items.map(item=>{
          item.updateMatrix();
          const g=item.geometry.index?item.geometry.toNonIndexed():item.geometry.clone();
          return g.applyMatrix4(item.matrix);
        });
        const merged=mergeGeometries(parts);parts.forEach(g=>g.dispose());
        if(!merged) continue;
        geometry(merged);const combined=mesh(merged,mat,parent);
        combined.castShadow=items.some(o=>o.castShadow);combined.receiveShadow=items.some(o=>o.receiveShadow);
        items.forEach(o=>parent.remove(o));
      }
    }
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion=media.matches, visible=true, elapsed=0, frame=0, last=0, lastPhase=-1, disposed=false, staticDrawn=false;
    setReduced(reducedMotion);
    const onMedia=() => { staticDrawn=false; reducedMotion=media.matches; setReduced(reducedMotion); last=0; };
    media.addEventListener('change',onMedia);
    const resize=() => {
      staticDrawn=false;
      const width=mount.clientWidth, height=mount.clientHeight;
      if (!width || !height) return;
      renderer.setSize(width,height,false); camera.aspect=width/height;
      camera.position.set(25,20,31).multiplyScalar(camera.aspect<1.2?1.12:1);
      camera.lookAt(target); camera.updateProjectionMatrix();
    };
    const observer=new ResizeObserver(resize); observer.observe(mount); resize();
    const visibility=new IntersectionObserver(([e])=>{visible=e.isIntersecting;last=0;}); visibility.observe(mount);
    const onLost=(event:Event)=>{event.preventDefault();setStatus('unavailable');};
    renderer.domElement.addEventListener('webglcontextlost',onLost);
    const animate=(now:number) => {
      if(disposed) return;
      frame=requestAnimationFrame(animate);
      if(!visible || document.hidden) {last=0;staticDrawn=false;return;}
      const stationary=pausedRef.current || reducedMotion;
      if(stationary && staticDrawn) {last=0;return;}
      staticDrawn=stationary;
      if(last && !stationary && now-last<32) return;
      if(last && !pausedRef.current && !reducedMotion) elapsed+=Math.min((now-last)/1000,.06);
      last=now;
      const t=reducedMotion?46:elapsed%52;
      const phaseIndex=t<8?0:t<16?1:t<35?2:t<43?3:4;
      if(phaseIndex!==lastPhase) {lastPhase=phaseIndex;setPhase(phaseIndex);}
      if(progress.current) progress.current.style.transform=`scaleX(${Math.min(t/49,1)})`;
      if(curtain.current) curtain.current.style.opacity=String(t>49?ease((t-49)/2):1-ease(t/1.4));
      foundation.visible=t>9; rebar.visible=t>6 && t<19;
      floors.forEach((f,i)=>{
        f.columns.visible=t>16+i*4.2;
        f.slab.visible=t>19.3+i*4.2;
        f.walls.visible=t>35+i*1.65;
      });
      scaffold.visible=t>17 && t<43; parapet.visible=t>42;
      rooftop.root.visible=t>20;
      rooftop.root.position.y=Math.max(0,Math.min(4,Math.floor((t-16)/4.2)))*2.65-.03;
      const lift=t%13, deck=Math.min(10.6,Math.max(0,Math.floor((t-16)/4.2))*2.65);
      let travel=2, loadY=1.7;
      if(lift<3) loadY=lerp(1.7,13.4,lift/3);
      else if(lift<5) {travel=lerp(2,8,(lift-3)/2);loadY=13.4;}
      else if(lift<7) {travel=8;loadY=lerp(13.4,deck+1.8,(lift-5)/2);}
      else if(lift<8) {travel=8;loadY=deck+1.8;}
      else if(lift<9.5) {travel=8;loadY=lerp(deck+1.8,13.4,(lift-8)/1.5);}
      else if(lift<11.5) {travel=lerp(8,2,(lift-9.5)/2);loadY=13.4;}
      else loadY=lerp(13.4,1.7,(lift-11.5)/1.5);
      carriage.position.x=-travel;
      const length=15.9-loadY; cable.scale.y=length; cable.position.y=-length/2; skip.position.y=-length;
      const route=t%26;
      truck.position.x=route<8?lerp(23,6,route/8):route<16?6:lerp(6,-24,(route-16)/10);
      tyres.forEach(w=>{w.rotation.z=-truck.position.x/.47;});
      drum.rotation.y=t*.7;
      const dig=t*.65;
      boom.rotation.z=.7+Math.sin(dig)*.28;
      stick.rotation.z=-1.5+Math.sin(dig-.7)*.3;
      bucketPivot.rotation.z=-.3+Math.sin(dig-1.1)*.48;
      barrow.position.x=-2+Math.sin(t*.24)*2;
      barrow.rotation.y=Math.PI/2*Math.tanh(Math.cos(t*.24)*6);
      workers.forEach((w,i)=>{w.arm.rotation.x=Math.sin(t*2.5+i)*.25;});
      walking.legs.forEach((leg,i)=>{leg.rotation.x=Math.sin(t*4+i*Math.PI)*.3;});
      renderer.render(scene,camera);
    };
    frame=requestAnimationFrame(animate); setStatus('ready');
    return () => {
      disposed=true; cancelAnimationFrame(frame); observer.disconnect();visibility.disconnect();
      media.removeEventListener('change',onMedia);renderer.domElement.removeEventListener('webglcontextlost',onLost);
      geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
      renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();
    };
  }, []);

  const togglePause=() => { pausedRef.current=!pausedRef.current;setPaused(pausedRef.current); };
  return <figure className={`${uid} ${className}`} style={{margin:0}}>
    <style>{`
      .${uid}{overflow:hidden;border:1px solid #d8ded8;border-radius:20px;background:#f5f3ec;color:#19362f;font-family:Arial,Helvetica,sans-serif;box-shadow:0 14px 45px #1f342316;}
      .${uid} *{box-sizing:border-box;}
      .${uid} .viewport{position:relative;aspect-ratio:4/3;background:#cadbe0;}
      .${uid} .canvas{position:absolute;inset:0;}
      .${uid} .brand{position:absolute;top:22px;left:24px;font-size:10px;letter-spacing:.18em;font-weight:700;color:#34483e;pointer-events:none;background:#f7f6efcf;padding:7px 9px;border-radius:4px;}
      .${uid} .pause{position:absolute;right:18px;top:16px;width:42px;height:42px;border:1px solid #ffffffa0;background:#ffffffda;border-radius:50%;color:#264339;cursor:pointer;display:grid;place-items:center;}
      .${uid} .stage{padding:22px 26px 20px;background:#f7f6f0;border-top:1px solid #d6dcd2;}
      .${uid} .step-label{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#8a622f;margin-bottom:8px;}
      .${uid} .step-title{font-size:clamp(21px,3vw,32px);font-weight:700;letter-spacing:-.035em;line-height:1.16;margin:0 0 8px;overflow-wrap:anywhere;}
      .${uid} .step-detail{font-size:14px;color:#596b60;line-height:1.5;margin:0;}
      .${uid} .track{height:4px;border-radius:4px;background:#dde1d6;margin-top:19px;overflow:hidden;}
      .${uid} .fill{height:100%;background:#ac7d3d;transform:scaleX(0);transform-origin:left;}
      .${uid} .caption{padding:18px 26px 23px;border-top:1px solid #e0e3db;}
      .${uid} .name{font-size:17px;line-height:1.3;font-weight:600;color:inherit;text-decoration:none;}
      .${uid} .sub{font-size:12px;line-height:1.5;margin-top:5px;color:#627366;}
      .${uid} .veil{position:absolute;inset:0;background:#cadbe0;pointer-events:none;opacity:1;}
      .${uid} .message{position:absolute;inset:0;display:grid;place-content:center;text-align:center;padding:28px;color:#344b42;font-size:15px;line-height:1.6;}
      .${uid} :focus-visible{outline:3px solid #a87732;outline-offset:3px;}
      @media(max-width:480px){.${uid} .stage{padding:18px 20px;}.${uid} .caption{padding:16px 20px 20px;}.${uid} .brand{left:16px;top:20px;font-size:8px;}.${uid} .step-detail{font-size:13px;}.${uid} .pause{width:36px;height:36px;right:12px;top:12px;}}
    `}</style>
    <div className="viewport">
      <div ref={host} className="canvas" role="img" aria-label="Three-dimensional construction time-lapse with concrete floors, workers, crane, excavator, mixer truck, sand and gravel."/>
      <div ref={curtain} className="veil" aria-hidden="true"/>
      <div className="brand">PRAJHA / CIVIL ENGINEERING</div>
      {status!=='ready' && <div className="message">{status==='loading'?'Preparing the construction scene…':'The 3D scene needs a browser with WebGL enabled. Please enable hardware acceleration or try another browser.'}</div>}
      {status==='ready' && !reduced && <button type="button" className="pause" onClick={togglePause} aria-label={paused?'Play construction animation':'Pause construction animation'} aria-pressed={paused}>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">{paused?<path d="M4 2L12 7L4 12Z" fill="currentColor"/>:<path d="M4 2V12M10 2V12" stroke="currentColor" strokeWidth="2"/>}</svg>
      </button>}
    </div>
    <div className="stage">
      <div className="step-label">Step {String(phase+1).padStart(2,'0')} / 05</div>
      <h3 className="step-title">{STAGES[phase][0]}</h3>
      <p className="step-detail">{STAGES[phase][1]}</p>
      <div className="track" aria-hidden="true"><div ref={progress} className="fill"/></div>
    </div>
    <figcaption className="caption">
      {href?<a className="name" href={href}>{label} ↗</a>:<div className="name">{label}</div>}
      <div className="sub">{subLabel}</div>
    </figcaption>
  </figure>;
}
