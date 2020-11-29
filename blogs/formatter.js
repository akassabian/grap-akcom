function handleChange(e) {



const { name, type, value } = e.target;



//if type === number then set VAL to the Floating Integer of VALUE, else set VAL to VALUE



const val = type === "number" ? parseFloat(value) : value;



setState({



...state,



[name]: val });


}