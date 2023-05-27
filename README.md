## Hey, I'm **[gonza](https://www.gonza.uno/)**
It's good to see that you have been interested in understanding this repository.<br><br>



I want to thank Lee Robinson ([leerob.io](https://leerob.io/)) 
who was my guide in the development adventure of this project, 
during the **[Building a Linktree Clone! (Next.js, React, Tailwind CSS)](https://www.youtube.com/watch?v=eFzNekhVhmM)** tutorial 👌<br><br><br>



📌 **LIVE DEMO [UNDER CONSTRUCTION]: _https://links.gonza.uno/_**

[![Blog Demo Preview](https://i.postimg.cc/3JCZXcrT/under-construction.png)](https://i.postimg.cc/3JCZXcrT/under-construction.png)

<br><br><br>





#### Links folder
Create project folder, open it in VSCode and open terminal

#### Project Setup:
```bash
npx create-next-app --tailwind . 
```
(By using the period (.) after the command, you tell Next.js to create the project in the current folder instead of creating a new folder with the name of the project)

✔ Would you like to use TypeScript with this project? … <u>No</u> / Yes<br>
✔ Would you like to use ESLint with this project? … <u>No</u> / Yes<br>
✔ Would you like to use src/ directory with this project? … <u>No</u> / Yes<br>
✔ Use App Router (recommended)? … <u>No</u> / Yes<br>
✔ Would you like to customize the default import alias? … <u>No</u> / Yes

<br>
#### Dependencies that were used, along with the command to install them:

* **React Three Fiber**
_Official website: https://github.com/pmndrs/react-three-fiber#readme_ (React renderer for threejs)

* **React Three Drei**
_Official website: https://github.com/pmndrs/drei#readme_ (a collection of fully functional, ready-made abstractions for @react-three/fiber)

* **Maath**
_Official website: https://snyk.io/advisor/npm-package/maath#package-footer_ (a collection of useful math helpers, random generators, bits and bobs. The library is mostly meant to be used with three.js)
```bash
npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath
```