// import FamilyTree from '@balkangraph/familytree.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import OrgChart from '@balkangraph/orgchart.js';


var data = [
  { id: 1, name: 'Denny Curtis', title: 'CEO', img: 'https://cdn.balkan.app/shared/2.jpg' },
  { id: 2, pid: 1, name: 'Ashley Barnett', title: 'Sales Manager', img: 'https://cdn.balkan.app/shared/3.jpg' },
  { id: 3, pid: 1, name: 'Caden Ellison', title: 'Dev Manager', img: 'https://cdn.balkan.app/shared/4.jpg' },
  { id: 4, pid: 2, name: 'Elliot Patel', title: 'Sales', img: 'https://cdn.balkan.app/shared/5.jpg' },
  { id: 5, pid: 2, name: 'Lynn Hussain', title: 'Sales', img: 'https://cdn.balkan.app/shared/6.jpg' },
  { id: 6, pid: 3, name: 'Tanner May', title: 'Developer', img: 'https://cdn.balkan.app/shared/7.jpg' },
  { id: 7, pid: 3, name: 'Fran Parsons', title: 'Developer', img: 'https://cdn.balkan.app/shared/8.jpg' }
]

function Orgchart(props) {
  if (typeof window === 'object') {
    var people = document.getElementById("tree");
    
    if (people) {
      
      var chart = new OrgChart(people, {
        // scaleInitial: OrgChart.match.boundary,
        scaleMax: 1,
        mode: 'dark',
        template: "olivia",
        miniMap: true,
        // layout: OrgChart.mixed,
        mouseScrool: OrgChart.none, 
        collapse: {
          level: 2,
          allChildren:true
        },
        
        toolbar: {
          // layout: true,
          zoom: true,
          fit: true,
          expandAll: true,
          fullScreen: true
        },
        menu: {
          pdfPreview: {
            text: "PDF Preview",
            icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
            onClick: function preview() {
              OrgChart.pdfPrevUI.show(chart, {
                format: 'A4',
                footer: 'Page {current-page} of {total-pages}'
              });
            }
          },
          pdf: { text: "Export PDF" },
          png: { text: "Export PNG" },
          svg: { text: "Export SVG" },
        },
        nodeMenu: {
          remove: { text: "删   除" },
          edit: { text:   "临时编辑" },
        },
        nodeBinding: {
          field_0: "名字",
          field_1: "圣经",
          // img_0: "img"
        },
        linkBinding: {
          link_field_0: "Born",
        },
        nodes: props.nodes
      });
    }
  }
  return (null)
}








export default function HomePage() {
    const [tree,setTree] = useState([])

    useEffect(()=>{
      axios.get("/api/treedata").then(function(e){
        console.log(e.data.data,"dea")
        const data = e.data.data.data
        console.log(data,"eeeeee")
        setTree(data)
      })
    },[])

    return (<>
        <section>
          {tree && (<>
              <div id="tree" style={{background:"#fff0"}}></div>
              <Orgchart nodes={tree} />
          </>)}
        </section>
    </>)
}
