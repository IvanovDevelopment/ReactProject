import * as THREE from "three";
import OrbitControls from "three-orbitcontrols"

const sceneSizes = {
  width: 1000,
  height: 700,
};

class Three {
  constructor({canvasContainer}) {
    this.initScene();
    this.initCamera();
    this.initRenderer(canvasContainer);
    this.initOrbitControls();
    this.renderRect();
    this.render();
    this.animate();
  
  }

  initRenderer(canvasContainer) {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(sceneSizes.width, sceneSizes.height);

    canvasContainer.appendChild(this.renderer.domElement);
  }

  

  initScene() {
    this.scene = new THREE.Scene();

    //this.scene.background = new THREE.Color("grey");
  }

  initCamera() {
    this.camera = new THREE.OrthographicCamera(
      sceneSizes.width / -2,
      sceneSizes.width / 2,
      sceneSizes.height / 2,
      sceneSizes.height / -2,
      200,
      -200
    );
    this.camera.position.set(1,1,4);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  initOrbitControls(){
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    
  }

  renderRect() {
    /*const boxGeometry = new THREE.BoxGeometry(70, 70, 70);

    const material = new THREE.MeshBasicMaterial({ color: "red" });

    const box = new THREE.Mesh(boxGeometry, material);

    box.position.x = 0;
    box.position.y = 50;
    box.position.z = -0;

    box.rotateX(Math.PI / 6);
    box.rotateY(Math.PI / 6);

    

    this.scene.add(box);*/


    
    
//Создание сетки
    const size = 200;
    const divisions = 10;
    
    const gridHelperZY = new THREE.GridHelper(size, divisions, {colorGrid: 808080});
    gridHelperZY.position.x = 0;
    gridHelperZY.position.y = 100;
    gridHelperZY.position.z = 100;
    gridHelperZY.rotation.z = Math.PI/2;
    this.scene.add(gridHelperZY);
    
    const gridHelperZX = new THREE.GridHelper(size, divisions);
    gridHelperZX.setColors( new THREE.Color(0x006600), new THREE.Color(0x006600) )
    gridHelperZX.position.x = 100;
    gridHelperZX.position.y = 0;
    gridHelperZX.position.z = 100;
    this.scene.add(gridHelperZX);

    const gridHelperXY = new THREE.GridHelper(size, divisions);
    gridHelperXY.position.x = 100;
    gridHelperXY.position.y = 100;
    gridHelperXY.position.z = 0;
    gridHelperXY.rotation.x = Math.PI/2;
    this.scene.add(gridHelperXY);

    const axesHelper = new THREE.AxesHelper( 200 );
    this.scene.add( axesHelper );
  }

  

  animate(){
    requestAnimationFrame(this.animate.bind(this));

    this.controls.update(); // Чтобы эффекты работали

    this.render();
  }
  
}



export default Three;