# Html provides the static content , which can only be changed after reload .

# ⚙️ JavaScript = Dynamic Content
      JavaScript lets you create, change, or remove HTML elements and content on the fly, making the page interactive and responsive to user actions or data.

      while using javascript we can create dynamic behaviour , which can be rendered without reload .

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

