class Emails
{
  constructor()
  {

  }
  getCount()
 {
   var EmailCountRef = database.ref('EmailCount'); 
   EmailCountRef.on("value",function(data){
       EmailCount = data.val();
   }); 
 }

 updateCount(count)
 {
   database.ref('/').update({
       EmailCount : count
   });  
 }

 updateN(name)
 {
   var NameIndex = "EMAIL ID"+ EmailCount ;
   database.ref(NameIndex).update({
       Name : name
   })
 }

 updateD(donation)
 {
   var DonationIndex = "EMAIL ID"+ EmailCount ;
   database.ref(DonationIndex).update({
       Donation : donation
   })
 }

 
 updateE(emailID)
 {
   var EmailIndex = "EMAIL ID"+ EmailCount ;
   database.ref(EmailIndex).update({
       Email : emailID
   })
 }

}