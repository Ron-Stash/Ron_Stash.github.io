// main.js
async function submitForm(){
  const resp = await fetch('/api/submit', {
    method: 'POST',
    body: JSON.stringify({
      message: form.message.value  
    })
  });

  showResult(await resp.text());
}

form.addEventListener('submit', submitForm);