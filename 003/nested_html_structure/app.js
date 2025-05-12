{ 
    /*
             Creating this type of structure .
     <div id="parent">
    <div id="child">
        <h1 id+heading>
        Namaste Duniya !!!!!
        </h1>
    </div>
</div> 

    */ 
}


const parent = React.createElement(
    "div" ,
    {id : "parent"} ,
    React.createElement(
        "div" ,
        {id : "child"} ,
        React.createElement(
            "h1" ,
            {id : "heading"} ,
            "Namaste Duniya !!!!!"
        )
    )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);



{ 
    /*
             Creating this type of structure .
     <div id="parent2">
    <div id="child2">
        <h1 id=heading2>Namaste Duniya !!!!!</h1>
        <h2 id="heading21">Namaste duniya2 !! </h2>
    </div>
</div> 

    */ 
}

const parent2 = React.createElement(
    "div" ,
    {id : "parent2"} ,
    React.createElement(
        "div" ,
        {id : "child2"} ,
        React.createElement(
            "h1" ,
            {id : "heading2"} ,
            [
                React.createElement("h1" , {id:"heading2"} ,"Namaste Duniya") ,
                React.createElement("h2" , {id:"heading21"} ,"Namaste Duniya2") ,
            ]
        )
    )
)

const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(parent2);
