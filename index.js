var boom=document.getElementById('boom');
var clap=document.getElementById('clap');
var hithat=document.getElementById('hithat');
var kick=document.getElementById('kick');
var openhat=document.getElementById('openhat');
var ride=document.getElementById('ride');
var snare=document.getElementById('snare');
var tink=document.getElementById('tink');
var tom=document.getElementById('tom');

var icons=document.getElementsByClassName('icon');

document.addEventListener('keydown',function(e){
    var keyEvent1=e.key;
    switch(keyEvent1)
    {
       case 'a':
           boom.play();
           icons[0].style.boxShadow="0px 0px 10px yellow";
           icons[0].style.transform="scale(1.1)";
           break;
       case 's':
           clap.play();
           icons[1].style.boxShadow="0px 0px 10px yellow";
           icons[1].style.transform="scale(1.1)";
           break;
       case 'd':
           hithat.play();
           icons[2].style.boxShadow="0px 0px 10px yellow";
           icons[2].style.transform="scale(1.1)";
           break;
       case 'f':
           kick.play();
           icons[3].style.boxShadow="0px 0px 10px yellow";
           icons[3].style.transform="scale(1.1)";
           break;
       case 'g':
           openhat.play();
           icons[4].style.boxShadow="0px 0px 10px yellow";
           icons[4].style.transform="scale(1.1)";
           break;
       case 'h':
           ride.play();
           icons[5].style.boxShadow="0px 0px 10px yellow";
           icons[5].style.transform="scale(1.1)";
           break;
       case 'j':
           snare.play();
           icons[6].style.boxShadow="0px 0px 10px yellow";
           icons[6].style.transform="scale(1.1)";
           break;
       case 'k':
           tink.play();
           icons[7].style.boxShadow="0px 0px 10px yellow";
           icons[7].style.transform="scale(1.1)";
           break;
       case 'l':
           tom.play();
           icons[8].style.boxShadow="0px 0px 10px yellow";
           icons[8].style.transform="scale(1.1)";
           break;
       default:
           alert("Enter Correct Key!!!");
           break;   
    }
}) 
    document.addEventListener('keyup',function(e){
        var keyEvent=e.key;
        switch(keyEvent)
        {
            case 'a':
                boom.play();
                icons[0].style.boxShadow="0px 5px 20px gray";
                icons[0].style.transform="scale(1)";
                break;
            case 's':
                clap.play();
                icons[1].style.boxShadow="0px 5px 20px gray";
                icons[1].style.transform="scale(1)";
                break;
            case 'd':
                hithat.play();
                icons[2].style.boxShadow="0px 5px 20px gray";
                icons[2].style.transform="scale(1)";
                break;
            case 'f':
                kick.play();
                icons[3].style.boxShadow="0px 5px 20px gray";
                icons[3].style.transform="scale(1)";
                break;
            case 'g':
                openhat.play();
                icons[4].style.boxShadow="0px 5px 20px gray";
                icons[4].style.transform="scale(1)";
                break;
            case 'h':
                ride.play();
                icons[5].style.boxShadow="0px 5px 20px gray";
                icons[5].style.transform="scale(1)";
                break;
            case 'j':
                snare.play();
                icons[6].style.boxShadow="0px 5px 20px gray";
                icons[6].style.transform="scale(1)";
                break;
            case 'k':
                tink.play();
                icons[7].style.boxShadow="0px 5px 20px gray";
                icons[7].style.transform="scale(1)";
                break;
            case 'l':
                tom.play();
                icons[8].style.boxShadow="0px 5px 20px gray";
                icons[8].style.transform="scale(1)";
                break;
            default:
                alert("Enter Correct Key!!!");
                break;   
        }
    })


    icons[0].addEventListener('click',function(){
        boom.play();
        icons[0].style.boxShadow = "0px 0px 10px yellow";
        icons[0].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[0].style.boxShadow = "0px 5px 20px gray";
        icons[0].style.transform = "scale(1)";
        },100);
    })

    icons[1].addEventListener('click',function(){
        clap.play();
        icons[1].style.boxShadow = "0px 0px 10px yellow";
        icons[1].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[1].style.boxShadow = "0px 5px 20px gray";
        icons[1].style.transform = "scale(1)";
        },100);
    })

    icons[2].addEventListener('click',function(){
        hithat.play();
        icons[2].style.boxShadow = "0px 0px 10px yellow";
        icons[2].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[2].style.boxShadow = "0px 5px 20px gray";
        icons[2].style.transform = "scale(1)";
        },100);
    })

    icons[3].addEventListener('click',function(){
        kick.play();
        icons[3].style.boxShadow = "0px 0px 10px yellow";
        icons[3].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[3].style.boxShadow = "0px 5px 20px gray";
        icons[3].style.transform = "scale(1)";
        },100);
    })

    icons[4].addEventListener('click',function(){
        openhat.play();
        icons[4].style.boxShadow = "0px 0px 10px yellow";
        icons[4].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[4].style.boxShadow = "0px 5px 20px gray";
        icons[4].style.transform = "scale(1)";
        },100);
    })

    icons[5].addEventListener('click',function(){
        ride.play();
        icons[5].style.boxShadow = "0px 0px 10px yellow";
        icons[5].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[5].style.boxShadow = "0px 5px 20px gray";
        icons[5].style.transform = "scale(1)";
        },100);
    })

    icons[6].addEventListener('click',function(){
        snare.play();
        icons[6].style.boxShadow = "0px 0px 10px yellow";
        icons[6].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[6].style.boxShadow = "0px 5px 20px gray";
        icons[6].style.transform = "scale(1)";
        },100);
    })

    icons[7].addEventListener('click',function(){
        tink.play();
        icons[7].style.boxShadow = "0px 0px 10px yellow";
        icons[7].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[7].style.boxShadow = "0px 5px 20px gray";
        icons[7].style.transform = "scale(1)";
        },100);
    })

    icons[8].addEventListener('click',function(){
        tom.play();
        icons[8].style.boxShadow = "0px 0px 10px yellow";
        icons[8].style.transform = "scale(1.1)";
        setTimeout(function(){
        icons[8].style.boxShadow = "0px 5px 20px gray";
        icons[8].style.transform = "scale(1)";
        },100);
    })
