function loadInbox(){
  const list = JSON.parse(localStorage.getItem('ecoserve_inbox') || '[]');
  const container = document.getElementById('msgContainer');
  if(!list.length) container.innerHTML = "<p>No messages</p>";
  list.reverse().forEach(m=>{
    const div=document.createElement('div');
    div.className='message';
    div.innerHTML=`<strong>${m.subject}</strong><br><small>${m.date}</small>`;
    container.appendChild(div);
  });
}

function sendMessage(e){
  e.preventDefault();
  const subject=document.getElementById('subject').value;
  const body=document.getElementById('body').value;
  const inbox=JSON.parse(localStorage.getItem('ecoserve_inbox')||'[]');
  inbox.push({subject,body,date:new Date().toLocaleString()});
  localStorage.setItem('ecoserve_inbox',JSON.stringify(inbox));
  alert("Message sent!");
  location.href="inbox.html";
}
