import React, { Fragment } from 'react';



class Nodes extends React.Component {
    constructor() {
        super();
        this.state = {
            nodes: [
                {x: 0, y: 0, z: 0,}
           ]
        }   
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();

      
    }

    buttonHandler = () => {
        let nodex = this.myRef1.current.value;
        let nodey = this.myRef2.current.value;
        let nodez = this.myRef3.current.value;

        

       let nodesNew = this.state.nodes;
       nodesNew.push({x: nodex,y: nodey, z: nodez})
       this.setState({nodes: nodesNew})

        this.myRef1.current.value = '';
        this.myRef2.current.value = '';
        this.myRef3.current.value = '';
    }

    

    

    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <h6>X</h6>
                                <input
                                    ref={this.myRef1}
                                    type="text"
                                    className="form-control mt-2"
                                />
                            </div>
                            <div className="col-md-4">
                                <h6>Y</h6>
                                <input
                                    ref={this.myRef2}
                                    type="text"
                                    className="form-control mt-2"
                                />
                            </div>
                            <div className="col-md-4">
                                <h6>Z</h6>
                                <input
                                    ref={this.myRef3}
                                    type="text"
                                    className="form-control mt-2"
                                />
                            </div>
                        </div>
                        <button onClick={this.buttonHandler} type="button" className="btn btn-primary m-2">Добавить</button>

                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">X</th>
                                    <th scope="col">Y</th>
                                    <th scope="col">Z</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                    {this.state.nodes.map(item => {
                                        return (<tr>
                                            <td  scope="col">{item.x}</td>
                                            <td  scope="col">{item.y}</td>
                                            <td  scope="col">{item.z}</td>
                                        </tr>)
                                    }                                    
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </form>
            </>
        )
    }
}

export default Nodes
