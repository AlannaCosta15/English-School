var tela= 1;
var largura= 200;
var altura= 50;
var xMenu= 150;
var yMenu1= 85;
var yMenu2= 145;
var yMenu3= 205;
var u= 15;
var larguralk=100;
var alturalk=40;
var yMenu4=260;
var xlike=70;
var xlike1=190;
var xlike2=310;
var xlike3=430;
var ylike=300;
var xlado=450
var xVolta=450
 xb = 100; 
  yb1 = 150; 
  yb2 = 250; 
  yVoltar = 340; 
  xVoltar = 65; 
  larguraB = 200; 
  larguraVoltar = 100;
  alturaVoltar = 40;
  alturaB = 60; 
  suavizaB = 12; 

let img;
function preload() {
  img =loadImage('imagemnova.jpeg');
  im=loadImage('irru.jpeg');
  op=loadImage("uip.jpeg");
  mm=loadImage("16.jpeg");
  nn=loadImage("acertou.jpeg");
  ot=loadImage("errou.jpeg");
  per=loadImage("per.jpeg")
  fi=loadImage("fi.jpeg")
  conti=loadImage('conti.jpeg')
  pecon=loadImage("pecon.jpeg")
  idade=loadImage("idade.jpeg")
  perid=loadImage("perid.jpeg")
  col=loadImage("col.jpeg")
  mom=loadImage('mom.jpeg')
  piu=loadImage('piu.jpeg')
  food=loadImage("food.jpeg")
  an=loadImage('an.jpeg')
  peran=loadImage('peran.jpeg')
  ann=loadImage("ann.jpeg")
  haveh=loadImage('haveh.jpeg')
  pehave=loadImage("pehave.jpeg")
  hass=loadImage('hass.jpeg')
  final=loadImage("final.jpeg")

}

function setup() {
  createCanvas(600,400);
}

function draw() {
  textStyle(ITALIC);
  // menu do jogo
  if(tela==1){
    background(180,190,255,180);
    image(img, 300,200,600,400);
    imageMode(CENTER);
    // menu com 3 opções 
    //iniciar 
    textAlign(CENTER);
    textSize(20);
    
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu1 && mouseY< yMenu1 + altura){
    fill(220,190,170,250);
    rect(xMenu, yMenu1,largura,altura,u);
      if (mouseIsPressed) {
        tela=2
      }
    
    }
   
    fill(250);
    text("Iniciar", 250,120);
    
    //informações
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu2 && mouseY< yMenu2 + altura){
    fill(220,190,170,250);
    rect(xMenu, yMenu2,largura,altura,u);
      if (mouseIsPressed) {
        tela=3
      }
    }
    
    fill(250);
    text("Informações", 250,180);
    
    
    // créditos
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu3 && mouseY< yMenu3 + altura){
    fill(220,190,170,250);
    rect(xMenu, yMenu3,largura,altura,u);
      if (mouseIsPressed) {
        tela=4
    }
    }
    fill(250);
    text("Créditos", 250,240);
    
    
  }
  // jogo code
     else if( tela==2)
    {background(180,190,255,180);
     image(mm,300,200,600,400);
     imageMode(CENTER);
     
  
if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
        
  }
    }
   
    textSize(18);
    fill(240);
    text("Voltar",xVolta+50,yVoltar+25)

     if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=5
    
  }
    }
  textSize(18);
   fill(240);
   text("Likes", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=7
       }
     }
     textSize(18);
   fill(240);
   text("Like", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=7
        }
     }
     textSize(18);
   fill(240);
   text("Likez", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=7
        }
     }
      textSize(18);
   fill(240);
   text("Laikes", xlike3+50, ylike+0)
 }
   
  
    // informação code
   if( tela==3){background(180,190,255,180);
                image(op,300,200,600,400);
                imageMode(CENTER);
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    
    }
   
    textSize(18);
    fill(240);
    text("Voltar",xVoltar+50,yVoltar+25);

   
  
                    }
      //créditos code
   else if(tela==4){
   background(250,170);
     image(im, 300,200,600,400);
    imageMode(CENTER);
      if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Voltar",xVoltar+50,yVoltar+25)

   }
   //telaAcertou5
  if(tela==5){
    background(140,290,280,290)
    image(nn,300,200,600,400);
    imageMode(CENTER);
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela=6; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
  //telaErrou
if(tela==7){
  background(140,270,300,170)
  image(ot,300,200,600,400)
  imageMode(CENTER)
  
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =2; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVoltar+50,yVoltar+25)
}
  if(tela==8){
    background(140);
    image(fi,300,200,600,400);
    imageMode(CENTER);
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=9
    
  }
    }
  textSize(18);
   fill(240);
   text("em", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=9
       }
     }
     textSize(18);
   fill(240);
   text("are", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=10
        }
     }
     textSize(18);
   fill(240);
   text("am", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=9
        }
     }
      textSize(18);
   fill(240);
   text("is", xlike3+50, ylike+0)
 }
  //tela6
  if(tela==6){
    background(140)
    image(per,300,200,600,400)
    imageMode(CENTER)
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xlado && mouseX < xlado+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xlado,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =8; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xlado+50,yVoltar+25)
  }
    
    
//tela9para voltar
  if(tela==9){
    background(190,230,240,190)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =8; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVoltar+50,yVoltar+25)
  }
  //tela10
  if(tela==10){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =11; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
  //tela11fase3
  if(tela==11){
    background(140)
    image(conti,300,200,600,400)
    imageMode(CENTER)
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =12; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVolta+50,yVoltar+25)
  }
  //tela12perguntas3
  if(tela==12){
    background(140)
    image(pecon,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=14
    
  }
    }
  textSize(18);
   fill(240);
   text("Goes", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=14
       }
     }
     textSize(18);
   fill(240);
   text("Goyng", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=14
        }
     }
     textSize(18);
   fill(240);
   text("Go", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=13
        }
     }
      textSize(18);
   fill(240);
   text("Going", xlike3+50, ylike+0)
 }
  if(tela==13){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =15; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
  if(tela==14){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =12; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVolta+50,yVoltar+25)
  }
//tela15fase4
  if(tela==15){
    background(140)
    image(idade,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =16; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVolta+50,yVoltar+25)
  }
  //pwegunta
  if(tela==16){
    background(140)
    image(perid,300,200,600,400)
    imageMode(CENTER)
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=18
    
  }
    }
  textSize(18);
   fill(240);
   text("Are", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=17
       }
     }
     textSize(18);
   fill(240);
   text("Is", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=18
        }
     }
     textSize(18);
   fill(240);
   text("Ys", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=18
        }
     }
      textSize(18);
   fill(240);
   text("Am", xlike3+50, ylike+0)
  }
  if(tela==17){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
     if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =19; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVolta+50,yVoltar+25)
    
  }
  if(tela==18){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =16; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVolta+50,yVoltar+25)
    
  }
//tela19fase5
  if(tela==19){
    background(140)
    image(col,300,200,600,400)
    imageMode(CENTER)
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =20; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
  if(tela==20){
    background(140)
    image(mom,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=22
    
  }
    }
  textSize(18);
   fill(240);
   text("P,B,R", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=21
       }
     }
     textSize(18);
   fill(240);
   text("P,R,G", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=22
        }
     }
     textSize(18);
   fill(240);
   text("W,B,K", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=22
        }
     }
      textSize(18);
   fill(240);
   text("G,H,J", xlike3+50, ylike+0)
  }
  if(tela==21){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =23; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVolta+50,yVoltar+25)
  }
  if(tela==22){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =20; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVolta+50,yVoltar+25)
  }
  if(tela==23){
    background(140)
    image(piu,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =24; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)

  }
  //tela24
  if(tela==24){
    background(140)
    image(food,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=26
    
  }
    }
  textSize(18);
   fill(240);
   text("Bred", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=26
       }
     }
     textSize(18);
   fill(240);
   text("Rice", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=26
        }
     }
     textSize(18);
   fill(240);
   text("Milk", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=25
        }
     }
      textSize(18);
   fill(240);
   text("Bread", xlike3+50, ylike+0)
    
  }
  if(tela==25){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =27; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
    if(tela==26){
      background(140)
      image(ot,300,200,600,400)
      imageMode(CENTER)
      
      if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =24; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVoltar+50,yVoltar+25)
    }
  if(tela==27){
    background(140)
    image(an,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =28; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVolta+50,yVoltar+25)

  }
  if(tela==28){
    background(140)
    image(peran,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=30
    
  }
    }
  textSize(18);
   fill(240);
   text("a", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=29
       }
     }
     textSize(18);
   fill(240);
   text("An", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=29
        }
     }
     textSize(18);
   fill(240);
   text("one", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=29
        }
     }
      textSize(18);
   fill(240);
   text("en", xlike3+50, ylike+0)
    
  }
  if(tela==29){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =28; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVolta+50,yVoltar+25)  
  }
  if(tela==30){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =31; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVolta+50,yVoltar+25)
  }
  if(tela==31){
    background(140)
    image(ann,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=33
    
  }
    }
  textSize(18);
   fill(240);
   text("a", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=33
       }
     }
     textSize(18);
   fill(240);
   text("en", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=33
        }
     }
     textSize(18);
   fill(240);
   text("one", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=32
        }
     }
      textSize(18);
   fill(240);
   text("an", xlike3+50, ylike+0)
    
  }
  if(tela==32){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =34; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVolta+50,yVoltar+25)  
  }
if(tela==33){
  background(140)
  image(ot,300,200,600,400)
  imageMode(CENTER)
  
  if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =31; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVolta+50,yVoltar+25)
}
  if(tela==34){
    background(140)
    image(haveh,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =35; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
  if(tela==35){
    background(140)
    image(pehave,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=36
    
  }
    }
  textSize(18);
   fill(240);
   text("Have", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=37
       }
     }
     textSize(18);
   fill(240);
   text("Has", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=37
        }
     }
     textSize(18);
   fill(240);
   text("Rave", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=37
        }
     }
      textSize(18);
   fill(240);
   text("Revi", xlike3+50, ylike+0)
    
  }
  if(tela==36){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =38; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
    if(tela==37){
      background(140)
      image(ot,300,200,600,400)
      imageMode(CENTER)
      
      if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =35; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVoltar+50,yVoltar+25)
      
    }
  if(tela==38){
    background(140)
    image(hass,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=40
    
  }
    }
  textSize(18);
   fill(240);
   text("Have", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=39
       }
     }
     textSize(18);
   fill(240);
   text("Has", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=40
        }
     }
     textSize(18);
   fill(240);
   text("Ras", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,190,170,250);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=40
        }
     }
      textSize(18);
   fill(240);
   text("Revi", xlike3+50, ylike+0)
    
    
  }
  if(tela==39){
    background(140)
    image(nn,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =41; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Next",xVoltar+50,yVoltar+25)
  }
  if(tela==40){
    background(140)
    image(ot,300,200,600,400)
    imageMode(CENTER)
    
     if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =38; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Back",xVoltar+50,yVoltar+25)
  }
  if(tela==41){
    background(140)
    image(final,300,200,600,400)
    imageMode(CENTER)
    
    if( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      
      fill(220,190,170,250);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    }
  
    textSize(18);
    fill(240);
    text("Início",xVolta+50,yVoltar+25)
  }
}