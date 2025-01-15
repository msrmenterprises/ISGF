import React, { useRef } from 'react';
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';

class TestingPdf extends React.Component {
render () {
return (
// demo component
<div>
<div style={{color: "blue" ,fontsize:"25px"}}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
etusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
scelerisque viverra mauris in aliquam sem. Ut diam quam nulla porttitor
massa id. Velit euismod in pellentesque massa placerat duis ultricies.
Sed tempus urna et pharetra pharetra massa massa. Maecenas ultricies mi
eget mauris pharetra et. Nam libero justo laoreet sit. Ullamcorper eget
nulla facilisi etiam dignissim diam.
</div><br/>
<div className='table-custom'>
<table style={{color: "green" ,fontsize:"25px"}} >
<thead>
<th>column 1</th>
<th>column 2</th>
<th>column 3</th>
</thead>
<tbody>
<tr>
<td>data 1</td>
<td>data 2</td>
<td>data 3</td>
</tr>
<tr>
<td>data A</td>
<td>data B</td>
<td>data C</td>
</tr>
</tbody>
</table>
<br/>
</div>
<br/>
<div>
<img
src="https://i.pinimg.com/originals/e4/43/6e/e4436e9474484cafc97c168c4e0fd90e.jpg"width="400px" height="250px"/>
</div>
<br/>
</div>
);
}
}

const Example = () => {
const componentRef = useRef();
const handlePrint = useReactToPrint({
content: () => componentRef.current,
});

return (
<div>
<TestingPdf ref={componentRef} />
<button onClick={handlePrint}>Print this out!</button>
</div>
);
};

render (<Example/>, document.querySelector("#root")
);

export default TestingPdf;