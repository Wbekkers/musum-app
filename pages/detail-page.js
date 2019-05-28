const submitComment = () => {
    const inputField = document.getElementById('name');
    const name = inputField.value;
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    const commentSection = document.getElementById('comments')
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
  
    comment.classList.add('comment')
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
  
    comment.appendChild(h3)
    comment.appendChild(p)
  
    commentSection.append(comment)
  
    inputField.value = null;
    textArea.value = null;
  }