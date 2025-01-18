(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[144],{8811:(e,a,t)=>{Promise.resolve().then(t.bind(t,5739))},5739:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var s=t(5155),r=t(6472),i=t(2115),l=t(5781);l.t1.register(l.PP,l.kc,l.FN,l.No,l.hE,l.m_,l.s$);class n{calculate(e,a){var t,s,r;let i=e-a,l=this.kP*i;this.integral+=i*this.deltaTime;let n=this.kI*this.integral,h=(i-this.preError)/this.deltaTime,c=this.kD*h;return this.preError=i,t=l+n+c,s=this.minChange,r=this.maxChange,t<=s?s:t>=r?r:t}constructor(e,a,t,s=0,r=0,i=0){this.deltaTime=e,this.maxChange=a,this.minChange=t,this.kP=s,this.kI=r,this.kD=i,this.preError=0,this.integral=0,this.prevDelta=0}}function h(){let[e,a]=(0,i.useState)(0),[t,h]=(0,i.useState)(0),[c,p]=(0,i.useState)(0),[d,o]=(0,i.useState)(5),[u,m]=(0,i.useState)({pidData:[0],accelerationData:[0],jerkData:[0],labels:["0"],preError:0,integral:0,i:0});return(0,i.useEffect)(()=>{let a=new n(.25,25,-25,e,t,c),s=l.t1.getChart("pidChart"),r=setInterval(function(){a.kP=e,a.kI=t,a.kD=c,a.preError=u.preError,a.integral=u.integral,++u.i,u.labels.push(u.i.toString());let r=u.pidData[u.pidData.length-1],i=a.calculate(d,r),l=r+i;u.pidData.push(l);let n=u.accelerationData[u.accelerationData.length-1];u.accelerationData.push(i),u.jerkData.push(i-n),u.labels.length>50&&(u.labels.shift(),u.pidData.shift(),u.accelerationData.shift(),u.jerkData.shift()),u.preError=a.preError,u.integral=a.integral,m(u),null==s||s.update("resize")},250);return()=>clearInterval(r)},[e,t,c,d]),(0,s.jsx)("div",{className:"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]",children:(0,s.jsxs)("main",{className:"flex flex-col gap-8 row-start-2 items-center sm:items-start w-6/12",children:[(0,s.jsxs)("form",{className:"items-center",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"kPInput",className:"",children:"Kp"}),(0,s.jsx)("input",{type:"range",id:"kPInput",className:"w-full",step:"0.01",min:"0",max:"1",value:e,onChange:e=>a(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:e})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"kIInput",children:"Ki"}),(0,s.jsx)("input",{type:"range",id:"kIInput",className:"w-full",step:"0.001",min:"0",max:"0.5",value:t,onChange:e=>h(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:t})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"kDInput",children:"Kd"}),(0,s.jsx)("input",{type:"range",id:"kDInput",className:"w-full",step:"0.001",min:"-0.5",max:"0.5",value:c,onChange:e=>p(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:c})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"setPointInput",children:"Set Point"}),(0,s.jsx)("input",{type:"range",id:"setPointInput",className:"w-full",value:d,min:"-100",max:"100",onChange:e=>o(Number.parseFloat(e.target.value))}),(0,s.jsx)("span",{children:d})]})]}),(0,s.jsx)(r.N1,{options:{scales:{pidScale:{suggestedMax:100,suggestedMin:-100},derivativeScale:{suggestedMax:15,suggestedMin:-15}}},data:{labels:u.labels,datasets:[{label:"PID",data:u.pidData,tension:.5,borderColor:"#000000",yAxisID:"pidScale"},{label:"Acceleration",data:u.accelerationData,tension:.5,borderColor:"#AF0000",yAxisID:"derivativeScale"},{label:"Jerk",data:u.jerkData,tension:.5,borderColor:"#AFAF00",yAxisID:"derivativeScale"}]},id:"pidChart"})]})})}}},e=>{var a=a=>e(e.s=a);e.O(0,[647,759,441,517,358],()=>a(8811)),_N_E=e.O()}]);