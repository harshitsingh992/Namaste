const heading=React.createElement("h1",{id:"heading"},
[React.createElement("h1",{id:"heading"},
[React.createElement("h1",{id:"child1"},"i am child1"),
React.createElement("h1",{id:"heading"},"i am child12")]),
React.createElement("h1",{id:"heading"},
[React.createElement("h1",{id:"child1"},"i am child1"),
React.createElement("h1",{id:"heading"},"i am child12")]
)]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);