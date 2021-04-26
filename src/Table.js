import React, {Component} from "react";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    const {data} = this.props;
    const rows = data.map( (item,index) =>{
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
            </tr>
        )
    })

    
    return (
        <tbody>
            {rows}
        </tbody>
    )
}

class Table extends React.Component{

    render(){
    const {CharacterData} = this.props;

        return (
            <table>
            <TableHeader />
            <TableBody data ={CharacterData}/>
            </table>
        )
    }

}

export default Table;