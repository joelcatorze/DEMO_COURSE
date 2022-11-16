function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mtTLaBmUjA":
        Script1();
        break;
      case "60YYBsmlt6w":
        Script2();
        break;
  }
}

function Script1()
{
  var LoginPass;
var player = GetPlayer();
var password; 
var pass1="SECRET_PASSWORD"; 
password=prompt('Enter Password',' '); 
if (password==pass1){ 
alert('Correct Password! Click OK to Enter!'); 
LoginPass=1;
player.SetVar("Pass_Correct",LoginPass);
//window.location="https://joelcatorze.github.io/TEST_DEMO_REPO/story.html";
}
else{ 
LoginPass=0;
player.SetVar("Pass_Correct",LoginPass);
alert('Incorrect Password!'); 
} 





}

function Script2()
{
  var LoginPass;
var player = GetPlayer();
var password; 
var pass1="SECRET_PASSWORD"; 
password=prompt('Enter Password',' '); 
if (password==pass1){ 
alert('Correct Password! Click OK to Enter!'); 
LoginPass=1;
player.SetVar("Pass_Correct",LoginPass);
//window.location="https://joelcatorze.github.io/TEST_DEMO_REPO/story.html";
}
else{ 
LoginPass=0;
player.SetVar("Pass_Correct",LoginPass);
alert('Incorrect Password!'); 
} 





}

