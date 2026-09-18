'use client';

import { useEffect, useId, useRef, useState } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

interface PropertyManagementAnimationProps {
  label?: string;
  subLabel?: string;
  href?: string;
  className?: string;
  /** 1 = 40-second loop; 1.25 = 32-second loop. */
  speed?: number;
}

const STAGES = [
  ['Tenant support', 'Responding to residents and coordinating day-to-day needs'],
  ['Property inspections', 'Checking the condition of homes and shared spaces'],
  ['Maintenance coordination', 'Organising repairs and keeping essential services running'],
  ['Rent & accounts', 'Tracking collections, expenses and property records'],
  ['Owner reporting', 'Keeping owners informed with clear property updates'],
] as const;

/**
 * Property-management operations animation for Next.js + Tailwind CSS. No remote models, images or fonts.
 * Requires: npm install three; npm install -D @types/three
 * Real-time procedural 3D, not filmed footage or photorealistic scanned assets.
 * Illustrative service workflow, not live property or accounting data.
 * Scene aspect ratio matches ConstructionAnimation: 4:3.
 * Import directly into a Next.js page; browser-only APIs run inside useEffect.
 */
export default function PropertyManagementAnimation({
  label = 'Prajha Property Management',
  subLabel = 'Caring for properties. Supporting owners and residents.',
  href,
  className = '',
  speed = 1,
}: PropertyManagementAnimationProps) {
  const uid = `property-management-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const host = useRef<HTMLDivElement>(null);
  const curtain = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const speedRef = useRef(1);
  useEffect(() => { speedRef.current = Number.isFinite(speed) ? Math.max(.25, Math.min(3, speed)) : 1; }, [speed]);
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
    renderer.toneMappingExposure = .92;
    renderer.domElement.style.cssText = 'display:block;width:100%;height:100%';
    renderer.domElement.setAttribute('aria-hidden', 'true');
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#c8c5bc');
    scene.fog = new THREE.Fog('#e0e7e1',35,70);
    const camera = new THREE.PerspectiveCamera(36, 4 / 3, .1, 100);
    camera.position.set(11,7.8,13);
    const target = new THREE.Vector3(0,1.35,0);
    camera.lookAt(target);
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();
    const geometry = <T extends THREE.BufferGeometry>(g: T): T => { geometries.add(g); return g; };
    let seed = 72831;
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const texture = (kind: 'soil' | 'concrete' | 'brick' | 'wood' | 'stone' | 'fabric') => {
      const canvas = document.createElement('canvas'); canvas.width = canvas.height = 256;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = kind === 'wood' ? '#b7956e' : kind === 'stone' ? '#e5e0d7' : kind === 'fabric' ? '#d0d0cd' : kind === 'soil' ? '#ae9475' : kind === 'brick' ? '#b6a18a' : '#dedbd1';
      ctx.fillRect(0, 0, 256, 256);
      for (let i = 0; i < 11000; i++) {
        const c = Math.floor(60 + random() * 150);
        ctx.fillStyle = `rgba(${c},${c},${c},${kind === 'soil' ? .20 : .09})`;
        const r = kind === 'soil' ? .5 + random() * 2 : .4 + random();
        ctx.fillRect(random() * 256, random() * 256, r, r);
      }
      if (kind === 'wood') {
        for(let i=0;i<170;i++) {
          ctx.strokeStyle=`rgba(66,39,20,${.04+random()*.11})`;ctx.lineWidth=.3+random();ctx.beginPath();
          const x=random()*256;ctx.moveTo(x,0);
          for(let y=0;y<=256;y+=8)ctx.lineTo(x+Math.sin(y*.025+i)*2.5,y);ctx.stroke();
        }
      }
      if(kind === 'stone') {
        for(let i=0;i<14;i++) {
          ctx.strokeStyle=`rgba(125,119,108,${.04+random()*.08})`;ctx.lineWidth=.3+random()*1.3;ctx.beginPath();
          let x=random()*256;ctx.moveTo(x,0);
          for(let y=0;y<=256;y+=12){x+=(random()-.5)*28;ctx.lineTo(x,y);}ctx.stroke();
        }
      }
      if(kind === 'fabric') {
        ctx.strokeStyle='rgba(30,35,40,.11)';ctx.lineWidth=.4;
        for(let i=0;i<256;i+=3){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,256);ctx.moveTo(0,i);ctx.lineTo(256,i);ctx.stroke();}
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
    const dark = material('#273332', .67, .28);
    const steel = material('#667576', .48, .7);
    const chrome = material('#c9d1cd', .28, .85);
    const glass = material('#536f78', .17, .55);
    const timber = material('#ae8f6d', .43, 0, texture('wood'));
    const white = material('#ece7d8', .5);
    const unitBox = geometry(new THREE.BoxGeometry(1, 1, 1));
    const unitSphere = geometry(new THREE.SphereGeometry(1, 24, 16));
    const unitCylinder = geometry(new THREE.CylinderGeometry(1, 1, 1, 20));
    const mesh = (g: THREE.BufferGeometry, m: THREE.Material, parent: THREE.Object3D, x = 0, y = 0, z = 0) => {
      const o = new THREE.Mesh(g, m); o.position.set(x, y, z); o.castShadow = true; o.receiveShadow = true; parent.add(o); return o;
    };
    const box = (parent: THREE.Object3D, m: THREE.Material, x: number, y: number, z: number, w: number, h: number, d: number) => {
      const o = mesh(unitBox, m, parent, x, y, z); o.scale.set(w, h, d); return o;
    };
    const roundedGeometry=geometry(new RoundedBoxGeometry(1,1,1,3,.07));
    const rounded=(parent:THREE.Object3D,m:THREE.Material,x:number,y:number,z:number,w:number,h:number,d:number)=>{
      const o=mesh(roundedGeometry,m,parent,x,y,z);o.scale.set(w,h,d);return o;
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

    // Screen-space occlusion brings depth to joints, recesses and wall/floor intersections.
    const renderTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,samples:4});
    const composer=new EffectComposer(renderer,renderTarget);
    const occlusion=new SSAOPass(scene,camera,512,384,16);
    occlusion.kernelRadius=8;occlusion.minDistance=.001;occlusion.maxDistance=.09;
    const renderPass=new RenderPass(scene,camera);
    const outputPass=new OutputPass();composer.addPass(renderPass);composer.addPass(occlusion);composer.addPass(outputPass);
    // A local sky cubemap gives glass and painted metal genuine environment reflections.
    const environmentFaces = Array.from({length:6},(_,i)=>{
      const c=document.createElement('canvas');c.width=c.height=64;
      const ctx=c.getContext('2d')!;const grad=ctx.createLinearGradient(0,0,0,64);
      grad.addColorStop(0,i===3?'#a38d71':'#c9e0ed');grad.addColorStop(.55,'#e6e8df');grad.addColorStop(1,'#aa967a');
      ctx.fillStyle=grad;ctx.fillRect(0,0,64,64);return c;
    });
    const environment=new THREE.CubeTexture(environmentFaces);environment.colorSpace=THREE.SRGBColorSpace;environment.needsUpdate=true;
    textures.add(environment);scene.environment=environment;scene.environmentIntensity=.65;
    glass.envMapIntensity=1.35;
    scene.add(new THREE.HemisphereLight('#e8f2fa', '#70665b', .95));
    const sun = new THREE.DirectionalLight('#ffe5bc', 3.0);
    sun.position.set(-9,10,6); sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    Object.assign(sun.shadow.camera, { left:-12,right:12,top:12,bottom:-12,near:.1,far:45 });
    sun.shadow.bias = -.0003; sun.shadow.normalBias = .009; sun.shadow.radius = 3;
    scene.add(sun);
    const fill = new THREE.DirectionalLight('#cce5f5', .7); fill.position.set(18, 9, -20); scene.add(fill);
    const ivory=material('#e6e3d7',.94);
    const sage=material('#678675',.88);
    const teal=material('#3b6263',.65);
    const orange=material('#bc884b',.72);
    const leaf=material('#486848',.96);
    const lightMat=material('#efdfb8',.38);
    lightMat.emissive.set('#ffe1a0');lightMat.emissiveIntensity=.22;
    const greenLed=material('#71af8a',.48);greenLed.emissive.set('#54ad80');
    const floorMat=material('#e9e4da',.28,.08,texture('stone'));
    floorMat.bumpScale=.009;
    box(scene,material('#bcb8ae',1),0,-.3,0,80,.35,80);
    // Completed property shown as a cutaway, so everyday management is visible.
    box(scene,concrete,0,-.03,0,11,.4,8.4);
    box(scene,floorMat,0,.19,0,10.7,.07,8.1);
    for(let x=-5;x<5.4;x+=1.2)box(scene,ivory,x,.231,0,.008,.003,8);
    for(let z=-3.7;z<4;z+=1.2)box(scene,ivory,0,.231,z,10.6,.003,.008);
    box(scene,ivory,0,1.98,-4,10.8,3.5,.16);
    // Tall glazing and mullions replace the solid side wall. Sunlight enters the lobby here.
    const windowMat=new THREE.MeshPhysicalMaterial({color:'#c5d9d8',roughness:.12,metalness:.1,transparent:true,opacity:.2,depthWrite:false});materials.add(windowMat);
    for(let i=0;i<4;i++){
      const z=-3.2+i*1.27;
      const pane=box(scene,windowMat,-5.36,1.88,z,.045,3.25,1.19);pane.castShadow=false;
      box(scene,dark,-5.36,1.88,z-.61,.07,3.36,.055);
    }
    box(scene,dark,-5.36,3.55,-1.3,.1,.09,5.25);
    box(scene,chrome,-5.36,.45,-1.3,.08,.06,5.25);
    box(scene,ivory,5.38,.69,-.8,.16,.95,6.4);
    box(scene,teal,0,.4,-3.87,10.6,.28,.04);
    // Skirting, ceiling reveal and warm concealed lighting at architectural scale.
    box(scene,timber,0,.32,-3.88,10.6,.14,.05);
    box(scene,ivory,0,3.65,-3.62,10.65,.12,.62);
    const strip=material('#fff1d6',.3);strip.emissive.set('#ffdba2');strip.emissiveIntensity=2;
    box(scene,strip,0,3.59,-3.35,10.4,.025,.028);
    for(const x of [-4.7,-1.5,1.6,4.7]){
      const fixture=mesh(geometry(new THREE.CylinderGeometry(.075,.075,.015,20)),chrome,scene,x,3.575,-3.5);fixture.castShadow=false;
    }
    // A short upper facade establishes this as an occupied residential property.
    box(scene,ivory,0,3.86,-3.58,10.9,.23,1.0);
    for(const x of [-4,-1.35,1.35,4]){
      box(scene,sage,x,4.36,-3.97,2.48,.79,.15);
      box(scene,dark,x,4.42,-3.85,1.79,.54,.07);
      box(scene,glass,x,4.42,-3.8,1.65,.43,.03);
      box(scene,ivory,x,4.42,-3.76,.035,.47,.04);
    }
    box(scene,ivory,0,4.84,-3.85,10.9,.16,.4);
    // Interior doors for periodic inspections, with real pivoting hinges.
    const door=group(scene,-3.76,.25,-3.83);
    box(door,timber,.59,1.18,0,1.18,2.36,.1);
    box(door,chrome,1.03,1.1,.09,.15,.045,.045);
    for(const x of [-3.83,-2.49])box(scene,white,x,1.51,-3.77,.09,2.58,.13);
    box(scene,white,-3.16,2.79,-3.77,1.44,.09,.13);
    // Documents and signs are drawn locally: no image downloads or placeholder URLs.
    const canvasLabel=(text:string,sub='',background='#f4f3ec',ink='#284c49')=>{
      const c=document.createElement('canvas');c.width=768;c.height=256;const ctx=c.getContext('2d')!;
      ctx.fillStyle=background;ctx.fillRect(0,0,768,256);ctx.fillStyle=ink;
      ctx.font='bold 48px Arial';ctx.textAlign='center';ctx.fillText(text,384,114);
      if(sub){ctx.font='27px Arial';ctx.fillText(sub,384,171);}
      const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;textures.add(map);return map;
    };
    const label=(parent:THREE.Object3D,text:string,sub:string,x:number,y:number,z:number,w:number,h:number)=>{
      const m=new THREE.MeshBasicMaterial({map:canvasLabel(text,sub)});materials.add(m);
      return mesh(geometry(new THREE.PlaneGeometry(w,h)),m,parent,x,y,z);
    };
    label(door,'A 101','RESIDENCE',.6,1.9,.059,.55,.18);
    label(scene,'PROPERTY SERVICES','RESIDENTS / MAINTENANCE / ACCOUNTS',-.65,3.32,-3.89,4.2,.58);
    // Reception/service desk with work surface, front slats and an accessible counter.
    const desk=group(scene,-2.22,.24,1.0);
    box(desk,teal,0,.4,0,2.8,.8,1.1);
    rounded(desk,timber,0,.83,0,3.0,.12,1.24);
    for(let x=-1.3;x<1.4;x+=.14)box(desk,ivory,x,.4,.56,.045,.69,.035);
    label(desk,'RESIDENT SERVICES','HOW CAN WE HELP?',0,.4,.585,1.85,.35);
    // Workstation screen rotates with the desk-side support workflow.
    const monitor=group(desk,-.52,.91,-.08);monitor.rotation.y=Math.PI;
    box(monitor,dark,0,.08,0,.46,.035,.27);
    rod(monitor,steel,v(0,.08,0),v(0,.31,0),.045);
    box(monitor,dark,0,.53,0,.98,.63,.055);
    const laptopMap=canvasLabel('SERVICE DESK','REQUESTS / ACCOUNTS','#234d50','#e4eee7');
    const laptopMat=new THREE.MeshBasicMaterial({map:laptopMap});materials.add(laptopMat);
    mesh(geometry(new THREE.PlaneGeometry(.91,.55)),laptopMat,monitor,0,.53,.032);
    box(desk,dark,-.48,.91,-.44,.77,.025,.25);
    for(let i=0;i<3;i++)box(desk,white,.76,.92+i*.014,.05,.47,.012,.62);
    rod(desk,chrome,v(.94,.97,.05),v(.94,.97,.4),.014);
    const register=group(desk,.77,.94,.05);
    label(register,'OWNER UPDATE','SERVICE & ACCOUNTS',0,.003,0,.43,.25).rotation.x=-Math.PI/2;
    // Tenant waiting area and a modest planted entrance.
    const seat=group(scene,-4.2,.24,2.72);
    const upholstery=material('#687e79',.93,0,texture('fabric'));upholstery.bumpScale=.008;
    rounded(seat,upholstery,0,.32,0,1.44,.41,.64);
    for(const x of [-.35,.35]){
      rounded(seat,upholstery,x,.55,.02,.66,.13,.58);
      rounded(seat,upholstery,x,.79,-.27,.66,.48,.18);
    }
    for(const x of [-.65,.65])box(seat,timber,x,.49,0,.13,.64,.74);
    const plant=(x:number,z:number,size=1)=>{
      const root=group(scene,x,.24,z);root.scale.setScalar(size);
      const pot=mesh(geometry(new THREE.CylinderGeometry(.3,.22,.45,16)),ivory,root,0,.225,0);pot.receiveShadow=true;
      for(let i=0;i<13;i++){
        const a=i*2.4,xx=Math.cos(a)*.21,zz=Math.sin(a)*.21,top=.74+i%4*.14;
        rod(root,timber,v(0,.4,0),v(xx,top,zz),.007);
        for(let j=0;j<4;j++){
          const h=top-.2+j*.07,side=j%2?1:-1;
          const l=sphere(root,leaf,xx+Math.cos(a)*side*.08,h,zz+Math.sin(a)*side*.08,.048,.13,.012);
          l.rotation.set(.35,a,side*.95);
        }
      }
    };
    plant(-4.7,-2.25,.9);plant(4.73,3.23,1);plant(-.5,3.65,.65);
    // Maintenance bay: equipment casing, moving fan, pipe valve and tool case.
    box(scene,concrete,3.05,1.86,-3.67,2.05,1.63,.53);
    box(scene,steel,3.05,1.86,-3.38,1.83,1.43,.045);
    const fan=group(scene,3.05,1.92,-3.32);
    const bezel=mesh(geometry(new THREE.TorusGeometry(.49,.035,8,36)),dark,fan);bezel.castShadow=false;
    const rotor=group(fan);
    for(let i=0;i<5;i++){
      const blade=box(rotor,steel,Math.cos(i*1.256)*.24,Math.sin(i*1.256)*.24,0,.16,.39,.028);blade.rotation.z=i*1.256-.5;
    }
    sphere(fan,dark,0,0,.035,.085,.085,.03);
    for(let x=-.45;x<.46;x+=.1)box(fan,dark,x,0,.07,.014,.82,.018);
    label(scene,'MAINTENANCE','EQUIPMENT & REPAIRS',3.05,2.98,-3.87,2.18,.4);
    rod(scene,steel,v(4.41,.45,-3.55),v(4.41,2.65,-3.55),.058);
    rod(scene,steel,v(4.41,1.22,-3.55),v(3.97,1.22,-3.55),.045);
    const valve=mesh(geometry(new THREE.TorusGeometry(.16,.024,6,20)),orange,scene,4.41,1.24,-3.45);
    rod(scene,orange,v(4.25,1.24,-3.45),v(4.57,1.24,-3.45),.019);
    rod(scene,orange,v(4.41,1.08,-3.45),v(4.41,1.4,-3.45),.019);
    const equipmentLed=box(scene,greenLed,3.68,1.27,-3.33,.13,.065,.04);
    equipmentLed.castShadow=false;
    box(scene,orange,3.95,.43,-1.72,.72,.36,.4);
    const toolHandle=mesh(geometry(new THREE.TorusGeometry(.12,.02,6,16,Math.PI)),dark,scene,3.95,.69,-1.72);toolHandle.rotation.z=0;
    // A shared operations display changes only when the service stage changes.
    const dashboardCanvas=document.createElement('canvas');dashboardCanvas.width=1024;dashboardCanvas.height=640;
    const dashboardContext=dashboardCanvas.getContext('2d')!;
    const dashboardTexture=new THREE.CanvasTexture(dashboardCanvas);dashboardTexture.colorSpace=THREE.SRGBColorSpace;textures.add(dashboardTexture);
    const dashMaterial=new THREE.MeshBasicMaterial({map:dashboardTexture});materials.add(dashMaterial);
    box(scene,dark,.35,2.07,-3.76,2.74,1.77,.09);
    mesh(geometry(new THREE.PlaneGeometry(2.58,1.61)),dashMaterial,scene,.35,2.07,-3.704);
    const paintDashboard=(active:number)=>{
      const c=dashboardContext;c.fillStyle='#183d42';c.fillRect(0,0,1024,640);
      c.fillStyle='#dae9df';c.font='bold 43px Arial';c.fillText('PROPERTY OVERVIEW',45,69);
      c.fillStyle='#a1c0b9';c.font='22px Arial';c.fillText('ILLUSTRATIVE MANAGEMENT WORKFLOW',45,106);
      const rows=['RESIDENT REQUESTS','INSPECTION CHECKLIST','MAINTENANCE TASKS','RENT & EXPENSES','OWNER SUMMARY'];
      for(let i=0;i<5;i++){
        c.fillStyle=i===active?'#476761':'#254b4d';c.fillRect(39,143+i*83,945,63);
        c.fillStyle=i===active?'#e6c991':'#bdd1c7';c.font='bold 27px Arial';c.fillText(rows[i],64,185+i*83);
        c.fillStyle=i===active?'#d1ad6b':'#6a9c87';c.fillRect(790,164+i*83,i===active?144: 90,18);
      }
      dashboardTexture.needsUpdate=true;
    };
    paintDashboard(0);
    // Anatomical proportions, articulated elbows/knees, tailored clothing and detailed hands.
    const fabricMap=texture('fabric');
    const skinTones=['#a97555','#ba8765','#9b674c','#bc9071','#8b6048'];
    let personIndex=0;
    const human=(x:number,z:number,colour:string,angle=0)=>{
      const root=group(scene,x,.24,z);root.rotation.y=angle;
      const skin=material(skinTones[personIndex++%skinTones.length],.66);
      const cloth=material(colour,.91,0,fabricMap);cloth.bumpScale=.005;
      const pants=material('#343b42',.96,0,fabricMap);pants.bumpScale=.004;
      const hair=material('#292520',.94),shoe=material('#262622',.4);
      const legs:THREE.Group[]=[],knees:THREE.Group[]=[];
      for(const xx of [-.09,.09]){
        const leg=group(root,xx,.88,0);legs.push(leg);
        const thigh=mesh(geometry(new THREE.CylinderGeometry(.076,.061,.38,20)),pants,leg,0,-.19,0);thigh.scale.z=.89;
        const knee=group(leg,0,-.38,0);knees.push(knee);
        const shin=mesh(geometry(new THREE.CylinderGeometry(.063,.045,.39,20)),pants,knee,0,-.195,0);shin.scale.z=.89;
        rounded(knee,shoe,0,-.44,.044,.125,.10,.245);
        rounded(knee,dark,0,-.475,.04,.128,.023,.25);
      }
      rounded(root,pants,0,.88,0,.31,.18,.2);
      // Elliptical lathe makes shoulders and waist; avoids the toy-like spherical torso.
      const outline=[new THREE.Vector2(.147,0),new THREE.Vector2(.145,.08),new THREE.Vector2(.16,.23),new THREE.Vector2(.19,.37),new THREE.Vector2(.162,.43),new THREE.Vector2(.076,.47)];
      const torso=mesh(geometry(new THREE.LatheGeometry(outline,32)),cloth,root,0,.91,0);torso.scale.z=.6;
      rod(root,skin,v(0,1.36,0),v(0,1.45,0),.05);
      for(const xx of [-.057,.057]){const collar=rounded(root,white,xx,1.355,.065,.06,.10,.015);collar.rotation.z=xx>0?-.36:.36;}
      for(let y=1.04;y<1.34;y+=.07)sphere(root,dark,0,y,.098,.006,.006,.004);
      const head=group(root,0,1.57,0);
      sphere(head,skin,0,0,0,.103,.142,.102);
      sphere(head,skin,0,-.065,.035,.075,.075,.069);
      const hairCap=mesh(geometry(new THREE.SphereGeometry(1,24,16,0,Math.PI*2,0,1.5)),hair,head,0,.018,-.013);hairCap.scale.set(.107,.14,.102);
      for(const xx of [-.105,.105])sphere(head,skin,xx,-.005,0,.02,.034,.018);
      sphere(head,skin,0,-.013,.098,.017,.029,.024);
      for(const xx of [-.038,.038]){
        sphere(head,white,xx,.025,.092,.019,.009,.009);
        sphere(head,dark,xx,.025,.1,.007,.007,.003);
        rod(head,hair,v(xx-.018,.044,.091),v(xx+.014,.047,.093),.004);
      }
      rod(head,material('#785046',.85),v(-.025,-.057,.098),v(.025,-.057,.098),.003);
      const makeArm=(side:number)=>{
        const arm=group(root,side*.179,1.31,0);
        sphere(arm,cloth,0,-.015,0,.072,.086,.071);
        rod(arm,cloth,v(0,-.025,0),v(side*.045,-.215,.018),.054);
        const elbow=group(arm,side*.045,-.215,.018);
        sphere(elbow,cloth,0,0,0,.051);
        rod(elbow,cloth,v(0,0,0),v(0,-.13,.17),.042);
        rod(elbow,skin,v(0,-.13,.17),v(0,-.175,.24),.029);
        const hand=group(elbow,0,-.18,.258);
        sphere(hand,skin,0,0,0,.034,.022,.052);
        for(let i=0;i<4;i++)rod(hand,skin,v((i-1.5)*.013,0,.025),v((i-1.5)*.013,-.018,.069-Math.abs(i-1.5)*.007),.008);
        rod(hand,skin,v(-side*.029,0,0),v(-side*.045,-.018,.028),.012);
        return {arm,elbow,hand};
      };
      const right=makeArm(1),left=makeArm(-1);
      left.arm.rotation.x=.52;
      return {root,head,arm:right.arm,elbow:right.elbow,hand:right.hand,left,legs,knees,torso};
    };
    const manager=human(-2.08,.06,'#426164');
    box(manager.root,white,0,1.19,.108,.025,.28,.008);
    box(manager.root,lightMat,-.09,1.24,.105,.055,.036,.008);
    const keyring=group(manager.hand,0,-.02,.08);
    const ring=mesh(geometry(new THREE.TorusGeometry(.045,.006,6,20)),chrome,keyring);ring.rotation.x=.25;
    box(keyring,chrome,0,-.076,0,.012,.1,.012);box(keyring,chrome,.015,-.111,0,.036,.012,.012);
    const tenant=human(-2.04,2.2,'#b39a7c',Math.PI);
    box(tenant.root,timber,-.34,.82,.13,.13,.41,.31);
    const inspector=human(-2.94,-2.82,'#526a7a',Math.PI);
    const clipboard=group(inspector.hand,0,0,.065);clipboard.rotation.x=-.45;
    box(clipboard,timber,0,0,0,.31,.4,.018);
    label(clipboard,'CHECKLIST','PROPERTY INSPECTION',0,0,.013,.28,.25);
    const technician=human(3.05,-2.86,'#577989',Math.PI);
    box(technician.root,white,-.09,1.24,.103,.07,.034,.012);
    const wrench=group(technician.hand,0,0,.075);
    rod(wrench,chrome,v(0,0,0),v(0,.23,0),.016);
    const jaw=mesh(geometry(new THREE.TorusGeometry(.039,.011,6,16,Math.PI*1.5)),chrome,wrench,0,.27,0);jaw.rotation.z=.8;
    const cleaner=human(2.75,2.06,'#6d8570',-.52);
    const mop=group(cleaner.hand,0,0,.03);
    rod(mop,steel,v(0,0,0),v(0,-.91,.51),.019);
    rounded(mop,white,0,-.91,.51,.38,.055,.21);
    const bucket=group(scene,3.82,.43,2.21);
    mesh(geometry(new THREE.CylinderGeometry(.22,.18,.38,16)),teal,bucket);
    const bucketRing=mesh(geometry(new THREE.TorusGeometry(.19,.012,6,20,Math.PI)),steel,bucket,0,.2,0);bucketRing.rotation.y=Math.PI/2;
    const caution=group(scene,2.23,.24,3.19);
    const cautionPanel=box(caution,orange,0,.36,0,.41,.69,.045);cautionPanel.rotation.x=-.22;
    rod(caution,dark,v(-.17,0,.24),v(-.17,.65,-.07),.02);
    rod(caution,dark,v(.17,0,.24),v(.17,.65,-.07),.02);
    label(caution,'CARE','IN PROGRESS',0,.36,.1,.3,.3).rotation.x=-.22;
    // Contact shadows ground shoes, furniture and equipment instead of floating on the floor.
    const contactCanvas=document.createElement('canvas');contactCanvas.width=contactCanvas.height=128;
    const contactContext=contactCanvas.getContext('2d')!;
    const falloff=contactContext.createRadialGradient(64,64,8,64,64,62);
    falloff.addColorStop(0,'rgba(35,30,24,.38)');falloff.addColorStop(.4,'rgba(35,30,24,.17)');falloff.addColorStop(1,'rgba(35,30,24,0)');
    contactContext.fillStyle=falloff;contactContext.fillRect(0,0,128,128);
    const contactMap=new THREE.CanvasTexture(contactCanvas);textures.add(contactMap);
    const contactMaterial=new THREE.MeshBasicMaterial({map:contactMap,transparent:true,depthWrite:false});materials.add(contactMaterial);
    for(const [x,z,w,d] of [[-2.08,.06,.65,.6],[-2.04,2.2,.65,.6],[-2.94,-2.82,.65,.6],[3.05,-2.86,.7,.6],[2.75,2.06,.7,.65],[-2.22,1,3.7,1.6],[-4.2,2.72,1.8,1]]){
      const shadow=mesh(geometry(new THREE.PlaneGeometry(w,d)),contactMaterial,scene,x,.237,z);shadow.rotation.x=-Math.PI/2;shadow.castShadow=false;
    }
    // Keys cabinet, detailed keyboard, pen cup and a resident's mail delivery.
    const mail=group(scene,-4.58,1.65,-3.84);
    for(let row=0;row<3;row++)for(let col=0;col<2;col++){
      rounded(mail,steel,col*.26,row*.22,0,.24,.20,.12);
      box(mail,dark,col*.26,row*.22+.03,.066,.16,.008,.009);
      sphere(mail,chrome,col*.26+.07,row*.22-.04,.072,.013,.013,.007);
    }
    for(let row=0;row<4;row++)for(let col=0;col<11;col++)box(desk,steel,-.79+col*.06,.928,-.525+row*.045,.046,.006,.03);
    const cup=mesh(geometry(new THREE.CylinderGeometry(.058,.052,.14,20)),ivory,desk,1.15,1.0,-.35);
    for(let i=0;i<4;i++)rod(cup,i%2?timber:dark,v((i-1.5)*.014,0,0),v((i-1.5)*.022,.15,0),.006);
    rounded(scene,timber,-.3,.46,2.9,.6,.45,.47);
    box(scene,ivory,-.3,.69,2.9,.11,.006,.47);
    label(scene,'RESIDENT MAIL','DELIVERY',-.3,.49,3.139,.37,.17);
    // Screw heads, vents and joints make the equipment read as a serviceable machine.
    for(const x of [2.2,3.9])for(const y of [1.25,2.48])sphere(scene,chrome,x,y,-3.342,.021,.021,.009);
    for(let i=0;i<10;i++)box(scene,dark,2.49+i*.12,1.36,-3.338,.06,.008,.008);
    for(const y of [.68,1.73,2.35]){
      const clamp=mesh(geometry(new THREE.TorusGeometry(.071,.014,8,20)),chrome,scene,4.41,y,-3.55);clamp.rotation.x=Math.PI/2;
    }
    // Merge static geometry within each independently animated assembly.
    const assemblies:THREE.Object3D[]=[];scene.traverse(o=>assemblies.push(o));
    for(const parent of assemblies){
      const batches=new Map<THREE.Material,THREE.Mesh[]>();
      for(const child of parent.children){
        if(!(child instanceof THREE.Mesh)||child instanceof THREE.InstancedMesh||child===valve||Array.isArray(child.material))continue;
        const batch=batches.get(child.material)||[];batch.push(child);batches.set(child.material,batch);
      }
      for(const [mat,items]of batches){
        if(items.length<2)continue;
        const parts=items.map(item=>{item.updateMatrix();const g=item.geometry.index?item.geometry.toNonIndexed():item.geometry.clone();return g.applyMatrix4(item.matrix);});
        const merged=mergeGeometries(parts);parts.forEach(g=>g.dispose());if(!merged)continue;
        const combined=mesh(geometry(merged),mat,parent);combined.castShadow=items.some(o=>o.castShadow);items.forEach(o=>parent.remove(o));
      }
    }
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    let reducedMotion=media.matches,visible=true,elapsed=0,frame=0,last=0,lastPhase=-1,disposed=false,staticDrawn=false;
    setReduced(reducedMotion);
    const onMedia=()=>{reducedMotion=media.matches;setReduced(reducedMotion);last=0;staticDrawn=false;};
    media.addEventListener('change',onMedia);
    const resize=()=>{
      const w=mount.clientWidth,h=mount.clientHeight;if(!w||!h)return;
      renderer.setSize(w,h,false);const aspect=w/h;
      camera.aspect=aspect;camera.updateProjectionMatrix();composer.setSize(w,h);staticDrawn=false;
    };
    const sizeObserver=new ResizeObserver(resize);sizeObserver.observe(mount);resize();
    const visibilityObserver=new IntersectionObserver(([e])=>{visible=e.isIntersecting;last=0;staticDrawn=false;});visibilityObserver.observe(mount);
    let pointerX=0,pointerY=0;
    const move=(event:PointerEvent)=>{if(event.pointerType!=='mouse')return;const r=mount.getBoundingClientRect();pointerX=(event.clientX-r.left)/r.width-.5;pointerY=(event.clientY-r.top)/r.height-.5;};
    const leave=()=>{pointerX=pointerY=0;};mount.addEventListener('pointermove',move);mount.addEventListener('pointerleave',leave);
    let contextLost=false;
    const lost=(event:Event)=>{event.preventDefault();contextLost=true;setStatus('unavailable');};renderer.domElement.addEventListener('webglcontextlost',lost);
    const animate=(now:number)=>{
      if(disposed)return;frame=requestAnimationFrame(animate);
      if(contextLost||!visible||document.hidden){last=0;staticDrawn=false;return;}
      const stationary=pausedRef.current||reducedMotion;
      if(stationary&&staticDrawn){last=0;return;}
      if(last&&!stationary&&now-last<32)return;
      if(last&&!stationary)elapsed+=Math.min((now-last)/1000,.1)*speedRef.current;last=now;staticDrawn=stationary;
      const t=reducedMotion?19:elapsed%40;
      const phaseIndex=Math.min(4,Math.floor(t/8));
      if(phaseIndex!==lastPhase){
        lastPhase=phaseIndex;setPhase(phaseIndex);paintDashboard(phaseIndex);
        // Change only the workstation texture on a phase boundary, not every frame.
        const old=laptopMat.map;
        const map=canvasLabel(phaseIndex===3?'RENT & ACCOUNTS':phaseIndex===4?'OWNER SUMMARY':'SERVICE DESK',phaseIndex===3?'COLLECTIONS / EXPENSES':phaseIndex===4?'INSPECTIONS / UPDATES':'RESIDENT REQUESTS','#234d50','#e4eee7');
        laptopMat.map=map;laptopMat.needsUpdate=true;
        if(old){old.dispose();textures.delete(old);}
      }
      if(progress.current)progress.current.style.transform=`scaleX(${t/40})`;
      if(curtain.current)curtain.current.style.opacity='0';
      // All secondary movement uses a periodic clock: no jump at the 40-second wrap.
      const cycle=t*Math.PI/20;
      const smooth=(a:number,b:number,x:number)=>{const n=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return n*n*(3-2*n);};
      const task=(start:number)=>smooth(start,start+1,t)*(1-smooth(start+6.8,start+8,t));
      const support=task(0),inspection=task(8),repair=task(16),accounts=task(24),report=task(32);
      manager.head.rotation.x=.045+Math.sin(cycle*12)*.018+(accounts+report)*.13;
      manager.arm.rotation.x=-.20*support+(accounts+report)*.16;
      manager.elbow.rotation.x=-.12*support+Math.sin(cycle*80)*.025*accounts;
      manager.left.arm.rotation.x=.52+(accounts+report)*.14;
      manager.torso.scale.y=1+Math.sin(cycle*8)*.003;
      keyring.rotation.z=Math.sin(cycle*22)*.07;
      tenant.head.rotation.x=.04+Math.sin(cycle*10)*.023;
      tenant.arm.rotation.x=-support*.12;
      tenant.elbow.rotation.x=-support*.08;
      door.rotation.y=-inspection*.52;
      inspector.head.rotation.x=.16+Math.sin(cycle*9)*.02;
      inspector.left.arm.rotation.x=.52-inspection*.8;
      inspector.left.elbow.rotation.x=-inspection*.25;
      inspector.elbow.rotation.x=-.16;
      // The technician raises the tool into the casing and turns it in small measured strokes.
      technician.arm.rotation.x=-repair*.88;
      technician.elbow.rotation.x=-repair*.45;
      technician.head.rotation.x=-repair*.13;
      wrench.rotation.z=repair*Math.sin(cycle*72)*.21;
      valve.rotation.z=0;
      // Fan remains stopped during repair, then ramps up after service.
      const fanTime=t<16?t:t<22?16:t-6;
      rotor.rotation.z=fanTime*(Math.PI*2*15/34);
      greenLed.color.set(t>=16&&t<22?'#c79b54':'#71af8a');
      greenLed.emissive.copy(greenLed.color);greenLed.emissiveIntensity=.38;
      // Feet stay planted while the cleaner rocks through a restrained mopping stroke.
      cleaner.root.position.x=2.75;
      cleaner.root.rotation.z=Math.sin(cycle*20)*.016;
      cleaner.arm.rotation.x=Math.sin(cycle*20)*.085;
      cleaner.elbow.rotation.x=-Math.sin(cycle*20)*.065;
      cleaner.head.rotation.x=.15;
      cleaner.knees[0].rotation.x=.035+Math.sin(cycle*20)*.02;
      cleaner.left.arm.rotation.x=.44;
      // Ease into the actual work area, then return to the same establishing view at each boundary.
      // Deterministic camera paths also make pause/resume and loop wrapping continuous.
      const shotMix=reducedMotion?0:.75*Math.pow(Math.sin((t%8)/8*Math.PI),2);
      const shots=[
        {eye:v(3.7,3.8,7.3),look:v(-2.05,1.18,.9)},
        {eye:v(3.2,3.8,5.1),look:v(-2.85,1.6,-2.9)},
        {eye:v(7.2,3.6,3.6),look:v(3.1,1.65,-2.9)},
        {eye:v(2.9,3.8,6.1),look:v(-2.1,1.25,.75)},
        {eye:v(4.7,4.2,5.3),look:v(-.3,1.8,-2.3)},
      ];
      const shot=shots[phaseIndex];
      camera.position.copy(v(11,7.8,13).lerp(shot.eye,shotMix));
      if(!stationary){camera.position.x+=pointerX*.18;camera.position.y-=pointerY*.12;}
      camera.lookAt(target.clone().lerp(shot.look,shotMix));
      composer.render();
    };
    frame=requestAnimationFrame(animate);setStatus('ready');
    return()=>{
      disposed=true;cancelAnimationFrame(frame);sizeObserver.disconnect();visibilityObserver.disconnect();
      media.removeEventListener('change',onMedia);mount.removeEventListener('pointermove',move);mount.removeEventListener('pointerleave',leave);
      renderer.domElement.removeEventListener('webglcontextlost',lost);
      geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
      renderPass.dispose();occlusion.dispose();outputPass.dispose();composer.dispose();
      renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();
    };
  },[]);

  const togglePause=()=>{pausedRef.current=!pausedRef.current;setPaused(pausedRef.current);};
  return <figure className={`overflow-hidden rounded-[20px] border border-[#d8ded8] bg-[#f5f3ec] text-[#19362f] shadow-xl ${className}`} style={{margin:0,fontFamily:'inherit'}}>
    <div className="relative overflow-hidden bg-[#d6e3e5]" style={{aspectRatio:'4 / 3'}}>
      <div ref={host} className="absolute inset-0" role="img" aria-label="3D property-management cutaway: a manager helps a resident, an inspector checks a home, a technician services equipment, a cleaner maintains shared space and a dashboard shows illustrative accounts and owner reports."/>
      <div ref={curtain} className="pointer-events-none absolute inset-0 bg-[#d6e3e5]" style={{opacity:1}} aria-hidden="true"/>
      <div className="pointer-events-none absolute left-4 top-4 rounded bg-[#f7f6efdc] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#34483e] sm:left-6 sm:top-5 sm:text-[10px]">Property<span className="hidden sm:inline"> management</span></div>
      {status!=='ready'&&<div className="absolute inset-0 flex items-center justify-center p-8 text-center text-sm leading-relaxed text-[#344b42]">
        {status==='loading'?'Preparing the property-management scene…':'This 3D preview needs WebGL. Enable hardware acceleration or try another browser.'}
      </div>}
      {status==='ready'&&!reduced&&<button type="button" onClick={togglePause} aria-label={paused?'Play property-management animation':'Pause property-management animation'} aria-pressed={paused} className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/90 text-[#264339] shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a87732] sm:right-5 sm:top-4">
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">{paused?<path d="M4 2L12 7L4 12Z" fill="currentColor"/>:<path d="M4 2V12M10 2V12" stroke="currentColor" strokeWidth="2"/>}</svg>
      </button>}
    </div>
    <div className="border-t border-[#d6dcd2] bg-[#f7f6f0] px-5 py-5 sm:px-7 sm:py-6">
      <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8a622f]">Step {String(phase+1).padStart(2,'0')} / 05</div>
      <h3 id={`${uid}-step`} className="m-0 mb-2 text-[22px] font-bold leading-[1.16] tracking-[-0.035em] sm:text-[30px]">{STAGES[phase][0]}</h3>
      <p className="m-0 text-[13px] leading-relaxed text-[#596b60] sm:text-sm">{STAGES[phase][1]}</p>
      <div className="mt-5 h-1 overflow-hidden rounded-full bg-[#dde1d6]" aria-hidden="true"><div ref={progress} className="h-full origin-left bg-[#ac7d3d]" style={{transform:'scaleX(0)'}}/></div>
    </div>
    <figcaption className="border-t border-[#e0e3db] px-5 py-5 sm:px-7">
      {href?<a href={href} className="text-[17px] font-semibold leading-snug text-inherit no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{label} ↗</a>:<div className="text-[17px] font-semibold leading-snug">{label}</div>}
      <div className="mt-1 text-xs leading-relaxed text-[#627366]">{subLabel}</div>
    </figcaption>
  </figure>;
}
