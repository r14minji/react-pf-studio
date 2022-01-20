class Mask{
  constructor(opt){
    const defaults = {
      frame: ".wrap",
      btns: ".btnMenu li",
      panels: "figure .wrap .vid",
      loading : "aside",
      class_name : {on: "on", lower: "lower", mask: "mask"},
    }

    const result = {...defaults, ...opt}; 

    this.init(result);
    this.bindingEvent();
  }

  init(result){
    this.wrap = document.querySelector(result.frame);
    this.btns = this.wrap.querySelectorAll(result.btns);
    this.panels = this.wrap.querySelectorAll(result.panels);
    this.loading = document.querySelector(result.loading);
    this.vids = this.wrap.querySelectorAll("video");
    this.isOn = null;
    this.enableClick = true;
    this.class_names = result.class_name;
    this.count = 0;

    this.vids.forEach((vid, index)=>{

      vid.addEventListener("loadeddata",()=>{
        this.count++;

        if(this.count == this.vids.length){

          setTimeout(()=>{
            for(let panel of this.panels) panel.classList.remove(this.class_names.mask);  
            
            this.loading.style.display = "none";  
            this.panels[0].classList.add(this.class_names.on);                 
          },1000);
        }
      })
    })
	}


  bindingEvent(){
    this.btns.forEach((btn,index)=>{       
      btn.addEventListener("click", e=>{
        this.isOn = e.currentTarget.classList.contains(this.class_names.on);
        if(this.isOn) return;

        if(this.enableClick){
          this.enableClick = false;
          this.activation(index);  
        }
      })
    })
  }

  activation(index){   
    this.vids[index].load();
    this.vids[index].play();

    for(let i=0; i<this.btns.length; i++){
      this.btns[i].classList.remove(this.class_names.on);
      if(this.panels[i].classList.contains(this.class_names.on)){
        this.panels[i].classList.add(this.class_names.mask);
      }
    }

    this.btns[index].classList.add(this.class_names.on);
    this.panels[index].classList.add(this.class_names.lower);

    setTimeout(()=>{
      for(let i=0; i<this.panels.length; i++){
        if(this.panels[i].classList.contains(this.class_names.on)){
          this.panels[i].classList.remove(this.class_names.on);
          this.panels[i].classList.remove(this.class_names.mask);
        }
      }

      this.panels[index].classList.remove(this.class_names.lower);
      this.panels[index].classList.add(this.class_names.on);

      setTimeout(()=>this.enableClick = true ,1000) //텍스트 모션이 끝나는 순간
    },1100)//마스크 모션이 끝나는 순간
  }
}

export default Mask ;