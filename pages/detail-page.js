 // form validations
function doesNotPassAllValidations(name, msg) {
    if (!name && !msg) {
        alert('You forgot to fill in your name or message!')
        return true;
      }

    if (!name) {
        alert('You forgot to fill in your name!')
        return true;
      }

    if (!msg) {
        alert('You forgot to fill in your message!')
        return true;
      }
  
    if(msg.length > 280) {
      alert('Your comment is too long')
      return true
     }
  
    return false
  }

  // capitalize first letter name
function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

   // add event handler
function submitComment() {


    // gather data
  const inputField = document.getElementById('name')
  const name = capitalizeFirstLetter(inputField.value)
  const textArea = document.getElementById('msg')
  const msg = textArea.value

  console.log(name)
    
    if(doesNotPassAllValidations(name, msg)){
        return null
    }

    // create the elements you need
  const comment = document.createElement('section')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  // adjust the elements we created
  h3.innerHTML = `${name} said:`
  p.innerHTML = msg
  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)

  // display the elements on the page
  const commentSection = document.getElementById('comments')
  commentSection.appendChild(comment)

  // reset form values
  inputField.value = null
  textArea.value = null
}


