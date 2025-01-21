const input = document.querySelector('#favchap');

const button = document.querySelector('button');

const list = document.querySelector('ul');


//EVENT//

button.addEventListener('click', function() {

    if (input.value.trim() !=='') {

        //LI //
        const li = document.createElement('li');
        li.textContent = input.value;
        //END OF LI//

        //DELETE//
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        //END OF DELETE//

        // Append delete button to li
        li.append(deleteButton);
        // Append li to list
        list.append(li);


        //DELETE functionability//
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        

        //Input and focus
        input.value= '';
        input.focus();
  
    }





});


