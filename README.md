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


# The order of script files are always in sequence .


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



# in creating React Element 
  1. first argument is element name
  2. second arguement is props 
  3. third argument is children


# The element which we create using react.createElement() is basically an object .
   The react element is basically an object .
   props = children + attribute .

# The render() function is basicaly converting a React object into its corresponding html configuration .
# ReactElement (object) => HTML(Browser Understands)

# To create Siblings 
  we create third argument as an array .

# If we follow React way to create dynamic javascript then for long nested structure , the code become very messy hence to solve this
  problem we have jsx .  


# If we render anything in element
then all the code inside that element will be replaced by the rendered object .
# Remember that it will Replaced .
If we do fast reloading of the web-page then we can see that the code is replaced .

# we can called react as a library because it can be applied on a very - small portion of web-page  also , can be added in header , footer or in a particular div hence not a framework .
hence react is very flexible .