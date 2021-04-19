    document.addEventListener("click", (evt) => {
      const modalElement = document.getElementById("modal");
      if(modalElement.style.display == 'none') { return; }

      let targetElement = evt.target; // clicked element

      do {
        if (targetElement == modalElement) {
          // This is a click inside. Do nothing, just return.
          return;
        }
        else if(targetElement.className == 'project-card') {
          
          return; 
        }
        
        console.log(targetElement.className);
        // Go up the DOM
        targetElement = targetElement.parentNode;
      } while (targetElement);

      // This is a click outside.
      document.getElementById("modal").style.display = 'none';
      document.getElementById("overlay").style.display = 'none';
    }); 