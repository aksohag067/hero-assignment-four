function sendNotification(email) {
   let atIndex = email.indexOf('@');
   let dotIndex = email.lastIndexOf('.');

   if (atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1) {
       
       let userName = email.substring(0, atIndex);
       let domainName = email.substring(atIndex + 1);
       
       return `${userName} sent an email from ${domainName}`;
   } else {
       return 'Invalid Email';
   }
}

// const sentNoti = sendNotification('nadim.naem5outlook.com');
// console.log(sentNoti);