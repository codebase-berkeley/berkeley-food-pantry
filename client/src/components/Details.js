import './Details.css';
function Details(props) {
    let dietary_data = ['Vegan', 'Gluten Free', 'Include Dog Food'];
    let item_data = ['Salmon', 'Broccoli', 'Milk', 'Canned Beans', 'Steak', 'Apple', 'Oranges'];
    const ColoredLine = ({ color }) => (
        <hr
          style={{
            color: color ,
            opacity: 1,
            height: 2
          }}
        />
      );


    return (
        <div className = "container">
            <div className='time'> {props.time}
            <div className='name'> {props.name} </div>
            <h1 className='details_header'>Contact</h1>
            <h1 className='details_header'>{props.email}</h1>
            <h1 className='details_header'>{props.phoneNumber}</h1>

            <div><ColoredLine color="#ACB9AC" /></div>



            <h1 className='details_header'> Dietary Preferences</h1>
            <div id="myList">{props.dietary_data.map((data, index) => (<li key={index}>{data}</li>))}</div>
            
            <div><ColoredLine color="#ACB9AC" /></div>

            <h1>Item Preferences</h1>
            <div id="myList">{props.item_data.map((data, index) => (<li key={index}>{data}</li>))}</div>
            <div><ColoredLine color="#ACB9AC" /></div>
            <h1 className = 'details_header'>Notes</h1>
            <h2>None, thank you!</h2>
        
            

            
            </div>
        </div>
        


    )
    
}
export default Details;