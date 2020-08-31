'use strict'

function DomElement( selector, height, width, bg, fontSize ){
  this.selector = selector; 
  this.height = height;
  this.width = width ;
  this.bg = bg;
  this.fontSize = fontSize;
    
};

DomElement.prototype.createEl = function() {

  if ( this.selector.charAt(0) === '.' ) {

  let elementDiv;

    elementDiv = document.createElement('div');
    elementDiv.className = `${this.selector.slice(1)}`;
    elementDiv.style.cssText = `
    position: absolute;
    height:${this.height}px;
    width:${this.width}px;
    background:${this.bg};
    font-size:${this.fontSize}px;`;
    elementDiv.innerHTML = 'JAVA SCRIPT';

    return elementDiv;
    
  };

  if ( this.selector.charAt(0) === '#' ) {

    let elementP;

    elementP = document.createElement('p');
    elementP.id = `#${this.selector.slice(1)}`;
    elementP.style.cssText = `
    position: absolute;
    height:${this.height}px;
    width:${this.width}px;
    background:${this.bg};
    font-size:${this.fontSize}px;`;
    elementP.innerHTML = 'JAVA SCRIPT';
    
    return elementP;
  };

};

let newEl = new DomElement('.block', '100', '100', 'yellow', '18' );

document.body.append(newEl.createEl());

console.log(newEl.createEl());

document.addEventListener('keydown', (e) => {
  
   let element = newEl.createEl();

  (e.code == 'ArrowUp') ? element.style.marginTop = '-10px': 
  (e.code == 'ArrowDown') ? element.style.marginBottom = '-10px': 
  (e.code == 'ArrowLeft') ? element.style.marginLeft = '-10px': 
  element.style.marginRight = '-10px';
  
})
