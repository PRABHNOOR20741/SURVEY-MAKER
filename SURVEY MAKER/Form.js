class Form
{
  constructor()
  {

  } 

  display()
  {
    var title = createElement('h2');
    title.html("HELP US STOP GLOBAL WARMING");
    title.position(430,0);
    
    var input1 = createInput("NAME");
    var input2 = createInput("EMAIL");
    var input3 = createInput("DONATION");

    var button = createButton('SUBMIT HERE');

    var thanks = createElement('h3');
    input1.position(430,160);
    input2.position(430,180);
    input3.position(430,200);
    button.position(430,220);

    button.mousePressed(function(){
        input1.hide();
        input2.hide();
        input3.hide();
        button.hide();

        var name = input1.value();
        var emailID = input2.value();
        var donation = input3.value();

        EmailCount = EmailCount + 1;
    
        email.updateN(name);
        email.updateD(donation);
        email.updateE(emailID);
        email.updateCount(EmailCount);
   
        thanks.html("THANK YOU "+name);
        thanks.position(530,160);
    })
  }
}

