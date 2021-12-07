import React, {Component} from 'react';
import '../assets/styles/styles.scss';
// import vector from './assets/images/Vector (3).png';
import Rectangle from '../assets/images/Rectangle 19 (1).png';
import Select from "react-select";



class Page extends Component{
    render(){
      return(
        <>
<main>
<div className="main-section section">
    <h3 className="work">Work</h3>
    <div className="parent-blocks">
        <div className="block"><img src={Rectangle} /><h3>Izapteki.ru</h3></div>
        <div className="block1">
                <div className="block-1">
                    <p>Description. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <h3>TestGroup</h3>
        </div>
        <div className="block"><img src={Rectangle} /><h3>mobile app</h3></div>
        <div className="block"><img src={Rectangle} /><h3>Landing Page</h3></div>
        <div className="block"><div class="block-5"><button class="btn-2">VIEW MORE</button></div></div> 
    </div>
</div>

</main>
<div className="title">
<h3>
     Services
</h3>
</div>
<div className="select-design"> 
<Select
placeholder="Design"
classNamePrefix="option"
    options={[]}
/>
</div>


<div className="desc">
    <div className="desc-parent-blocks">
        <div className="desc-block"><h3>Web-design</h3><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p></div>
        <div className="desc-block"><h3>UI/UX design</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>
        <div className="desc-block"><h3>Branding</h3><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p></div>
        <div className="desc-block"><h3>Digital design</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>            
    </div>
</div>
<div className="selects">

<div className="select-design"> 
<Select
placeholder="Front-end"
classNamePrefix="option"
    options={[]}
/>
</div>
<div className="select-design"> 
<Select
placeholder="Back-end"
classNamePrefix="option"
    options={[]}
/>
</div>
<div className="select-design"> 
<Select
placeholder="SMM"
classNamePrefix="option"
    options={[]}
/>
</div>
<div className="select-design"> 
<Select
placeholder="Mobile"
classNamePrefix="option"
    options={[]}
/>
</div>

</div>
<div className="process">
 <div className="title">
<h3>
work Process
</h3>
 </div>      
       <div className="process-parent-blocks">
        <div className="process-block"><h3>1. Discovery</h3><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p></div>
        <div className="process-block"><h3>2. Audit</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>
        <div className="process-block"><h3>3. Website structure</h3><p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p></div>
        <div className="process-block"><h3>4. Design concept and layout design</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>            
        <div className="process-block"><h3>5. Prototype</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>            
        <div className="process-block"><h3>6. Structure and development</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>            
        <div className="process-block"><h3>7. Visual content</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>            
        <div className="process-block"><h3>8. Integrations</h3><p>It is a long established fact that a reader will be distracted by the readable content of a page when.</p></div>            
    </div>
</div>
</>
    )
  }
}


export default Page;
