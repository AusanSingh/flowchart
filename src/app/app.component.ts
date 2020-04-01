import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import {
  Compiler,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  ModuleWithComponentFactories,
  NgModule,
  ViewContainerRef
} from '@angular/core';
declare var $: any;
declare function drop(event): any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  public diagModel: any;

  private cx: number;
  private cy: number;

  


  @ViewChild('exampleDiv',{static:true}) exampleDiv: ElementRef;




  constructor() {
  }


  // getOperatorData($element) {
  //   var nbInputs = parseInt($element.data('nb-inputs'));
  //   var nbOutputs = parseInt($element.data('nb-outputs'));
  //   var data = {
  //     properties: {
  //       title: $element.text(),
  //       inputs: {},
  //       outputs: {}
  //     }
  //   };

  //   var i = 0;
  //   for (i = 0; i < nbInputs; i++) {
  //     data.properties.inputs['input_' + i] = {
  //       label: 'Input ' + (i + 1)
  //     };
  //   }
  //   for (i = 0; i < nbOutputs; i++) {
  //     data.properties.outputs['output_' + i] = {
  //       label: 'Output ' + (i + 1)
  //     };
  //   }

  //   return data;
  // }

  drop(event){
    console.log("Hello")
  };
  
  operatorI = 1;
  operatorII = 1;
  data ;
  addNewOperator() {

    var operatorId = 'created_operator_' + this.operatorI;
    var operatorData = {
      top: this.cx,
      left: this.cy,
      properties: {
        title: 'Operator ' + (this.operatorI + 3),
        class: 'myTest',
        inputs: {},
        outputs: {
          output_1: {
            label: 'Output 1',
          },
          // output_2: {
          //   label: 'Output 2',
          // },
          // output_3: {
          //   label: 'Output 3',
          // },
          // output_4: {
          //   label: 'Output 4',
          // },
        }
      }
    }

    this.operatorI++;
    $(this.exampleDiv.nativeElement).flowchart('createOperator', operatorId, operatorData);
    $(".myTest2 div.flowchart-operator-title.ui-draggable-handle").append("<li>Appended item</li>");
    this.cx+=50;
    this.cy+=50;
  }

  addNewOperator2() {

    //console.log(this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]]);
    var operatorId = 'created_operator_' + ( this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id + 1);
    var operatorData = null
    operatorData = {
      top: this.cx,
      left: this.cy,
      id: (this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id + 1),
      properties: {
        title: 'Operator ' + (this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id + 1),
        class: 'myTest2',
        inputs: {
          input_1: {
            label: '',
          },
          // input_2: {
          //   label: 'Input 2',
          // },
          // input_3: {
          //   label: 'Input 3',
          // },
        },
        outputs: {
          output_1: {
            label: 'Output 1',
          },
          output_2: {
            label: 'Output 2',
          },
          output_3: {
            label: 'Output 3',
          },
          output_4: {
            label: 'Output 4',
          },
        }
      }
    }

    this.operatorI++;

    
    $(this.exampleDiv.nativeElement).flowchart('createOperator', operatorId, operatorData);

    this.data = {};
    this.data = $(this.exampleDiv.nativeElement).flowchart('getData');
     let _Node = $(this.exampleDiv.nativeElement).flowchart()[0].children[1];
     _Node.children[_Node.children.length-1].firstElementChild.className += 
     ' '+(this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id);
    
     $("div.flowchart-operator-title.ui-draggable-handle."+this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id).empty();
     $("div.flowchart-operator-title.ui-draggable-handle."+this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id).prepend("<i class='fa fa-trash'></i><span>"+operatorData.properties.title+"</span>");
    // setTimeout(()=>{
    // },200);

    console.log(this.data);
    this.cx+=50;
    this.cy+=50;
    
  }

  deleteOperationOrLink() {
    $(this.exampleDiv.nativeElement).flowchart('deleteSelected');
    console.log(this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id + 1);
  }

  load() {
   // $(this.exampleDiv.nativeElement).flowchart('deleteSelected');
    var data = JSON.parse(this.diagModel);
    $(this.exampleDiv.nativeElement).flowchart('setData', data);
  }

  get() {
    //$(this.exampleDiv.nativeElement).flowchart('deleteSelected');
    var data = $(this.exampleDiv.nativeElement).flowchart('getData');
    this.diagModel = JSON.stringify(data, null, 2);
  }

  textLists = ["Hello","How r u","Hope you are doing well"]

  ngAfterViewInit() {


    var container = $('#chart_container');
    // this.cx = $('#exampleDiv').width() / 2;
    // this.cy = $('#exampleDiv').height() / 2;
    this.cx = 50;
    this.cy = 50;
    // $('#exampleDiv').panzoom({
    // });
    // $('#exampleDiv').panzoom('pan', -this.cx + container.width() / 2, -this.cy + container.height() / 2);

    // var possibleZooms = [0.5, 0.75, 1, 2, 3];
    // var currentZoom = 2;
    // container.on('mousewheel.focal', function (e) {
    //   e.preventDefault();
    //   var delta = (e.delta || e.originalEvent.wheelDelta) || e.originalEvent.detail;
    //   var zoomOut: any = delta ? delta < 0 : e.originalEvent.deltaY > 0;
    //   currentZoom = Math.max(0, Math.min(possibleZooms.length - 1, (currentZoom + (zoomOut * 2 - 1))));
    //   $('#exampleDiv').flowchart('setPositionRatio', possibleZooms[currentZoom]);
    //   $('#exampleDiv').panzoom('zoom', possibleZooms[currentZoom], {
    //     animate: false,
    //     focal: e
    //   });

    // });


    setTimeout(() => {
      this.data = {
        operators: {
          operator: {
            id: 1,
            top: 20,
            left: 20,
            properties: {
              title: "Operator",
              class: "myTest2",
              inputs: {
                input_1: {
                  label: ""
                }
              },
              outputs: {
                output_1: {
                  label: "Output 1"
                },
                output_2: {
                  label: "Output 2"
                },
                // output_3: {
                //   label: "Output 3"
                // }
              }
            }
          },
          created_operator_0: {
            id:2,
            top: 120,
            left: 300,
            properties: {
              title: "Operator 2",
              class: "myTest2",
              inputs: {
                input_1: {
                  label: ""
                }
              },
              outputs: {
                output_1: {
                  label: "Output 1"
                },
                output_2: {
                  label: "Output 2"
                },
                output_3: {
                  label: "Output 3"
                },
                // output_4: {
                //   label: "Output 4"
                // }
              }
            }
          }
        },
        links: {
          0: {
            fromOperator: "operator", //Start Node Object key name from where connection connected
            fromConnector: "output_1", //Start Node Child Output key from where connection connected
            fromSubConnector: 0,
            toOperator: "created_operator_0", //End Node Object key name from where connection connected 
            toConnector: "input_1", //End Node Child Input key from where connection connected
            toSubConnector: 0
          }
        },
        operatorTypes: {}
      };

      //return;
      $(this.exampleDiv.nativeElement).flowchart({
        data: this.data,
        multipleLinksOnInput: true,
      });

      let _Node = $(this.exampleDiv.nativeElement).flowchart()[0].children[1];
      var j = 0;
      for(var i in this.data.operators){
        _Node.children[j].firstElementChild.className += 
        ' '+(this.data.operators[i].id);
        $("div.flowchart-operator-title.ui-draggable-handle."+this.data.operators[i].id).empty();
        $("div.flowchart-operator-title.ui-draggable-handle."+this.data.operators[i].id).prepend("<i class='fa fa-trash'></i><span>"+this.data.operators[i].properties.title+"</span>");
        j++;
        
      }
      
      console.log(this.data.operators[Object.keys(this.data.operators)[Object.keys(this.data.operators).length - 1]].id + 1);
      $($(this.exampleDiv.nativeElement).flowchart()[0].children[1].children[0].lastElementChild).attr({ondrop:"drop(event)", ondragover:"allowDrop(event)"})
      console.log(this.data);
    }, 1000);

   // this.getOperatorData();

  }
}