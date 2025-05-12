# Html provides the static content , which can only be changed after reload .

# ⚙️ JavaScript = Dynamic Content
      JavaScript lets you create, change, or remove HTML elements and content on the fly, making the page interactive and responsive to user actions or data.

      while using javascript we can create dynamic behaviour , which can be rendered without reload .


#    <!-- If javascript is loaded at starting of body .
     <script> 
        console.log(document.body)  // null
        then it will log (null) because javascript is loaded before the body content loaded .
    </script> 
     hence javascript loaded at the last of the body content .
    -->


#   🔤 textContent
    Sets or gets plain text only.(not any css apply .)
    Any HTML tags are treated as text, not parsed.
    ✅ Safe from XSS (Cross-site Scripting) attacks
    ✅ Faster
    ❌ Cannot insert actual HTML tags


#   🧱 innerHTML
    Sets or gets HTML content as a string.
    Tags are parsed and rendered as real HTML.  

    ✅ Can insert HTML
    ❌ Risk of XSS if content isn't sanitized
    ❌ Slightly slower than textContent  


# The element which we create using react.createElement() is basically an object .
   The react element is basically an object .
   props = children + attribute .

# The render() function is basicaly converting a React object into its corresponding html configuration .  